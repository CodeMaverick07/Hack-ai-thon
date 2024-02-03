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
      <nav className="flex text-2xl gap-10 items-center justify-end text-white p-6 max-md:hidden font-nav">
        <a href="#about" className="glow">
          About
        </a>
        <a href="#faq" className="glow">
          FAQ
        </a>
        <a href="#sponsors" className="glow">
          Sponsors
        </a>
        <a href="#contact" className="glow">
          Contact
        </a>
        <a href="#team" className="glow">
          Team
        </a>
      </nav>
      <div className="hidden max-md:flex justify-end p-6 text-3xl">
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
                  <a href="#faq" className="">
                    FAQ
                  </a>
                  <a href="#sponsors" className="">
                    Sponsors
                  </a>
                  <a href="#contact" className="">
                    Contact
                  </a>
                  <a href="#team" className="">
                    Team
                  </a>
                </nav>
              </SheetClose>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Header;
