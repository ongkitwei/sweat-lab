import React from "react";

function TextAreaClipboard({ copied, clicked, workout, copyWorkout }) {
  return (
    <div className="flex flex-col items-center pb-8">
      <textarea
        className="w-[350px] md:w-[400px] h-[250px] p-3 border border-gray-300 m-auto rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-8 mb-8"
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

export default TextAreaClipboard;
