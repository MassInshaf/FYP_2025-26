import React from 'react'
import Topnav from '../components/Topnav'
import Footer from '../components/Footer'
import Top_image from "../assets/AboutPage.jpg"
import background from '../assets/background.png'
import AboutData from '../assets/About.json'

function About() {
  return (
    <>
      <Topnav />

      <div className="flex flex-col justify-end items-center bg-cover bg-center" style={{backgroundImage: `url(${background})`}}>
        <div className=' w-full h-96'>
          <p className="text-4xl font-bold justify-normal text-center items-center mt-10">About Me</p>
          <p className="text-2xl p-0 m-0 text-center items-center mb-10">GemAnalyzer</p>
        </div>
        <div className="w-6/12 rounded-3xl h-64 z-10 absolute overflow-hidden shadow-2xl shadow-black/40">
          <img src={Top_image} alt="Gem" className="h-64 w-full object-cover" />
        </div>
      </div>

      <div className=''>
        <p className='ps-44 pe-44 pt-10 text-justify'>{AboutData.section.paragraph1}</p>
        <p className='ps-44 pe-44 pt-4 text-justify'>{AboutData.section.paragraph2}</p>
        <p className='ps-44 pe-44 pt-4 text-justify'>{AboutData.section.paragraph3}</p>
        <p className='ps-44 pe-44 pt-4 text-justify'>{AboutData.section.paragraph4}</p>
      </div>

      <Footer/>
    </>
  )
}

export default About