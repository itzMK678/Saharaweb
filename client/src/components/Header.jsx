import React from "react";
import logo from "../assets/logo.png"; // Ensure you have a logo image in the specified path
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="bg-[#006400] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-1  flex items-center justify-between">
        {/* Logo */}
        <div className=" cursor-pointer">
          <img src={logo} alt="Logo" className="h-15" />
        </div>

        {/* Navigation */}
        <div className="flex space-x-8 text-lg">
          <Link to="/" className="hover:text-green-200 transition">Home</Link>
          <Link to="/about" className="hover:text-green-200 transition">About</Link>
          <Link to="/team" className="hover:text-green-200 transition">Team</Link>
          <Link to="/contact" className="hover:text-green-200 transition">Contact</Link>
        </div>

        {/* Button */}
        <button className="bg-white text-green-900 px-5 py-2 rounded-[4px] font-semibold hover:bg-green-800 hover:text-white transition">
          Contact
        </button>
      </div>
    </header>
  );
};

export default Header;
