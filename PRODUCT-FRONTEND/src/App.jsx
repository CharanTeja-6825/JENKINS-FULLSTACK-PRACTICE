import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddProduct from "./AddProduct";
import Manage from "./Manage";
import FindByName from "./FindByName";

function App() {
  return (
    <BrowserRouter basename="/reactproductapi">
      <Navbar />
      <Routes>
        <Route path="/" element={<AddProduct />} />
        <Route path="/manage" element={<Manage />} />
        <Route path="/find" element={<FindByName />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
