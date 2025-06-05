import React from "react";
import { useState } from "react";

function RangeSlider() {
  const [value, setValue] = useState(25);
  return (
    <div className="w-full max-w-md lg:max-w-lg p-8">
      <input
        type="range"
        min={5}
        max="30"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="range range-accent w-full"
        step="5"
      />
      <div className="flex justify-between px-2.5 mt-2 text-xs">
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
      </div>
      <div className="flex justify-between px-2.5 mt-2 text-xs lg:text-md">
        <span>5</span>
        <span>10</span>
        <span>15</span>
        <span>20</span>
        <span>25</span>
        <span>30</span>
      </div>
    </div>
  );
}

export default RangeSlider;
