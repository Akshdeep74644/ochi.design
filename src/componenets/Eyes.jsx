import React, { useEffect, useState } from "react";

function Eyes() {
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
  })

  return (
    <>
      <div className="eyes_container w-full h-screen overflow-hidden">
        <div data-scroll data-scroll-speed="-.5" className="relative w-full h-full bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')] bg-cover bg-center">
          <div className="absolute top-1/3 left-1/2 gap-10 flex justify-between -translate-x-[50%] -translate-y-[50%] ">
            <div className="w-[15vw] h-[15vw] bg-zinc-50 rounded-full flex justify-center items-center">
              <div className="w-2/3 h-2/3 bg-zinc-800 rounded-full flex justify-center items-center text-white text-[2vw] relative">
                <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line w-full h-10  absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                  <div className="w-8 h-8 bg-zinc-50 rounded-full">
                  </div>
                </div>
                Play
              </div>
            </div>
            <div className="w-[15vw] h-[15vw] bg-zinc-50 rounded-full flex justify-center items-center">
              <div className="w-2/3 h-2/3 bg-zinc-800 rounded-full flex justify-center items-center text-white text-[2vw] relative">
                <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line w-full h-10  absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                  <div className="w-8 h-8 bg-zinc-50 rounded-full"></div>
                </div>
                Play
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Eyes;
