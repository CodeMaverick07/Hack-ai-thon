import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { RiMenu4Fill } from "react-icons/ri";

const Lec5 = () => {
  const [first, setfirst] = useState(false);
  const func = () => {
    setfirst((prev) => !prev);
  };
  const t1 = gsap.timeline({
    defaults: { duration: 0.5 },
  });
  useGSAP(() => {
    if (first) {
      t1.to("aside", {
        translateX: 0,
      })
        .to(
          ".button",
          {
            translateX: 0,
          },
          "-=0.5"
        )

        .to(
          ".nav",
          {
            translateX: "10%",
            stagger: 0.1,
          },
          "-=0.5"
        )
        .to(
          ".nav",
          {
            translateX: "-0%",
            stagger: 0.1,
          },
          "-=0.5"
        );
    } else {
      t1.to("aside", {
        translateX: "-100%",
      }).to(
        ".button",
        {
          translateX: "-300%",
        },
        "-=.4"
      );
    }
  }, [first]);
  return (
    <div className="flex bg-[#9381ff] ">
      <aside className="bg-[#161a1d] h-screen text-white w-52 pl-8 pt-5 translate-x-[-100%]">
        <h3 className="text-2xl my-3">Menu</h3>
        <div className="mt-8 font-thin text-md flex gap-2 flex-col">
          <div className="nav">Home</div>
          <div className="nav">Dashboard</div>
          <div className="nav">Menu</div>
          <div className="nav">Contact</div>
          <div className="nav">About</div>
        </div>
      </aside>
      <div className="button translate-x-[-300%]">
        <button className="p-5 text-3xl font-bold" onClick={func}>
          <RiMenu4Fill />
        </button>
      </div>
    </div>
  );
};

export default Lec5;
