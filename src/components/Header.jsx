import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { RiMenu2Fill } from "react-icons/ri";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./Sheet";
import { FaArrowRight } from "react-icons/fa";

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
    <div className="z-[100] fixed w-screen h-auto overflow-visible md:pt-10 md:pr-10">
      <div className="flex justify-between items-center mx-10 max-md:hidden">
        <a href="#hero">
          <img
            src="/logo_trans.png"
            alt="logo"
            className="w-16 h-16 mt-4 cursor-pointer"
          />
        </a>

        <nav className="flex text-2xl gap-10 items-center justify-end text-white py-6 font-nav">
          <a href="#about" className="glow">
            About
          </a>
          <a href="#prize" className="glow">
            Prizes
          </a>
          <a href="#shortlist" className="glow">
            ShortList
          </a>
          <a href="#schedule" className="glow">
            Schedule
          </a>
          <a href="#sponsors" className="glow">
            Sponsors
          </a>
        </nav>
      </div>

      <div className="hidden max-md:flex justify-between p-6 text-3xl">
        <Sheet>
          <SheetTrigger>
            <RiMenu2Fill className=" glow text-[#F8F7FF] cursor-pointer" />
          </SheetTrigger>
          <SheetContent side="left" className="text-black font-ai">
            <SheetHeader>
              <SheetTitle className="glow text-2xl">Menu</SheetTitle>
              <SheetClose>
                <nav className="flex flex-col justify-start text-start gap-4 text-xl">
                  <a href="#about" className="">
                    About
                  </a>
                  <a href="#prize" className="">
                    Prizes
                  </a>
                  <a href="#shortlist" className="">
                    ShortList
                  </a>
                  <a href="#schedule" className="">
                    Schedule
                  </a>
                  <a href="#sponsors" className="">
                    Sponsors
                  </a>
                </nav>
              </SheetClose>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <a
          href="https://hack-ai-thon.devfolio.co/overview"
          className="font-ai text-black text-base bg-yellow-400 border border-black p-1 rounded-lg hover:scale-110"
        >
          <div className="flex justify-center items-center gap-1">
            <span>Apply</span> <FaArrowRight />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Header;
