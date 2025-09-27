import React from 'react'
import Herosection from '../components/home/Herosection'
import Mission from '../components/home/Mission'
import Certifications from '../components/home/Certifications'
import ImageScroller from '../components/ImageScroller'

const Home = () => {
  return (
    <div className='bg-gray-100 '><Herosection />
    <ImageScroller />
    <Mission />
    <Certifications />
    </div>
  )
}

export default Home