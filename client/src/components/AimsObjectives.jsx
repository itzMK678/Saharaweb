import React, { useState } from "react";

const aims = [
  {
    title: "Educational Institutions",
    detail:
      "To open/establish primary to secondary and high education schools and colleges, etc.",
  },
  {
    title: "Education & Literacy",
    detail:
      "Establishment of primary, secondary and higher schools & colleges for the benefit of the nation itself. To provide the basic services and needs related to education such as pencils, bags, uniforms, etc. To sensitize communities for the attainment of education specially focusing on girl’s education & build community participatory educational schools, targeting rural areas.",
  },
  {
    title: "Health Facilities",
    detail:
      "To provide best health facilities to the public in general and to work for emergencies and relief work and rehabilitation. To establish health care centres and hospitals for the benefit of public at large.",
  },
  {
    title: "Mother and Child Care",
    detail:
      "To establish Mother & Child Care Centers which would benefit the women and children.",
  },
  {
    title: "Peace & Rights",
    detail:
      "To aware, educate youth and communities for the attainment of peace and prosperity and mobilizing communities regarding their basic political, socio-economic and human rights. To assist the law departments in formulating legal policies. To assist the law enforcement agencies in enforcing the law.",
  },
  {
    title: "Plantation of Greenery & Sustainable Agriculture",
    detail:
      "To plant the greenery around the Sindh, Pakistan to establish better environment for the public in general and to finish off the pollution. Furthermore, establishment of public parks for plantation as well as for entertainment purpose of public. To aware rural peasant communities for the promotion of chemical free and sustainable agriculture practices.",
  },
  {
    title: "Environment & Climate Change",
    detail:
      "To sensitize communities and youth to initiate environment friendly initiatives, forest conservation, water management and water conservation, conservation of wet land, waste management and enable communities to become climate resilient.",
  },
  {
    title: "Education & Education Services Providers",
    detail:
      "To provide services for conducting fair examinations, etc. to NTS and other Departments.",
  },
  {
    title: "Seminars & Symposiums",
    detail:
      "To conduct seminars and symposiums, walks, rallies and other means of public outreach for the promotion of education and literacy in accordance with the Constitution of Pakistan, 1973 and prevailing law.",
  },
  {
    title: "Libraries & Reading Rooms",
    detail:
      "To establish & maintain libraries for better educational environment for the students and for the betterment of members & public in general.",
  },
  {
    title: "Entertainment Facilities",
    detail:
      "To establish public parks and to provide entertainment facilities to the members and public in general.",
  },
  {
    title: "Emergency and Relief Work",
    detail:
      "To work for emergencies and relief work and rehabilitation.",
  },
  {
    title: "Youth Awareness & Gender Equality",
    detail:
      "To mobilize youth and communities for Gender Equality and campaigns to end Gender-based violence and protection of women and children rights. To take initiatives for youth capacity building to become better citizens and social workers prompting peace, tolerance, harmony & progress; enlarging youth through career counselling, educational workshops & youth awareness programs. To improve their agriculture skills regarding the promotion of chemical free and sustainable practices. Lastly, to make awareness regarding the information technology as it is most used in the current generation.",
  },
  {
    title: "Women Mobilization",
    detail:
      "To mobilize rural women for their economic empowerment through income generation opportunities. To initiate skill development programs (vocational training centers) for the enhancement of women income generation alongside the parental guides.",
  },
  {
    title: "Research & Publication",
    detail:
      "To conduct action research on above mentioned areas and to print, public research periodicals, case studies, broachers and IEC material; based on the facts and finding drawn from research.",
  },
];

const AimsObjectives = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-5xl font-bold text-[#002800] text-center mb-8">
        
      </h2>
      <div className="space-y-4">
        {aims.map((aim, index) => (
          <div
            key={index}
            className="text-white border rounded-lg bg-[#002800] shadow-sm overflow-hidden"
          >
            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="w-full flex justify-between items-center px-4 py-3 text-left font-semibold text-lg "
            >
              {aim.title}
              <span className="text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-4 py-3 text-white">
                {aim.detail}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AimsObjectives;
