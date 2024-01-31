import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { RiMenu2Fill } from "react-icons/ri";

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
    <div className="z-[100] fixed w-screen h-auto">
      <nav className="flex text-xl gap-10 items-center justify-end text-white font-robo p-14 max-md:hidden">
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
        <RiMenu2Fill className=" glow text-[#F8F7FF] cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
