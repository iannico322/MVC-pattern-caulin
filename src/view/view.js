import React from "react";

const View = ({ items }) => (
  <div className="box-border flex items-center justify-center w-screen h-screen gap-4 bg-white">
    {items.map((e) => (
      <div className="flex flex-col items-center max-h-[200px] w-[100px] bg-slate-100 rounded-md cursor-pointer hover:animate-bounce py-10 ">
        <h1 className="text-base font-semibold ">{e.houseName}</h1>
        <span className="material-symbols-outlined" style={{ color: e.color }}>
          home
        </span>
        <p className="text-xs text-center ">{e.from}</p>
      </div>
    ))}
  </div>
);

export default View;
