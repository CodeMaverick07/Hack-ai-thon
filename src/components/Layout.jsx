import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import FAQ from "./FAQ";
import Sponsors from "./Sponsors";
import Contact from "./Contact";
import About from "./About";
import HeroSection from "./HeroSection";

const Layout = () => {
  useGSAP(() => {
    const sections = gsap.utils.toArray(".scroll section");
    const scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".scroll",
        pin: true,
        scrub: 2,
      },
      duration: 3,
    });
  });

  return (
    <div className="outer overflow-x-hidden">
      <div className="scroll w-[300%] flex">
        <section className="h-screen w-screen">
          <FAQ />
        </section>
        <section className="h-screen w-screen">
          <Contact />
        </section>
        <section className="h-screen w-screen">
          <Sponsors />
        </section>
      </div>
    </div>
  );
};

export default Layout;
