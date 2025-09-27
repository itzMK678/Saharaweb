import React from "react";
import { Facebook, Mail, MapPin } from "lucide-react"; // ✅ add MapPin

import logo from "../assets/logo2.png";

const Footer = () => {
  return (
    <div className="group">
    <footer className="bg-[#006400] text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        
        {/* Left - Logo */}
        <div className="flex justify-center md:justify-start">
          <img src={logo} alt="SAHARA Logo" className="w-28" />
        </div>

        {/* Center - Links */}
        <div className="flex flex-col items-center">
          <nav className="flex flex-col md:flex-row md:space-x-6 text-lg font-medium text-center md:text-left">
            <a href="#home" className="hover:text-green-900">Home</a>
            <a href="#about" className="hover:text-green-900">About</a>
            <a href="#event" className="hover:text-green-900">Event</a>
            <a href="#contact" className="hover:text-green-900">Contact</a>
            <a href="#web-developer" className="hover:text-green-900">WebDeveloper</a>
             <a href="#web-developer" className="hover:text-green-900">WebDeveloper</a>
          </nav>

          {/* Social Icons */}
         <div className="flex space-x-6 text-2xl mt-4">
  <a
    href="mailto:yourmail@gmail.com"
    className="hover:text-green-900"
  >
    <Mail className="w-6 h-6" />
  </a>
  <a
    href="https://facebook.com"
    target="_blank"
    rel="noreferrer"
    className="hover:text-green-900"
  >
    <Facebook className="w-6 h-6" />
  </a>
  <a
    href="https://goo.gl/maps/example" // 🔗 link to your location on Google Maps
    target="_blank"
    rel="noreferrer"
    className="hover:text-green-900"
  >
    <MapPin className="w-6 h-6" />
  </a>
</div>


          {/* Numbers */}
          <div className="mt-4 text-sm space-y-1">
            <p>📞 +92 300 1234567</p>
            <p>📞 +92 333 9876543</p>
          </div>
        </div>

        {/* Right - Empty for symmetry (can add something later if needed) */}
       
      </div>
     
    </footer>
    <a href="https://mamoon-dev.vercel.app/"> <div className="bg-white h-5 text-center font-semibold text-[#006400]">
      <div className="group-hover:hidden">copyRight-reserved-Registration no 1803</div>
     <div className="hidden  group-hover:block">Developed by Mamoon Khaliq</div>
      </div></a> 
</div>
  );
};

export default Footer;
