import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Manage() {
    const [products, setProducts] = useState([])
    const [message, setMessage] = useState("")

    const fetchProducts = async () => {
        try {
            const res = await axios.get('http://localhost:2030/springbootproductapi/products/all')
            setProducts(res.data)
        } catch (err) {
            setMessage("Error fetching products.")
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:2030/springbootproductapi/products/${id}`)
            setMessage("Product deleted!")
            fetchProducts()
        } catch {
            setMessage("Error deleting product.")
        }
    }

    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Manage Products</h2>
            {message && <div className="mb-2 text-green-600">{message}</div>}
            <table className="min-w-full border">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">Name</th>
                        <th className="border px-4 py-2">Category</th>
                        <th className="border px-4 py-2">Price</th>
                        <th className="border px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(prod => (
                        <tr key={prod.id}>
                            <td className="border px-4 py-2">{prod.name}</td>
                            <td className="border px-4 py-2">{prod.category}</td>
                            <td className="border px-4 py-2">{prod.price}</td>
                            <td className="border px-4 py-2">
                                <button
                                    onClick={() => handleDelete(prod.id)}
                                    className="bg-red-500 text-white px-2 py-1 rounded"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Manage