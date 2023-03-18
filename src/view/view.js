import React from "react";

const View = ({ items }) => (
  <div className="box-border flex items-center justify-center w-screen h-screen gap-4 bg-white">
    {items.map((e) => (
      <div className=" shadow-lg flex flex-col items-center h-[150px] justify-center w-[100px] bg-slate-100 rounded-lg cursor-pointer hover:animate-bounce py-2 ">
        <h1 className="text-base font-semibold ">{e.houseName}</h1>
        <span className="material-symbols-outlined drop-shadow-md " style={{ color: e.color }}>
          home
        </span>
        <p className="text-xs text-center text-gray-500 ">{e.from}</p>
      </div>
    ))}
  </div>
);

export default View;
