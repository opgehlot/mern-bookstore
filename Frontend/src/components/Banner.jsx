import React from "react";
import banner from "../../public/Banner.png";

function Banner() {
  return (
    <div className="max-w-screen-2xl mt-20 pt-20 container mx-auto px-4 md:px-20 py-12 flex flex-col-reverse md:flex-row items-center">
      {/* Text Section */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0 space-y-6">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Welcome to a place where you <span className="text-pink-500">learn something new every day!</span>
        </h1>
        <p className="text-base md:text-lg text-white">
         "Fuel your mind daily—explore books that inspire, inform, and ignite curiosity."

"Make reading your daily habit. Find your next favorite book today!"

"Turn every day into a new adventure—read, grow, and never stop learning."
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
          <label className="input input-bordered flex items-center gap-2 w-full sm:w-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow" placeholder="Enter your email" />
          </label>
          <button className="btn btn-secondary">Get Started</button>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 mb-10 md:mb-0 flex justify-center">
        <img
          src={banner}
          alt="Book Banner"
          className="w-full max-w-[500px] h-auto object-contain"
        />
      </div>
    </div>
  );
}

export default Banner;
