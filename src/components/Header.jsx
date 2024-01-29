import { useGSAP } from "@gsap/react";
import gsap from "gsap";

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
      <nav className="flex text-xl gap-10 items-center justify-end text-white font-robo p-14">
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
    </div>
  );
};

export default Header;
