import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Bank Details */}
     

      {/* Offices */}
      <section className=" max-w-6xl mx-auto px-4 pb-10 space-y-10">
        {/* Main Head Office */}
        <div className="mt-3 bg-white rounded-lg shadow-md overflow-hidden">
          <h3 className="text-2xl font-bold text-center py-4 bg-green-700 text-white">
            Main Head Office
          </h3>
          <div className="flex flex-col md:flex-row">
            {/* Map */}
            <iframe
              title="Head Office Map"
              src="https://www.google.com/maps/embed?pb=YOUR_HEAD_OFFICE_MAP_URL"
              className="w-full md:w-1/2 h-64 md:h-auto border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            {/* Address */}
            <div className="p-6 md:w-1/2">
              <h4 className="text-xl font-semibold mb-2">Address</h4>
              <p>123 Main Street, City, Province, Pakistan</p>
              <p className="mt-3">
                <span className="font-semibold">Contact:</span> 0300-0000000
              </p>
              <p>
                <span className="font-semibold">Email:</span> info@sahara.org.pk
              </p>
            </div>
          </div>
        </div>

        {/* Sub Office 1 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <h3 className="text-2xl font-bold text-center py-4 bg-green-700 text-white">
            Sub Office 1
          </h3>
          <div className="flex flex-col md:flex-row">
            {/* Map */}
            <iframe
              title="Sub Office 1 Map"
              src="https://www.google.com/maps/embed?pb=YOUR_SUB_OFFICE1_MAP_URL"
              className="w-full md:w-1/2 h-64 md:h-auto border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            {/* Address */}
            <div className="p-6 md:w-1/2">
              <h4 className="text-xl font-semibold mb-2">Address</h4>
              <p>456 Sub Street, City, Province, Pakistan</p>
              <p className="mt-3">
                <span className="font-semibold">Contact:</span> 0300-1111111
              </p>
              <p>
                <span className="font-semibold">Email:</span> suboffice1@sahara.org.pk
              </p>
            </div>
          </div>
        </div>

        {/* Sub Office 2 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <h3 className="text-2xl font-bold text-center py-4 bg-green-700 text-white">
            Sub Office 2
          </h3>
          <div className="flex flex-col md:flex-row">
            {/* Map */}
            <iframe
              title="Sub Office 2 Map"
              src="https://www.google.com/maps/embed?pb=YOUR_SUB_OFFICE2_MAP_URL"
              className="w-full md:w-1/2 h-64 md:h-auto border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            {/* Address */}
            <div className="p-6 md:w-1/2">
              <h4 className="text-xl font-semibold mb-2">Address</h4>
              <p>789 Sub Street, City, Province, Pakistan</p>
              <p className="mt-3">
                <span className="font-semibold">Contact:</span> 0300-2222222
              </p>
              <p>
                <span className="font-semibold">Email:</span> suboffice2@sahara.org.pk
              </p>
            </div>
          </div>
        </div>
      </section>
       <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center mb-6">Our Bank Details</h2>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <p className="font-semibold">Bank Name: XYZ Bank</p>
          <p>Account Title: SAHARA Foundation</p>
          <p>Account No: 123456789</p>
          <p>IBAN: PK00-XYZB-000000000</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
