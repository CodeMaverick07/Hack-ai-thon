import React from "react";
import {
  FaArrowRight,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const social = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/aicolegion_vesit",
      icon: <FaInstagram className="h-12 w-12" />,
    },
    {
      name: "Mail",
      href: "mailto:ai_ds.aicolegion@ves.ac.in ",
      icon: <FaEnvelope className="h-12 w-12" />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/ai-colegion-vesit/",
      icon: <FaLinkedin className="h-12 w-12" />,
    },
  ];
  return (
    <footer className="bg-black  max-md:h-[50vh] flex justify-center items-center">
      <div className="mx-auto max-w-7xl flex flex-col justify-center items-center overflow-hidden px-6 py-20">
        <div className="mt-10 flex justify-center space-x-10 max-md:space-x-0 max-md:gap-2 items-center">
          <a href="#hero">
            <button className="font-ai text-black text-2xl p-3 max-md:text-xl bg-yellow-400 border border-black rounded-lg hover:scale-110">
              <div className="flex justify-center items-center gap-1">
                <FaArrowRight />
                <span>Apply</span>
              </div>
            </button>
          </a>
          {social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-200 max-md:h-14 hover:text-white flex flex-col justify-center items-center"
            >
              <span className="sr-only">{item.name}</span>
              {item.icon}
              {item.name}
            </a>
          ))}
        </div>
        <p className="mt-10 text-center text-xl text-white">
          From AI-CoLegion and team.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
