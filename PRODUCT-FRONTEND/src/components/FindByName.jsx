import React, { useState } from 'react'
import axios from 'axios'

function FindByName() {
    const [name, setName] = useState("")
    const [product, setProduct] = useState(null)
    const [message, setMessage] = useState("")

    const handleSearch = async (e) => {
        e.preventDefault()
        setProduct(null)
        setMessage("")
        try {
            const res = await axios.get(`http://localhost:2030/springbootproductapi/products/search?name=${name}`)
            // If backend returns an array, pick the first match
            let prod = res.data
            if (Array.isArray(prod)) {
                prod = prod.length > 0 ? prod[0] : null
            }
            if (prod && prod.name) {
                setProduct(prod)
                setMessage("")
            } else {
                setProduct(null)
                setMessage("Product not found.")
            }
        } catch {
            setProduct(null)
            setMessage("Product not found.")
        }
    }

    return (
        <div className="flex flex-col items-center mt-10">
            <form onSubmit={handleSearch} className="flex gap-2 mb-4">
                <input
                    type="text"
                    placeholder="Enter Product Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="border p-2 rounded"
                    required
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Search
                </button>
            </form>
            {message && <div className="text-red-600">{message}</div>}
            {product && product.name && (
                <div className="border p-4 rounded bg-gray-100 w-80">
                    <h3 className="font-bold mb-2">Product Details</h3>
                    <p><b>Name:</b> {product.name}</p>
                    <p><b>Category:</b> {product.category}</p>
                    <p><b>Price:</b> {product.price}</p>
                </div>
            )}
        </div>
    )
}

export default FindByName