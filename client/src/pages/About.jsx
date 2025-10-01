import React from 'react'
import ImageScroller from '../components/ImageScroller'
import AimsObjectives from '../components/AimsObjectives'
import WorkCard from '../components/WorkCard'
import help1 from "../assets/help1.png"
import help2 from "../assets/help2.png"
import help3 from "../assets/im1.png"
const data = [
  {Pic: help1, Title: "Rashan Distribution", Description: "In Holy month of Ramadan we distributes Rashan to those in need."},
  {Pic: help2, Title: "Providing Food", Description: "On different occasions we provides food to those in need."},
  {Pic: help3, Title: "Providing Awareness", Description: "We aim to raise awareness about various social issues."}
]
const About = () => {
  return (
    <div className='bg-gray-100'>
      <div className='bg-[#002800] h-[100px] font-extrabold text-5xl text-center text-white p-4 border-t-2'>Our Aim </div>
      <AimsObjectives />
      <ImageScroller />
      <div className="flex flex-wrap justify-center">
        {data.map((item, index) => (
          <WorkCard key={index} {...item} />
        ))}
      </div>
    </div>
  )
}

export default About