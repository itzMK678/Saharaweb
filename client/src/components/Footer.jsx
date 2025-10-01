import React from "react";
import { Facebook, Mail, MapPin } from "lucide-react"; // ✅ add MapPin

import logo from "../assets/logo2.png";

const Footer = () => {
  return (
    <div className="group">
    <footer className="bg-[#002800] text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        
        {/* Left - Logo */}
        <div className="flex justify-center md:justify-start">
          <img src={logo} alt="SAHARA Logo" className="w-28" />
        </div>

        {/* Center - Links */}
        <div className="flex flex-col items-center">
          <nav className="flex flex-col md:flex-row md:space-x-6 text-lg font-medium text-center md:text-left">
            <a href="/" className="hover:text-green-900">Home</a>
            <a href="/about" className="hover:text-green-900">About</a>
            <a href="/team" className="hover:text-green-900">Team</a>
            <a href="/contact" className="hover:text-green-900">Contact</a>
            <a href="https://mamoon-dev.vercel.app/" className="hover:text-green-900">WebDeveloper</a>
             <a href="https://www.linkedin.com/in/muhammad-umar-farooq-3bba0b249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="hover:text-green-900">WebDeveloper</a>
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
    href="https://www.facebook.com/saharaofficialpk/"
    target="_blank"
    rel="noreferrer"
    className="hover:text-green-900"
  >
    <Facebook className="w-6 h-6" />
  </a>
  <a
    href="https://www.google.com/maps/place/Gul-E-Latif+Phase+1+Qasimabad,+Hyderabad,+Pakistan/@25.385202,68.3317146,17z/data=!3m1!4b1!4m6!3m5!1s0x394c7a7609358b05:0x398e178fca3a9976!8m2!3d25.3862055!4d68.3329913!16s%2Fg%2F11bbrh4t56?entry=ttu&g_ep=EgoyMDI1MDkyOS4wIKXMDSoASAFQAw%3D%3D" // 🔗 link to your location on Google Maps
    target="_blank"
    rel="noreferrer"
    className="hover:text-green-900"
  >
    <MapPin className="w-6 h-6" />
  </a>
</div>


          {/* Numbers */}
          <div className="mt-4 text-sm space-y-1">
            <p>📞 0333-8373778</p>
            <p>📞 0301-3215355</p>
            <p>📞 0300-2665426</p>
          </div>
        </div>

        {/* Right - Empty for symmetry (can add something later if needed) */}
       
      </div>
     
    </footer>
    <a href="https://mamoon-dev.vercel.app/"> <div className="bg-white h-5 text-center font-semibold text-[#002800]">
      <div className="group-hover:hidden">copyRight-reserved-Registration no 1803</div>
     <div className="hidden  group-hover:block">Developed by Mamoon Khaliq</div>
      </div></a> 
</div>
  );
};

export default Footer;
