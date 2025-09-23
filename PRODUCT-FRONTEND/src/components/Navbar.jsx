import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex gap-5 justify-center mt-5">
      <Link
        className="bg-gray-300 p-2 rounded-md hover:bg-gray-400"
        to="/"
      >
        Add Product
      </Link>
      <Link
        className="bg-gray-300 p-2 rounded-md hover:bg-gray-400"
        to="/manage"
      >
        Manage
      </Link>
      <Link
        className="bg-gray-300 p-2 rounded-md hover:bg-gray-400"
        to="/find"
      >
        Find Product
      </Link>
    </nav>
  );
}

export default Navbar;
