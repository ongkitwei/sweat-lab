import React from "react";

function BodyweightPage({ emoji, title }) {
  return (
    <div className="flex flex-col items-center pt-24">
      <h1 className="text-4xl lg:text-6xl font-extrabold text-center mb-8 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-yellow-400 uppercase">
        {title} {emoji}
      </h1>

      <div className="bg-lime-300 w-[100%] h-[60px] flex flex-row items-center justify-center">
        {" "}
        <span className="font-semibold text-3xl text-yellow-500 pr-3 lg:text-5xl">
          01
        </span>
        <span className="bodyweight-page-pointer">Set duration of workout</span>
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
        <span className="bodyweight-page-pointer">Select muscle group</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 pt-5 pb-8">
        <div className="bodyweight-page-card">LEGS</div>
        <div className="bodyweight-page-card">CHEST</div>
        <div className="bodyweight-page-card">ARMS</div>
        <div className="bodyweight-page-card">SHOULDERS</div>
        <div className="bodyweight-page-card">BACK</div>
        <div className="bodyweight-page-card">CORE</div>
        <div className="bodyweight-page-card">FULL BODY</div>
      </div>
      <div className="bg-lime-300 w-[100%] h-[60px] flex flex-row items-center justify-center">
        {" "}
        <span className="text-xl lg:text-3xl font-semibold">
          --- Generated Workout ---
        </span>
      </div>
      <textarea
        className="textarea min-h-[250px] lg:w-[35%] mt-8 mb-12"
        placeholder="All Exercises"
      ></textarea>
    </div>
  );
}

export default BodyweightPage;
