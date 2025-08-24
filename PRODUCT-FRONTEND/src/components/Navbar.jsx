import React from 'react'
import {BrowserRouter, Route, Routes, Link} from "react-router-dom"
import AddProduct from './AddProduct'
import Manage from './Manage'
// import FindById from './FindById'
import FindByName from './FindByName'

function Navbar() {
  return (
    <div>
        <BrowserRouter>
            <nav className='flex gap-5 justify-center mt-5'>
                <Link className='bg-gray-300 p-2 rounded-md hover:bg-gray-400' to="/add">Add Product</Link>
                <Link className='bg-gray-300 p-2 rounded-md hover:bg-gray-400' to="/manage">Manage</Link>
                <Link className='bg-gray-300 p-2 rounded-md hover:bg-gray-400' to="/find">Find Product</Link>
            </nav>
            <Routes>
                <Route path='/add' element = {<AddProduct />}/>
                <Route path='/manage' element = {<Manage />}/>
                <Route path='/find' element = {<FindByName />}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Navbar