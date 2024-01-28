import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Lec2 = () => {
  const Func1 = () => {
    gsap.to(".cont", {
      borderRadius: "2%",
      width: "20vw",
      height: "28vw",
      fontSize: "30px",
      justifyContent: "center",
    });
    gsap.to(".cont2", {
      fontSize: "40px",
    });
  };
  const Func2 = () => {
    gsap.to(".cont", {
      borderRadius: "50%",
      width: "16vw",
      height: "16vw",
      justifyContent: "start",
    });
    gsap.to(".cont2", {
      fontSize: "96px",
    });
  };

  return (
    <div className="flex gird place-content-center items-center h-screen">
      <div
        onMouseEnter={Func1}
        onMouseLeave={Func2}
        className="cont rounded-full h-52 w-52 bg-orange-400 flex items-center text-3xl "
      >
        <p className="cont2 text-white text-8xl ">Hemant</p>
      </div>
    </div>
  );
};

export default Lec2;
