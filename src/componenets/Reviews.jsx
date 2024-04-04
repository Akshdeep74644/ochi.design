import React from "react";

function Reviews() {
  return (
    <>
      <div className="w-full h-full py-20">
        <div className="text">
          <h1 className="text-[3vw] px-20 py-14 font-['Neue Montreal'] border-b-2 border-zinc-700 text-white tracking-light">
            Clients’ reviews
          </h1>
        </div>

        <div className="w-full h-full flex justify-between text-2xl px-20 py-10 text-white overflow-hidden">
          <div className="box00 w-1/2">
            <a href="#" className=" underline  decoration-solid">
              Karman Ventures
            </a>
          </div>
          <div className="box01 flex gap-[4vw] flex-col w-1/2">
            <h1>Services:</h1>
            <ul className="flex gap-5 flex-col">
              <li class="group flex gap-5 items-center">
                <button class=" border-2 border-zinc-500 py-3 px-[1vw] uppercase rounded-full">
                  Investor deck
                </button>
                <div class="w-12 h-12 bg-zinc-200 border border-zinc-500 scale-0 duration-500 group-hover:scale-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:w-[2vw] group-hover:h-[2vw] scale-0  group-hover:scale-100 group-hover:rotate-[35deg]" viewBox="0 0 24 24">
	            <path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m12 5l6 6m-6-6l-6 6m6-6v14"></path>
                </svg>
                </div>
              </li>
              <li class="group flex gap-5 items-center">
                <button class=" border-2 border-zinc-500 py-3 px-[1vw] uppercase rounded-full">
                  sales deck
                </button>
                <div class="w-12 h-12 bg-zinc-200 border border-zinc-500 scale-0 duration-500 group-hover:scale-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:w-[2vw] group-hover:h-[2vw] scale-0  group-hover:scale-100 group-hover:rotate-[35deg]" viewBox="0 0 24 24">
	            <path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m12 5l6 6m-6-6l-6 6m6-6v14"></path>
                </svg>
                </div>
              </li>
            </ul>
          </div>
          <div className="box02 flex gap-[4vw] flex-col w-1/2">
            <h1>William Barnes</h1>
            <div className="flex gap-10 flex-col">
                <img className="w-[7vw] rounded-xl" src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png" alt="" />
                <p>They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5</p>
            </div>
          </div>
          <div className="box03 w-1/2">
            <h1 className="text-[#888] text-right">READ</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reviews;
