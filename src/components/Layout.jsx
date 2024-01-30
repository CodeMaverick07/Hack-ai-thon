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
    const sections = gsap.utils.toArray("section");
    const scrollTween = gsap.to(sections, {
      xPercent: -100 * (3 - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".scroll",
        pin: true,
        scrub: 2,
        toggleActions: "start none none reverse",
      },
    });
  });

  return (
    <div className="outer overflow-x-hidden">
      <div className="scroll w-[300%] flex">
        <section className="h-screen w-screen" id="faq">
          <FAQ />
        </section>
        <section className="h-screen w-screen" id="contact">
          <Contact />
        </section>
        <section className="h-screen w-screen" id="sponsors">
          <Sponsors />
        </section>
      </div>
    </div>
  );
};

export default Layout;
