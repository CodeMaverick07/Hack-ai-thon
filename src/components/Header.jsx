import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Header = () => {
  useGSAP(() => {
    gsap.from("a", {
      opacity: 0,
      y: 10,
      stagger: 0.3,
      delay: 1,
      duration: 1.5,
    });
  });
  return (
    <div className="z-[100] fixed w-screen h-auto">
      <nav className="flex text-xl gap-10 items-center justify-end text-white font-robo p-14">
        <a href="/">About</a>
        <a href="/">FAQ</a>
        <a href="/">Sponsors</a>
        <a href="/">Contact</a>
        <a href="/">Team</a>
      </nav>
    </div>
  );
};

export default Header;
