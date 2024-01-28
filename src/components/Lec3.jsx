import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { BiBaseball } from "react-icons/bi";

const Lec3 = () => {
  useGSAP(() => {
    gsap.set(".ball", { yPercent: -600, rotateZ: -295 });
    gsap.set(".text", { yPercent: -100 });
    gsap.set(".loader", { width: "0px" });
    gsap.to(".ball", {
      yPercent: 0,
      rotateZ: 0,
      duration: 2,
      ease: "bounce.out",
    });
    gsap.to(".loader", {
      width: "100%",
      delay: 2,
      duration: 1,
    });
    gsap.to(".text", { yPercent: 700, duration: 1, delay: 2 });
  });
  return (
    <div className="bg-[#0f987f] h-screen flex justify-center items-center -z-20 ">
      <div className="bg-[#0f987f] absolute z-10 ball">
        <BiBaseball className="text-9xl text-white" />
      </div>
      <div className="mask h-screen">
        <h1 className="mb-48 font-bold text-white text-3xl text">Welcome</h1>
      </div>
      <div className="loader absolute w-full h-[1px] bg-white"></div>
    </div>
  );
};

export default Lec3;
