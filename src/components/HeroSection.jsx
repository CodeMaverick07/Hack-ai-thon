import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RiMenu2Fill } from "react-icons/ri";

import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  useGSAP(() => {
    gsap.from(".text", {
      y: 400,
      duration: 2,
    });
    gsap.from(".text2", {
      y: 200,
      duration: 2,
    });
    gsap.from(".middle", {
      y: 50,
      duration: 2,
    });
    gsap.from(".bg1", {
      y: -100,
      duration: 2,
    });
    const imagess = gsap.utils.toArray(".parallax");
    imagess.forEach((image) => {
      gsap.to(image, {
        yPercent: image.dataset.speed,
        scrollTrigger: {
          scrub: 1,
          end: "top -100%",
        },

        duration: 2,
      });
    });
  });

  return (
    <>
      <div className="-mt-10 main bg-black max-md:hidden" id="hero">
        <section className="flex justify-center items-center">
          <img
            src="/images1/bg111.png"
            alt=""
            className="parallax max-w-full h-auto absolute "
          />

          <img
            src="/images1/bg1.png"
            alt=""
            className="bg1 parallax absolute pt-10 z-10"
            data-speed="20"
          />
          <div
            className="parallax text absolute z-[15] text-8xl  font-ai text-[#F8F7FF] glow mb-[490px] tracking-[0.4em]"
            data-speed="500"
          >
            <h1>Hack-AI-Thon</h1>
          </div>
          <img
            src="/images1/middlefinal.png"
            alt=""
            className="middle parallax w-[35%] h-auto mt-[300px] z-30"
            data-speed="-30"
          />

          <img
            src="/images1/front.png"
            alt=""
            className="front parallax z-50 absolute mb-12"
            data-speed="-3"
          />
          <img
            src="/images1/mask.png"
            alt=""
            className="absolute z-[70] mb-12"
          />
        </section>
      </div>
      <div className="hidden max-md:flex h-screen w-screen justify-end bg-black overflow-x-hidden">
        <RiMenu2Fill className="glow z-[100] text-[#F8F7FF] text-7xl p-5" />
        <div
          className="w-full text-center parallax text2 absolute z-[50] text-3xl  font-ai text-[#F8F7FF] glow mt-20 tracking-[0.3em]"
          data-speed="1000"
        >
          <h1>Hack-AI-Thon</h1>
        </div>
        <img
          className="h-screen w-auto absolute parallax"
          src="/images1/ph/bgph2.png"
          alt=""
          data-speed=""
        />
        <img
          src="/images1/ph/main.png"
          alt=""
          className="bg1 z-20 absolute w-[95%] h-auto mt-[84px] parallax"
          data-speed="20"
        />
        <img
          src="/images1/ph/middlecover.png"
          alt=""
          className="middle z-30 absolute w-[110%] parallax mt-[72px] "
          data-speed="-10"
        />
        <img
          src="/images1/ph/bottom.png"
          className="z-40 absolute mt-[116px] parallax"
          alt=""
          data-speed="-8"
        />
        <img
          src="/images1/ph/small.png"
          alt=""
          className="z-[25] absolute w-[25%] h-auto bottom-5 ml-12 parallax"
          data-speed="-100"
        />
        <img
          src="/images1/mask.png"
          className="h-full w-auto z-50  absolute opacity-100 parallax"
          alt=""
          data-speed="-2"
        />
      </div>
    </>
  );
};

export default HeroSection;
