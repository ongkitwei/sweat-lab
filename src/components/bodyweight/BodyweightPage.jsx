"use client";
import React, { useState } from "react";
import axios from "axios";

function BodyweightPage({ emoji, title }) {
  const [clicked, setClicked] = useState(false);
  const [copied, setCopied] = useState(false);
  const [workout, setWorkout] = useState([]);

  const fetchWorkout = async () => {
    try {
      const res = await axios.get("/api/bodyweight"); // relative to domain
      setWorkout(res.data);
    } catch (err) {
      console.error("Failed to fetch workout:", err);
    }
  };

  const copyWorkout = async (data) => {
    navigator.clipboard.writeText(data);
    setCopied(!copied);
  };

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
        <a className="bodyweight-page-card" href="text-area">
          LEGS
        </a>
        <a className="bodyweight-page-card" href="#text-area">
          CHEST
        </a>
        <a className="bodyweight-page-card" href="#text-area">
          ARMS
        </a>
        <a className="bodyweight-page-card" href="#text-area">
          SHOULDERS
        </a>
        <a className="bodyweight-page-card" href="#text-area">
          BACK
        </a>
        <a className="bodyweight-page-card" href="#text-area">
          CORE
        </a>
        <a
          className={`bodyweight-page-card ${
            clicked ? "border-2 border-yellow-300" : null
          }`}
          href="#text-area"
          onClick={() => {
            setClicked(!clicked);
            fetchWorkout();
          }}
        >
          FULL BODY
        </a>
      </div>
      <div className="bg-lime-300 w-[100%] h-[60px] flex flex-row items-center justify-center">
        {" "}
        <span className="text-xl lg:text-3xl font-semibold">
          --- Generated Workout ---
        </span>
      </div>

      <textarea
        className="w-full max-w-md h-[250px] p-3 border border-gray-300 m-auto rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-8 mb-8"
        placeholder={clicked ? workout.join("\n") : "List Of Exercises"}
        disabled
      ></textarea>
      <button
        className={`hover:cursor-pointer bg-gray-200 py-3 px-6 rounded-xl ${
          copied ? "bg-lime-300" : null
        }`}
        onClick={() => copyWorkout(workout)}
      >
        {copied ? "Copied!" : "Copy Workout"}
      </button>
    </div>
  );
}

export default BodyweightPage;
