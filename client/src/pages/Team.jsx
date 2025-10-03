import React from "react";
import pic from "../assets/default.png"; 

const Team = () => {
  return (
    <div className="bg-gray-50 text-[#002800]">
      {/* Institute Head */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Chairman</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src={pic}
            alt="Institute Head"
            className="w-48 h-48 rounded-full object-cover shadow-lg"
          />
          <div>
            <h3 className="text-2xl font-semibold">Mr Abdul Hameed Memon</h3>
            <p className="text-gray-600">Founder & Chairman</p>
            <p className="mt-4">
             Abdul Hameed Memon (M.A. Economics, LL.B) is the Chairman and Founder of SAHARA since 2014-15. With decades of leadership in education, welfare and community development, he also heads the United Memon Educational & Welfare Society and serves as Managing Director of Ali Builders & Developers. An Advocate of the High Court Sindh, he has held several key positions including President of Sindh Memon Itihad and Director of Jeay FM 88 Network, reflecting his lifelong commitment to public service and social uplift.</p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Member 1 */}
            <div className="bg-gray-100 rounded-lg shadow-md p-6 text-center hover:bg-[#002800] hover:text-white transition">
              <img
                src={pic}
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">Mrs Farida Memon</h3>
              <p >Vice Chairperson</p>
            </div>
            {/* Member 2 */}
            <div className="bg-gray-100 rounded-lg shadow-md p-6 text-center hover:bg-[#002800] hover:text-white transition">
              <img
                src={pic}
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">Mr Aftab Ahmed</h3>
              <p >General Secretary</p>
            </div>
{/* Member 3 */}
             <div className="bg-gray-100 rounded-lg shadow-md p-6 text-center hover:bg-[#002800] hover:text-white transition">
              <img
                src={pic}
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">Mr Sajjad Ahmed Memon</h3>
              <p >Finance Secretary</p>
            </div>
            {/* Member 3 */}
           
            {/* Member 4 */}
             <div className="bg-gray-100 rounded-lg shadow-md p-6 text-center hover:bg-[#002800] hover:text-white transition">
              <img
                src={pic}
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">Mr Abdul Sattar Memon</h3>
              <p>Social Worker</p>
            </div>

            {/* Member 3 */}
             <div className="bg-gray-100 rounded-lg shadow-md p-6 text-center hover:bg-[#002800] hover:text-white transition">
              <img
                src={pic}
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">Mst Kainat Kalwar</h3>
              <p >Social Worker</p>
            </div>
            {/* Member 3 */}
             <div className="bg-gray-100 rounded-lg shadow-md p-6 text-center hover:bg-[#002800] hover:text-white transition">
              <img
                src={pic}
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">Mst Snobar Zubair</h3>
              <p >Social Worker</p>
            </div>
            {/* Add more team members */}
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default Team;
