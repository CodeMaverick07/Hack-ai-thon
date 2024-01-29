import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "@studio-freight/react-lenis";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const Lec8 = () => {
  useGSAP(() => {
    gsap.from(".text", {
      y: 400,
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
          scrub: 2,
        },
        duration: 3,
      });
    });
  });

  return (
    <>
      <ReactLenis root>
        <div className="-mt-10 main bg-black">
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
              data-speed="-20"
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
        <div className="h-screen bg-black"></div>
      </ReactLenis>
    </>
  );
};

export default Lec8;
