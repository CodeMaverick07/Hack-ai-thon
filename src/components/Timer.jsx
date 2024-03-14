import React, { useState, useEffect } from "react";

const Timer = ({ timeDuration }) => {
  const [time, setTime] = useState(timeDuration);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 1000);
    }, 1000);
    return () => clearInterval(interval);
  }, []); // Removed [time] dependency to prevent unnecessary re-renders

  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  if (hours < 10) {
    hours = "0" + hours;
  }

  let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  let seconds = Math.floor((time % (1000 * 60)) / 1000);
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  return (
    <div className="flex max-md:px-4 justify-center items-center">
      <div className="relative flex flex-col items-center mr-4 max-md:mr-2 max-md:border border-2 rounded-md p-2 font-nav backdrop-blur-sm">
        <h1 className="text-5xl max-md:text-2xl  text-white">0{days}</h1>
        <p className="text-white font-nav font-bold">Days</p>
        <div className="glassmorphic-border" />
      </div>
      <div className="relative flex flex-col items-center mr-4 max-md:mr-2 max-md:border border-white rounded-md p-2 border-2 font-nav backdrop-blur-sm">
        <h1 className="text-5xl max-md:text-2xl text-white">{hours}</h1>
        <p className="text-white font-nav font-bold">Hours</p>
        <div className="glassmorphic-border" />
      </div>
      <div className="relative flex flex-col items-center mr-4 max-md:mr-2 max-md:border border-2 border-white rounded-md p-2 font-nav backdrop-blur-sm">
        <h1 className="text-5xl max-md:text-2xl  text-white">{minutes}</h1>
        <p className="text-white font-nav font-bold ">Minutes</p>
        <div className="glassmorphic-border" />
      </div>
      <div className="relative flex flex-col items-center border-2 max-md:mr-2 max-md:border border-white rounded-md p-2 font-nav backdrop-blur-sm">
        <h1 className="text-5xl max-md:text-2xl text-white">{seconds}</h1>
        <p className="text-white font-nav font-bold ">Seconds</p>
        <div className="glassmorphic-border" />
      </div>
    </div>
  );
};

export default Timer;
