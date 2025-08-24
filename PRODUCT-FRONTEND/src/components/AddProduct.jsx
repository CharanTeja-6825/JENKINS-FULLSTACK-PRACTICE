import React, { useState } from 'react'
import axios from 'axios'

function AddProduct() {
    const [formData, setFormData] = useState({
        name: "",
        category: "",
        price: ""
    })
    const [message, setMessage] = useState("")

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:2030/products', formData)
            setMessage("Product added successfully!")
            setFormData({ name: "", category: "", price: "" })
        } catch (err) {
            setMessage("Error adding product.")
        }
    }

    return (
        <div className="flex justify-center mt-10">
            <form 
                className="flex flex-col gap-4 p-6 border-2 border-black-500 rounded w-96 bg-white shadow"
                onSubmit={handleSubmit}
            >
                <h2 className="text-xl font-bold mb-2">Add Product</h2>
                <label htmlFor="name">Product Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border p-2 rounded"
                    required
                />

                <label htmlFor="category">Product Category</label>
                <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="border p-2 rounded"
                    required
                >
                    <option value="">--select--</option>
                    <option value="ELECTRONICS">Electronics</option>
                    <option value="FOOD">Food</option>
                    <option value="ESSENTIALS">Essentials</option>
                </select>

                <label htmlFor="price">Price</label>
                <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    className="border p-2 rounded"
                    required
                />

                <button
                    type="submit"
                    className="bg-red-500 text-white py-2 rounded hover:bg-red-600"
                >
                    Add Product
                </button>
                {message && <div className="text-center text-green-600">{message}</div>}
            </form>
        </div>
    )
}

export default AddProduct