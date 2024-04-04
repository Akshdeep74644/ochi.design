import React from "react";

function About() {
  return (
    <>
      <div data-scroll data-scroll-section data-scroll-speed="-.1" className="about_container w-full  bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
        <div className="text_container p-20">
          <h1 className="font-['Neue Montreal'] text-[2.8vw] font-semibold w-[85%] leading-[3vw]">
            Ochi is a strategic partner for fast-grow­ing tech businesses that
            need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and
            hire great peo­ple.{" "}
          </h1>
        </div>
        <div className="expect_conatainer font-['Neue Montreal'] w-full px-20 py-5 flex justify-between iteam-center   border-y-[1px] border-[#999]">
          <div className="box_00 w-1/2">
            <h2 className="text-[1vw]">What you can expect:</h2>
          </div>
          <div className="box_01 w-1/2 flex flex-row  gap-[10vw] items-end pb-[7vw] ">
            <div className="content_00 flex gap-20 w-[50%] text-[1.2vw] flex-col">
              <p>
                We create tailored presentations to help you persuade your
                colleagues, clients, or investors. Whether it’s live or digital,
                delivered for one or a hundred people.
              </p>
              <p>
                We believe the mix of strategy and design (with a bit of coffee)
                is what makes your message clear, convincing, and captivating.
              </p>
            </div>
            <div className="content_01 text-[1.1vw] flex gap-7 flex-col">
              <span>S:</span>
              <div className="flex flex-col gap-1 underline  decoration-solid">
                <span className="">Instagram</span> <span>Behance</span>{" "}
                <span>Facebook</span> <span>Linkedin</span>
              </div>
            </div>
          </div>
        </div>

        <div className="approch_container w-full flex justify-between py-[1vw] px-20">
          <div className="box_00 w-1/2 font-['Neue Montreal'] leading-[5vw]">
            <h1 className="text-[3vw] font-semibold">Our approach:</h1>
            <button className="p-[20px] text-white rounded-full uppercase flex items-center gap-16 justify-center text-xl bg-zinc-900">
              Read more
              <div className="w-3 h-3 bg-zinc-50 rounded-full"></div>
            </button>
          </div>
          <div className="box_00 w-1/2">
            <img
              className="rounded-xl"
              src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
