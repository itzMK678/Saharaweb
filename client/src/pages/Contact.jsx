import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Bank Details */}
     

      {/* Offices */}
      <section className=" max-w-6xl mx-auto px-4 pb-10 space-y-10">
        {/* Main Head Office */}
        <div className="mt-3 bg-white rounded-lg shadow-md overflow-hidden">
          <h3 className="text-2xl font-bold text-center py-4 bg-[#002800] text-white">
            Head Office
          </h3>
          <div className="flex flex-col md:flex-row">
            {/* Map */}
            <iframe
              title="Head Office Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.585584352296!2d68.33171457360402!3d25.385201974063502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c7a7609358b05%3A0x398e178fca3a9976!2sGul-E-Latif%20Phase%201%20Qasimabad%2C%20Hyderabad%2C%20Pakistan!5e0!3m2!1sen!2s!4v1759054536472!5m2!1sen!2s" 
              className="w-full md:w-1/2 h-64 md:h-auto border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            {/* Address */}
            <div className="p-6 md:w-1/2">
              <h4 className="text-xl font-semibold mb-2">Address</h4>
              <p>Bangalow A-11
Gul-E-Latif, Phase – I, near Technical College
Qasimabad, Hyderabad</p>
              <p className="mt-3">
                <span className="font-semibold">Contact:</span> 0333-8373778
              </p>
              <p>
                <span className="font-semibold">Email:</span> sahara.org@hotmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Sub Office 1 */}
        <div className="flex flex-wrap space-evenly">
        <div className="bg-white max-w-[500px] rounded-lg shadow-md overflow-hidden m-2">
          <h3 className="text-2xl font-bold text-center py-4 bg-[#002800] text-white">
            Regional Headquarter 1
          </h3>
          <div className="flex flex-col md:flex-row">
            {/* Map */}
            <iframe
              title="Sub Office 1 Map"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.797590729259!2d68.10445717366864!3d26.84638946294091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394a80bff44750f7%3A0xffeb1b7751a6c7f3!2sNaushahro%20Feroze%20Bypass%2C%20Pakistan!5e0!3m2!1sen!2s!4v1759054743764!5m2!1sen!2s" 
              className="w-full md:w-1/2 h-64 md:h-auto border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            {/* Address */}
            <div className="p-6 md:w-1/2">
              <h4 className="text-xl font-semibold mb-2">Address</h4>
              <p> Main Bypass, Naushahro Ferozen</p>
              <p className="mt-3">
                <span className="font-semibold">Contact:</span>0242-530308
              </p>
              <p className="mt-3">
                <span className="font-semibold">Contact:</span>0301-3215355
              </p>
             
            </div>
          </div>
        </div>

        {/* Sub Office 2 */}
        <div className="m-2 bg-white max-w-[500px] rounded-lg shadow-md overflow-hidden">
          <h3 className="text-2xl font-bold text-center py-4 bg-[#002800] text-white">
             Regional Headquarter 2
          </h3>
          <div className="flex flex-col md:flex-row">
            {/* Map */}
            <iframe
              title="Sub Office 2 Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.655968685126!2d67.94633517366161!3d26.691483269566106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394a900679d8e0d5%3A0x1b52353761262fb6!2sDadu%20-%20Moro%20Rd%2C%20Pakistan!5e0!3m2!1sen!2s!4v1759054984329!5m2!1sen!2s" 
              className="w-full md:w-1/2 h-64 md:h-auto border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            {/* Address */}
            <div className="p-6 md:w-1/2">
              <h4 className="text-xl font-semibold mb-2">Address</h4>
              <p>Dadu Moro Road
Moro City</p>
              <p className="mt-3">
                <span className="font-semibold">Contact:</span>0242-412144
              </p>
              <p className="mt-3">
                <span className="font-semibold">Contact:</span>0300-2665426
              </p>
            </div>
          </div>
        </div>
        </div>
      <h2 className="text-3xl font-bold text-center mb-6">
  Our Communication Channels
</h2>

<section className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* Bank Details */}
  <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition hover:bg-[#002800] hover:text-white">
    <p className="font-semibold text-lg mb-2">Bank Details</p>
    <p className="font-medium">Bank Name: Allied Bank Limited</p>
    
    <p>Account No: PK 91 ABPA00100346412800 13</p>
    <p>Branch Code: 0450 MBQ Branch, Minara Road Sukkur</p>
  </div>

  {/* Contact Details */}
  <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition  hover:bg-[#002800] hover:text-white">
    <p className="font-semibold text-lg mb-2">Contact Us</p>
    <p>📞 0333-8373778</p>
    <p>📞 0242-530308</p>
    <p> sahara.org@hotmail.com</p>
  </div>
</section>
      </section>
    </div>
  );
};

export default Contact;
