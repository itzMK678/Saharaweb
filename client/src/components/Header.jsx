import {React,useState} from "react";
import { TextAlignJustify, X } from "lucide-react";
import logo from "../assets/logo.png"; // Ensure you have a logo image in the specified path
import { Link } from "react-router-dom";
import DonationForm from "./DonatingForm";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  
  return (
    <header className=" bg-[#002800] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-1  flex items-center justify-between">
        {/* Logo */}
        <div className=" cursor-pointer">
          <img src={logo} alt="Logo" className="h-15" />
        </div>

        {/* Navigation */}
        <div className=" hidden md:block flex space-x-8 text-lg">
          <Link to="/" className="hover:text-green-200 transition">Home</Link>
          <Link to="/about" className="hover:text-green-200 transition">About</Link>
          <Link to="/team" className="hover:text-green-200 transition">Team</Link>
          <Link to="/contact" className="hover:text-green-200 transition">Contact</Link>
        </div>

        {/* Button */}
       

       
      <div className="flex items-center space-x-4">
       <button className=" bg-white text-green-900 px-5 py-2 rounded-[4px] cursor-pointer font-semibold hover:bg-green-800 hover:text-white transition">
        Fund 
        </button>
        <div className="md:hidden relative ">
        <TextAlignJustify className="text-white"  onClick={() => setMobileOpen(!mobileOpen)}/>
        <div className={
    (mobileOpen ? "block" : "hidden") +
    " absolute right-4 z-10 top-10 w-[200px] bg-white h-auto shadow-lg rounded-[8px]"
  }>
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
      {/* small screen navbar */}
      
    </header>
  );
};

export default Header;
