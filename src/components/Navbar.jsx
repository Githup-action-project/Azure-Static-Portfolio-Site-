
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/Edustuskuva.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-4 px-6 fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between">
        {/* Logo with image */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Logo"
            className="w-10 h-10 rounded-full border-2 border-blue-600"
          />
          <span className="text-xl font-bold text-blue-600 hover:text-purple-600 transition">
            
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 font-semibold text-blue-600">
          <li><Link to="/home" className="hover:text-purple-600 transition">Home</Link></li>
          <li><Link to="/about" className="hover:text-purple-600 transition">About</Link></li>
          <li><Link to="/projects" className="hover:text-purple-600 transition">Projects</Link></li>
          <li><Link to="/analytics" className="hover:text-purple-600 transition">Analytics</Link></li>
          <Link to="/about-site"className="block hover:text-purple-600 transition">My Portofolio</Link>
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-blue-600" aria-label={isOpen ? "Close menu" : "Open menu"}>
          {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-2 font-semibold text-blue-600">
          <li><Link to="/home" className="block hover:text-purple-600 transition">Home</Link></li>
          <li><Link to="/about" className="block hover:text-purple-600 transition">About</Link></li>
          <li><Link to="/projects" className="block hover:text-purple-600 transition">Projects</Link></li>
          <li><Link to="/analytics" className="block hover:text-purple-600 transition">Analytics</Link></li>
          <Link to="/about-site"className="block hover:text-purple-600 transition">My Portofolio</Link>
          
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
