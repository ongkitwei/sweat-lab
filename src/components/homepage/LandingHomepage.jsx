import React from "react";
import Image from "next/image";

function LandingHomepage() {
  const imageArray = [
    "running",
    "weight-lifting",
    "bodyweight",
    "calisthenics",
  ];
  return (
    <div className="mx-auto max-w-[95%] flex flex-col items-center pb-10 pt-2">
      <div className="text-sm pb-6 flex flex-row items-center gap-2">
        <Image
          src="/myface.jpeg"
          width={35}
          height={30}
          className="rounded-full object-cover"
          alt="profile-pic"
        />
        <span className="font-bold">By Kit Wei</span>
      </div>
      <h1 className="text-3xl md:text-5xl font-extrabold pb-8 text-center">
        Get a workout plan in seconds, not hours
      </h1>
      <p className="max-w-[75%] md:max-w-[500px] text-center text-gray-600 pb-8">
        Ever feel stuck trying to figure out the best workout for you? Don’t
        worry — SweatLab’s got your back. We make it simple by planning
        personalized workouts that fit your goals, your schedule, and your
        lifestyle. All you need to do is show up and put in the work.
      </p>
      <a
        href="#cards-homepage"
        className="bg-pink-300 py-3 px-6 rounded-3xl font-bold mt-4 w-[70%] md:w-[40%] text-center"
      >
        Get Started Now
      </a>

      <div className="grid md:grid-cols-3 gap-12 pt-24">
        <div className="flex flex-col items-center">
          <Image
            src="/endwork.png"
            width={100}
            height={100}
            className="rounded-full object-cover max-w-[20%] lg:max-w-[30%]"
            layout="responsive"
            alt="end-work-pic"
          />
          <p className="font-bold lg:text-lg">1700</p>
          <p className="lg:text-lg">Ended work and preparing to head home</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/exercise.png"
            width={50}
            height={30}
            className="rounded-full object-cover max-w-[20%] lg:max-w-[30%]"
            layout="responsive"
            alt="end-work-pic"
          />{" "}
          <p className="font-bold lg:text-lg">1800</p>
          <p className="lg:text-lg">
            Ready to start but unsure what to do best
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/confused.png"
            width={50}
            height={30}
            className="rounded-full object-cover max-w-[20%] lg:max-w-[30%]"
            layout="responsive"
            alt="end-work-pic"
          />{" "}
          <p className="font-bold lg:text-lg">1830</p>
          <p className="lg:text-lg">Still deciding which workout to crush</p>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-3 pt-24 pb-6">
        <div className="flex flex-row items-end">
          <span className="font-semibold text-3xl text-yellow-500 pr-3 lg:text-5xl">
            01
          </span>
          <span className="text-lg lg:text-2xl">CHOOSE YOUR WORKOUT</span>
        </div>
        <div className="flex flex-row items-end">
          <span className="font-semibold text-3xl text-yellow-500 pr-3 lg:text-5xl">
            02
          </span>
          <span className="text-lg lg:text-2xl">SELECT WORKOUT DURATION</span>
        </div>
        <div className="flex flex-row items-end">
          <span className="font-semibold text-3xl text-yellow-500 pr-3 lg:text-5xl">
            03
          </span>
          <span className="text-lg lg:text-2xl">
            SELECT MUSCLE TARGET GROUP
          </span>
        </div>
      </div>
    </div>
  );
}

export default LandingHomepage;
