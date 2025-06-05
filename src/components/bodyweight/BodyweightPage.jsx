"use client";
import React, { useState } from "react";
import axios from "axios";
import RangeSlider from "@/ui/RangeSlider";
import TextAreaClipboard from "@/ui/TextAreaClipboard";

function BodyweightPage({ emoji, title }) {
  const [clickCounter, setClickCounter] = useState(0);
  const [selectedMuscle, setSelectedMuscle] = useState([]);
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
      <RangeSlider />
      <div
        className="bg-lime-300 w-[100%] h-[60px] flex flex-row items-center justify-center"
        id="text-area"
      >
        <span className="font-semibold text-3xl text-yellow-500 pr-3 lg:text-5xl">
          02
        </span>
        <span className="bodyweight-page-pointer">Select muscle group</span>
      </div>
      <p className="pt-4 text-slate-700">
        Pick at least 2 muscle groups OR "Full Body"
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 pt-5 pb-8">
        <a
          className={`bodyweight-page-card ${
            selectedMuscle.includes("LEGS") ? "border-2 border-accent" : null
          }`}
          href="#text-area"
          onClick={() => {
            setSelectedMuscle((x) => [...x, "LEGS"]);
            fetchWorkout();
          }}
        >
          LEGS
        </a>
        <a
          className={`bodyweight-page-card ${
            selectedMuscle.includes("CHEST") ? "border-2 border-accent" : null
          }`}
          href="#text-area"
          onClick={() => {
            setSelectedMuscle((x) => [...x, "CHEST"]);
            fetchWorkout();
          }}
        >
          CHEST
        </a>
        <a
          className={`bodyweight-page-card ${
            selectedMuscle.includes("ARMS") ? "border-2 border-accent" : null
          }`}
          href="#text-area"
          onClick={() => {
            setSelectedMuscle((x) => [...x, "ARMS"]);
            fetchWorkout();
          }}
        >
          ARMS
        </a>
        <a
          className={`bodyweight-page-card ${
            selectedMuscle.includes("SHOULDERS")
              ? "border-2 border-accent"
              : null
          }`}
          href="#text-area"
          onClick={() => {
            setSelectedMuscle((x) => [...x, "SHOULDERS"]);

            fetchWorkout();
          }}
        >
          SHOULDERS
        </a>
        <a
          className={`bodyweight-page-card ${
            selectedMuscle.includes("BACK") ? "border-2 border-accent" : null
          }`}
          href="#text-area"
          onClick={() => {
            setSelectedMuscle((x) => [...x, "BACK"]);

            fetchWorkout();
          }}
        >
          BACK
        </a>
        <a
          className={`bodyweight-page-card ${
            selectedMuscle.includes("CORE") ? "border-2 border-accent" : null
          }`}
          href="#text-area"
          onClick={() => {
            setSelectedMuscle((x) => [...x, "CORE"]);

            fetchWorkout();
          }}
        >
          CORE
        </a>
        <a
          className={`bodyweight-page-card ${
            selectedMuscle.includes("FULL BODY")
              ? "border-2 border-accent"
              : null
          }`}
          href="#text-area"
          onClick={() => {
            setSelectedMuscle((x) => [...x, "FULL BODY"]);

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

      <TextAreaClipboard
        copied={copied}
        clicked={
          selectedMuscle.includes("FULL BODY") || selectedMuscle.length == 2
        }
        workout={workout}
        copyWorkout={copyWorkout}
      />
    </div>
  );
}

export default BodyweightPage;
