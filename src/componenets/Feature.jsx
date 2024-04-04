import { motion, useAnimate, useAnimation } from "framer-motion";
import { Power4 } from "gsap/all";
import React, { useState } from "react";

function Feature() {
  const cards = [useAnimation(), useAnimation()]
  const handelHover = (index) =>{
    cards[index].start({y: "0"})
  }
  const handelHoverEnd = (index) =>{
    cards[index].start({y: "100%"})
  }
  return (
    <>
      <div className="featurecontainer w-full h-full">
        <div className="textcontainer p-20 text-white border-b-2 border-zinc-700">
          <h1 className="text-[4vw]">Featured projects</h1>
        </div>

        <div className="cardscontainer flex gap-20 p-20 m-10">
          <motion.div onHoverStart={() => handelHover(0)} onHoverEnd={() => handelHoverEnd(0)} className="card00 w-1/2 h-[75vh] relative">
            <h2 className="text-white flex items-center gap-5 tracking-widest mb-5">
              <div className="w-4 h-4 bg-zinc-50 rounded-full"></div>
              <span>FYDE</span>
            </h2>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <h1 className="absolute text-[5vw] left-full z-50 overflow-hidden flex -translate-x-1/2 top-1/2 -translate-y-1/2 font-semibold text-[#CDEA68]">
                {"FYDE".split("").map((elem, index) => {
                  return (
                    <motion.span
                      initial={{ y: "100%" }}
                      animate={cards[0]}
                      transition={{
                        ease: Power4.easeInOut,
                        delay: index * 0.1,
                      }}
                      className="inline-block"
                      key={index}
                    >
                      {elem}
                    </motion.span>
                  );
                })}
              </h1>
              <img
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
            <div className="tagscontainer  text-white mt-5 flex gap-5">
              {["Adut", "copywrite", "sales work", "slides design"].map(
                (elem, index) => {
                  return (
                    <button
                      key={index}
                      className="py-[10px] text-white border-2 font-medium uppercase rounded-full text-m px-[20px] bg-transparent"
                    >
                      {elem}
                    </button>
                  );
                }
              )}
            </div>
          </motion.div>
          <motion.div onHoverStart={() => handelHover(1)} onHoverEnd={() => handelHoverEnd(1)} className="card_01 w-1/2 h-[75vh] relative">
            <h2 className="text-white flex items-center gap-5 tracking-widest mb-5">
              <div className="w-4 h-4 bg-zinc-50 rounded-full"></div>VISE
            </h2>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <h1 className="absolute text-[5vw] right-full z-50 translate-x-1/2 top-1/2 flex overflow-hidden -translate-y-1/2 font-semibold text-[#CDEA68]">{"VISE".split("").map((elem, index)=>{
                        return  <motion.span
                        initial={{ y: "100%" }}
                        animate={cards[1]}
                        transition={{
                          ease: Power4.easeInOut,
                          delay: index * 0.1,
                        }}
                        className="inline-block"
                        key={index}
                      >
                        {elem}
                      </motion.span>
                    })}</h1>
              <img
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
            <div className="tags_container text-white mt-5 flex gap-5">
              {["Agency", "Company Presentation"].map((elem, index) => {
                return (
                  <button
                    key={index}
                    className="py-[10px] text-white border-2 font-medium uppercase rounded-full text-m px-[20px] bg-transparent"
                  >
                    {elem}
                  </button>
                );
              })}
            </div>
          </motion.div>
        </div>

        <div className="w-full h-full flex justify-center items-center pt-[5vw] pb-[10vw]">
          <button className="bg-zinc-50 h-[3.5vw] flex justify-between items-center px-10 duration-500 uppercase rounded-full text-[1vw] w-[18vw]">
            view all case studes
            <div className="w-4 h-4 bg-zinc-900 rounded-full flex justify-center items-center hover:w-16 hover:h-16  duration-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="hover:w-[2vw] hover:h-[2vw] opacity-0  hover:opacity-100 hover:rotate-[35deg]"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m12 5l6 6m-6-6l-6 6m6-6v14"
                ></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

export default Feature;
