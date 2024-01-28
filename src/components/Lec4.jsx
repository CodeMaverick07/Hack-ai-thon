import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Lec4 = () => {
  const t1 = gsap.timeline();
  useGSAP(() => {
    t1.to([".fade1", ".fade2", ".fade3"], {
      scaleY: 1,
      transformOrigin: "top",
      stagger: 0.3,
      duration: 1,
    })
      .to(
        "h1",
        {
          x: 0,
          duration: 2,
          ease: "elastic.out(2,1)",
        },
        "-=.7"
      )
      .to(".fade1", {
        scaleY: 0,
        transformOrigin: "top",
      })
      .to(
        ".fade3",
        {
          scaleY: 0,
          transformOrigin: "bottom",
        },
        "-=.5"
      )
      .to(
        ".fade2",
        {
          translateY: "-33.33%",
          height: "100vh",
        },
        "-=.5"
      )
      .to(
        "h1",
        {
          scale: 0.7,
        },
        "-=.5"
      );
  });

  return (
    <body>
      <div className="fade-cont grid grid-rows-3 h-screen">
        <div className="fade1 bg-blue-300 scale-y-0"></div>
        <div className="fade2 bg-blue-500 scale-y-0"></div>
        <div className="fade3 bg-blue-700 scale-y-0"></div>
      </div>
      <div className="overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <h1 className="text-5xl font-bold text-white translate-x-[100%]">
          Oceana.{" "}
        </h1>
      </div>
    </body>
  );
};

export default Lec4;
