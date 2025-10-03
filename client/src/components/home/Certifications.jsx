import React, { useState } from "react";
import cert1 from "../../assets/Certification1.png"; // vertical certificate
import cert2 from "../../assets/Certification2.png"; // horizontal certificate

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h2 className="text-5xl text-[#002800] font-bold mb-8">CERTIFICATIONS</h2>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Vertical Certificate */}
        <img
          src={cert1}
          alt="Certificate 1"
          className="w-72 cursor-pointer rounded shadow-lg hover:scale-105 transition"
          onClick={() => setSelectedCert(cert1)}
        />

        {/* Horizontal Certificate */}
        <img
          src={cert2}
          alt="Certificate 2"
          className="w-96 cursor-pointer rounded shadow-lg hover:scale-105 transition"
          onClick={() => setSelectedCert(cert2)}
        />
      </div>

      {/* Fullscreen Modal */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
            >
              ✕ Close
            </button>
            <img
              src={selectedCert}
              alt="Full Certificate"
              className="max-h-[90vh] max-w-[90vw] rounded shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Certifications;
