import React, { useState } from "react";
import { TextAlignJustify } from "lucide-react";
import logo from "../assets/logo.png"; // Ensure you have a logo image in the specified path
import { Link } from "react-router-dom";
import DonationForm from "./DonatingForm";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [fund, setFund] = useState(false);

  return (
    <header className=" bg-[#002800] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-1  flex items-center justify-between">
        {/* Logo */}
        <div className=" cursor-pointer">
          <img src={logo} alt="Logo" className="h-15" />
        </div>

        {/* Navigation */}
        <div className=" hidden md:block flex space-x-8 text-lg">
          <Link to="/" className="hover:text-green-200 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-green-200 transition">
            About
          </Link>
          <Link to="/team" className="hover:text-green-200 transition">
            Team
          </Link>
          <Link to="/activity" className="hover:text-green-200 transition">
            Activities
          </Link>
          <Link to="/contact" className="hover:text-green-200 transition">
            Contact
          </Link>
          
        </div>

        <div className="flex items-center space-x-4">
          <div className=" relative">
            <button
              className=" bg-white text-[#002800] px-5 py-2 rounded-[4px] cursor-pointer font-semibold hover:bg-green-800 hover:text-white transition"
              onClick={() => setFund(!fund)}
            >
              Donate
            </button>
            {/* FIXED CLASSNAME */}
            <div
              className={`${
                fund ? "block" : "hidden"
              } absolute right-4 z-10 top-15 text-[#002800] bg-white rounded-lg shadow-md p-6 w-[300px] sm:w-[350px] text-center hover:shadow-lg transition hover:bg-[#002800] hover:text-white`}
            >
              <p className="font-semibold  text-lg mb-2">Bank Details</p>
              <p className="font-medium">Bank Name: Allied Bank Limited</p>
              <p>Account No: PK 91 ABPA00100346412800 13</p>
              <p>Branch Code: 0450 MBQ Branch, Minara Road Sukkur</p>
            </div>
          </div>

          <div className="md:hidden relative ">
            <TextAlignJustify
              className="text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
            />
            {/* FIXED CLASSNAME */}
            <div
              className={`${
                mobileOpen ? "block" : "hidden"
              } absolute right-4 z-10 top-10 w-[200px] bg-white h-auto shadow-lg rounded-[8px]`}
            >
              <Link
                to="/"
                className="block border text-[#002800] border-[#002800] px-4 py-3 hover:bg-[#002800] hover:text-white transition"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block border text-[#002800] border-[#002800] px-4 py-3 hover:bg-[#002800] hover:text-white transition"
              >
                About
              </Link>
              <Link
                to="/team"
                className="block border text-[#002800] border-[#002800] px-4 py-3 hover:bg-[#002800] hover:text-white transition"
              >
                Team
              </Link>
              <Link to="/activity"
               className="block border text-[#002800] border-[#002800] px-4 py-3 hover:bg-[#002800] hover:text-white transition">
            Activities
          </Link>
              <Link
                to="/contact"
                className="block border text-[#002800] border-[#002800] px-4 py-3 hover:bg-[#002800] hover:text-white transition"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
