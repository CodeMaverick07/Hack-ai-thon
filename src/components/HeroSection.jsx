import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
      <div className="-mt-10 main bg-[#11161F] max-md:hidden " id="hero">
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
            data-speed="10"
          />
          <div
            className="parallax text absolute z-[15] text-7xl font-ai text-[#F8F7FF] glow mb-[530px] tracking-[0.4em] mt-32"
            data-speed="120"
          >
            <h1 className="overflow-visible font-ai text-center">
              Hack-AI-Thon <br /> 2024
            </h1>
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
      <div className="hidden max-md:flex h-screen w-screen justify-end bg-[#11161F] overflow-x-hidden">
        <div
          className="w-full text-center parallax text2 absolute z-[50] text-3xl  font-ai text-[#F8F7FF] glow mt-20 pb-[600px] tracking-[0.3em]"
          data-speed="80"
        >
          <h1 className="overflow-visible font-ai">Hack-AI-Thon 2024</h1>
        </div>
        <img
          className="h-[85vh] w-auto absolute parallax"
          src="/images1/ph/bgph2.1.png"
          alt=""
          data-speed=""
        />
        <img
          src="/images1/ph/mainc.png"
          alt=""
          className="bg1 z-20 absolute w-[95%] h-auto mt-[212px] rotate-180 parallax"
          data-speed="40"
        />
        <img
          src="/images1/ph/middlecover.png"
          alt=""
          className="middle z-30 absolute w-[110%] parallax mt-[72px] "
          data-speed="-10"
        />
        <img
          src="/images1/ph/bottom.png"
          className="z-40 absolute -left-2 -bottom-2 parallax"
          alt=""
          data-speed="-8"
        />
        <img
          src="/images1/ph/small.png"
          alt=""
          className="z-[25] absolute w-[25%] h-auto left-5 bottom-10 parallax"
          data-speed="-20"
        />
        <img
          src="/images1/mask.png"
          className="h-full w-auto z-50 absolute -bottom-2 opacity-100 parallax"
          alt=""
          data-speed="-1"
        />
      </div>
    </>
  );
};

export default HeroSection;
