import React from "react";

function Readmore() {
  return (
    <>
      <div className="w-full h-full text-white">
        {[
          { first: "Planetly", second: "Nina Walloch" },
          { first: "Workiz Easy", second: "Tomer Levy" },
          { first: "Premium Blend", second: "Ellen Kim" },
          { first: "Hypercare Systems", second: "Brendan Goss" },
          { first: "Officevibe", second: "Raff Labrie" },
          { first: "Orderlion", second: "Stefan Strohmer" },
          { first: "Black Book", second: "Jaci Smith" },
          { first: "Trawa Energy", second: "David Budde" },
        ].map((elem, index) => {
          return (
            <div className="flex  justify-between flex-row  w-full border-t-2  px-20 py-8 text-[1vw] border-zinc-700 text-right">
              <h3 className="underline decoration-solid duration-500">{elem.first}</h3>
              <div className="w-1/2 flex justify-between ">
              <h2>{elem.second}</h2>
              <a href="#" className="underline decoration-solid duration-500">Read more</a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Readmore;
