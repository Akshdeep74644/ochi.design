import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUp } from "react-icons/fa";

function Landingpage() {
  return (
    <>
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 text-white pt-2'>
        <div className="textstructure mt-52 px-20 p-5 ">
            {["We Create", "EYE Opening", "Presentations"].map((item, index)=>{
                return <div className="masker">
                  <div className='flex w-fit items-center '>
                    {index === 1 && (<motion.div initial={{width: 0}} animate={{width: "8vw"}} transition={{ease: [0.76, 0, 0.24, 1], duration: 1}} className='w-[8vw] mr-[1vw] mt-[10px] h-[5vw] rounded-xl bg-[#004D43]'></motion.div>)}
                    <h1 key={index} className="uppercase text-[7vw] leading-[.80] font-['Neue Montreal'] font-semibold">{item}</h1>
                    </div>
             </div>
})}
        </div>

        <div className='flex justify-between px-10 py-5 border-t-2 border-zinc-800 mt-[8vw]'>
            <h2 className='text-xl font-semibold'>For public and private companies</h2>
            <h2 className='text-xl font-semibold'>From the first pitch to IPO</h2>
            <div className='flex gap-5 justify-center items-center'>
            <div><button className='p-2 border-2 border-zinc-700 rounded-full'>Start with project</button></div>
            <div className=' flex justify-center items-center w-10 rounded-full h-10 border-2 border-zinc-600'>
            <FaArrowUp />
            </div>
            </div>
        </div>
    </div> 
    </>
  )
}

export default Landingpage
