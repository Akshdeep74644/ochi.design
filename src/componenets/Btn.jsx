import React from 'react'

function Btn(props) {
  return (
    <>
       <div className={`w-full h-full flex justify-center items-center]`}>
          <button className={`bg-${props.bg} text-${props.textcolor} h-[3.5vw] border-${props.border} border-${props.bordercolor} flex justify-between items-center px-10 duration-500 uppercase rounded-full text-[1vw] w-[18vw]`}>
            {props.text}
            <div className={`w-4 h-4 bg-${props.iconbg} rounded-full flex justify-center items-center hover:w-16 hover:h-16  duration-500`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="hover:w-[2vw] hover:h-[2vw] opacity-0  hover:opacity-100 hover:rotate-[35deg]" viewBox="0 0 24 24">
	            <path fill="none" stroke={`${props.iconcolor}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m12 5l6 6m-6-6l-6 6m6-6v14"></path>
                </svg>
            </div>
          </button>
        </div>
    </>
  )
}

export default Btn
