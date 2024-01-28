import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Lec1 = () => {
  useGSAP(() => {
    gsap.to(".div", {
      width: "100%",
      height: "100%",
      right: 0,
      top: 0,
      delay: 2,
      duration: 2,
      zIndex: 10,
    });
  });
  useGSAP(() => {
    gsap.to("h1", {
      paddingTop: 0,
      duration: 2,
      fontSize: 60,
      fontWeight: 500,
      color: "#eff6e0",
    });
  });
  useGSAP(() => {
    gsap.to("h1", {
      zIndex: 10,
      duration: 2,
      delay: 3,
    });
  });

  return (
    <div className="h-screen m-0 bg-[#7a89c2]">
      <h1 className="text-center text-9xl text-[#eff6e0] pt-72">Hemant</h1>
      <div className="div bg-[#68534d] top-1/2 right-1/2 h-1 absolute"></div>
    </div>
  );
};

export default Lec1;
