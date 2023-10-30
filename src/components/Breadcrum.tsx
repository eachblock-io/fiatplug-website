import React from "react";

const Breadcrum = () => {
  return (
    <div className="bg-[#092B89] lg:mt-0 mt-[43rem] text-white grid grid-cols-3 items-center justify-center text-center py-10">
      <div className="card">
        <h1 className="lg:text-3xl text-2xl font-bold">$15 +</h1>
        <p className="text-sm pt-2">P2P Volume</p>
      </div>
      <div className="card border-x-2 border-white">
        <h1 className="lg:text-3xl text-2xl font-bold">20 +</h1>
        <p className="lg:text-sm text-xs pt-2">Employees and growing</p>
      </div>
      <div className="card">
        <h1 className="font-bold lg:text-3xl text-2xl">40 +</h1>
        <p className="lg:text-sm text-xs pt-2">Tradeable asset</p>
      </div>
    </div>
  );
};

export default Breadcrum;
