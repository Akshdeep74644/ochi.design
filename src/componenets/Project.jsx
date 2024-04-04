import React, { useEffect } from "react";
import Btn from "./Btn";
import { useState } from "react";

function Project() {
    const [rotate, setrotate] = useState(0)
    

  useEffect(()=>{
    window.addEventListener("mousemove", (dets)=>{
      let mouseX = dets.clientX;
      let mouseY = dets.clientY;

      let deltaX = mouseX - window.innerWidth/2;
      let deltaY = mouseY - window.innerHeight/2;

      let angel = Math.atan2(deltaY, deltaX) * (180/Math.PI);
      setrotate(angel-180)
    })
    console.log(rotate)
  })
  return (
    <>
    
      <div className="w-full relative h-full flex text-center justify-center gap-20 pb-20 bg-[#CDEA68] text-zinc-900 items-center flex-col uppercase font-bold">
        <h1 className="flex text-center mt-20 flex-col  tracking-tighter leading-[9vw] text-[10vw]">
            <span>ready</span>
            <span>to start</span>
            <span>the project?</span>
        </h1>
      
          <div className="absolute top-1/3 left-1/2 gap-10 flex justify-between -translate-x-[50%] -translate-y-[50%] ">
            <div className="w-[12.2vw] h-[12.2vw] bg-zinc-50 rounded-full flex justify-center items-center">
              <div className="w-2/3 h-2/3 bg-zinc-800 rounded-full flex justify-center items-center text-white text-[2vw] relative">
                <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line w-full h-10  absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                  <div className="w-8 h-8 bg-zinc-50 rounded-full">
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[12vw] h-[12vw] bg-zinc-50 rounded-full flex justify-center items-center">
              <div className="w-2/3 h-2/3 bg-zinc-800 rounded-full flex justify-center items-center text-white text-[2vw] relative">
                <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line w-full h-10  absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                  <div className="w-8 h-8 bg-zinc-50 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
    

        <div className="btns flex gap-2 flex-col">
            <Btn text="start the project" bg="zinc-900" textcolor="white" iconbg="zinc-50" iconcolor="black" />
            <h3 className="m-5 font-normal text-2xl">or</h3>
            <Btn text="hello@ochi.design" bg="none" border="2" bordercolor="zinc-700" textcolor="black" iconbg="zinc-900" iconcolor="white" />
        </div>
      </div>
    </>
  );
}

export default Project;
