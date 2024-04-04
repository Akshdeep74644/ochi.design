import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full bg-[#004D43] overflow-hidden py-20 rounded-tl-3xl rounded-tr-3xl'>
        <div className="border-t-2 border-b-2 flex  whitespace-nowrap border-zinc-300 text_container text-white">
            <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 5}} className="text-[15vw] leading-none font-['Neue Montreal'] -mt-10 p-10 uppercase  font-semibold ">We are ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 5}} className="text-[15vw] leading-none font-['Neue Montreal'] -mt-10 p-10 uppercase  font-semibold ">We are ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 5}} className="text-[15vw] leading-none font-['Neue Montreal'] -mt-10 p-10 uppercase  font-semibold ">We are ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee
