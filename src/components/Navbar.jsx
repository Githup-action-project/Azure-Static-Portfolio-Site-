import React from "react";

function Navbar() {

return (
    <nav className="bg-white shadow-md py-4 px-6 fixed top-0 left-0 right-0 z-50">
      <ul className="flex justify-center space-x-6 font-semibold text-blue-600">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#analytics">Analytics</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
