import React from "react";

function page() {
  return (
    <div className="flex flex-col items-center pt-24">
      <div className="bg-lime-300 w-[100%] h-[60px] flex flex-row items-center justify-center">
        {" "}
        <span className="font-semibold text-3xl text-yellow-500 pr-3 lg:text-5xl">
          01
        </span>
        <span className="text-lg lg:text-2xl font-semibold">
          Set duration of workout
        </span>
      </div>

      <input
        type="number"
        className="input validator w-[270px] lg:w-[400px] text-center mt-5"
        required
        placeholder="Choose duration between 5 to 60"
        min="5"
        max="60"
        title="Must be between be 5 to 60"
      />
      <p className="validator-hint">Must be between be 1 to 10</p>
      <div className="bg-lime-300 w-[100%] h-[60px] flex flex-row items-center justify-center">
        {" "}
        <span className="font-semibold text-3xl text-yellow-500 pr-3 lg:text-5xl">
          02
        </span>
        <span className="text-lg lg:text-2xl font-semibold">
          Select muscle group
        </span>
      </div>
      <div className="grid grid-cols-2 gap-5 pt-5">
        <div className="card text-xl w-[150px] h-[100px] bg-base-100 card-xs shadow-sm flex items-center justify-center">
          LEGS
        </div>
        <div className="card text-xl w-[150px] h-[100px] bg-base-100 card-xs shadow-sm flex items-center justify-center">
          CHEST
        </div>
        <div className="card text-xl w-[150px] h-[100px] bg-base-100 card-xs shadow-sm flex items-center justify-center">
          ARMS
        </div>
        <div className="card text-xl w-[150px] h-[100px] bg-base-100 card-xs shadow-sm flex items-center justify-center">
          SHOULDERS
        </div>
        <div className="card text-xl w-[150px] h-[100px] bg-base-100 card-xs shadow-sm flex items-center justify-center">
          BACK
        </div>
        <div className="card text-xl w-[150px] h-[100px] bg-base-100 card-xs shadow-sm flex items-center justify-center">
          CORE
        </div>
      </div>
    </div>
  );
}

export default page;
