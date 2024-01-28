import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Lec6 = () => {
  const links = gsap.utils.toArray("li a");
  links.forEach((link) => {
    let linkT1 = gsap.timeline({
      defaults: { ease: "power4.inOut", duration: 0.6 },
    });
    const pr = link.querySelector(".pr");
    const sc = link.querySelector(".sc");
    const date = link.querySelector(".date");
    const line = link.querySelector(".line");

    linkT1.to(".pr", { yPercent: -100 });
  });

  return (
    <div className=" bg-black">
      <div className="flex-col flex gap-12 justify-center h-screen text-white ">
        <li className="flex items-center justify-between cursor-pointer link1">
          <a href="/" className="flex h-10 overflow-hidden">
            <div className="line h-[0.5px] bg-white w-12 mr-12 mt-6"></div>
            <div className="flex flex-col hdc">
              <h1 className="pr text-4xl font-thin">Hemant Jatal</h1>
              <h1 className="sc text-4xl font-thin">Hemant Jatal</h1>
            </div>
          </a>
          <h1 className="date mr-24 text-xl font-thin">
            DESIGNER - UI/UX 2022{" "}
          </h1>
        </li>
        <li className="flex items-center  justify-between cursor-pointer link2">
          <a href="/" className="flex overflow-hidden h-10">
            <div className="line h-[0.5px] bg-white w-12 mr-12 mt-6"></div>
            <div className="flex flex-col hdc">
              <h1 className="pr text-4xl font-thin">Sami Thakur</h1>
              <h1 className="sc text-4xl font-thin">Sami Thakur</h1>
            </div>
          </a>
          <h1 className="date mr-24 text-xl font-thin">FULL STACK - REACT</h1>
        </li>
        <li className="flex items-center justify-between cursor-pointer link3">
          <a href="/" className="flex h-10 overflow-hidden">
            <div className="line h-[0.5px] bg-white w-12 mr-12 mt-6"></div>
            <div className="flex flex-col hdc">
              <h1 className="pr text-4xl font-thin">Chinmay Desai</h1>
              <h1 className="sc text-4xl font-thin">Chinmay Desai</h1>
            </div>
          </a>
          <h1 className="date mr-24 text-xl font-thin">IDENTITY - UI/UX</h1>
        </li>
        <li className="flex items-center justify-between cursor-pointer link4">
          <a href="/" className="flex h-10 overflow-hidden">
            <div className="line h-[0.5px] bg-white w-12 mr-12 mt-6"></div>
            <div className="flex flex-col hdc">
              <h1 className="pr text-4xl font-thin ">Krishna Joshi</h1>
              <h1 className="sc text-4xl font-thin ">Krishna Joshi</h1>
            </div>
          </a>

          <h1 className="date mr-24 text-xl font-thin">AIDS - STUDNET</h1>
        </li>
      </div>
    </div>
  );
};

export default Lec6;
