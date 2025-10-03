import React from 'react'

// --- IMAGES (adjust paths if needed) ---
import img2019a from "../assets/2019/2019 (1).png"
import img2019b from "../assets/2019/2019 (2).png"
import img2019c from "../assets/2019/2019 (3).png"
import img2019d from "../assets/2019/2019 (4).png"

import img2020a from "../assets/2020/2020 (1).png"
import img2020b from "../assets/2020/2020 (2).png"
import img2020c from "../assets/2020/2020 (3).png"
import img2020d from "../assets/2020/2020 (4).png"

import img2021a from "../assets/2021/2021 (1).png"
import img2021b from "../assets/2021/2021 (2).png"



// For 2023–2025 just use placeholders now (replace later)
import img2023a from "../assets/2023/2023 (1).png"
import img2023b from "../assets/2023/2023 (2).png"
import img2023c from "../assets/2023/2023 (3).png"


import img2024a from "../assets/2024/2024 (1).png"
import img2024b from "../assets/2024/2024 (2).png"


import img2025a from "../assets/2025/2025 (1).png"
import img2025b from "../assets/2025/2025 (2).png"
import img2025c from "../assets/2025/2025 (3).png"
import img2025d from "../assets/2025/2025 (4).png"

// --- COMPONENT ---
import WorkCard from '../components/WorkCard'

// --- DATA ---
const sectionData = [
  {
    heading: "Activities - 2020",
    items: [
      { Pic: img2019a, Title: "2020" },
      { Pic: img2019b, Title: "2020" },
      { Pic: img2019c, Title: "2020" },
      { Pic: img2019d, Title: "2020" },
    ],
  },
  {
    heading: "Activities - 2021",
    items: [
      { Pic: img2020a, Title: "2021" },
      { Pic: img2020b, Title: "2021" },
      { Pic: img2020c, Title: "2021" },
      { Pic: img2020d, Title: "2021" },
    ],
  },
  {
    heading: "Activities - 2022",
    items: [
      { Pic: img2021a, Title: "2022" },
      { Pic: img2021b, Title: "2022" },

    ],
  },

  {
    heading: "Activities - 2023",
    items: [
      { Pic: img2023a, Title: "2023" },
      { Pic: img2023b, Title: "2023" },
      { Pic: img2023c, Title: "2023" },

    ],
  },
  {
    heading: "Activities - 2024",
    items: [
      { Pic: img2024a, Title: "2024" },
      { Pic: img2024b, Title: "2024" },

    ],
  },
  {
    heading: "Activities - 2025",
    items: [
      { Pic: img2025a, Title: "2025" },
      { Pic: img2025b, Title: "2025" },
      { Pic: img2025c, Title: "2025" },
      { Pic: img2025d, Title: "2025" },
    ],
  },
]

const Actitvity = () => {
  return (
    <div className="pb-10">
      <h1 className="text-3xl text-center py-5 font-extrabold text-[#002800]">Highlights of Our Work Through the Years</h1>
      {sectionData.map((section, i) => (
        <div key={i} className="mb-12">
          <h2 className="text-3xl bg-[#002800] text-white py-3 font-bold text-center mb-6">
            {section.heading}
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {section.items.map((item, index) => (
              <WorkCard key={index} {...item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Actitvity
