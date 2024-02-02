import React from "react";

const Footer = () => {
  return (
    <>
      <div id="credits" className=" pt-10 py-5 px-3 mb-20">
        <center className="text-[17px] sm:text-small text-background  font-robo font-semiboldbold">
          <img src="" alt="" />
        </center>
        <div className=" text-background dark:text-darkbg  mt-5 sm:mt-8 flex flex-wrap gap-10 justify-center">
          {/*---Github---*/}
          <a href="https://github.com/SAMI-THAKUR" target="_blank">
            <i className="fa-brands fa-github text-background  text-[25px] sm:text-[35px] font-light"></i>
          </a>
          {/*---Linkedin---*/}
          <a
            href="https://www.linkedin.com/in/sami-thakur-6072b8256/"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin-in text-background  text-[25px] sm:text-[35px] font-light"></i>
          </a>
          {/*---Twitter---*/}
          <a href="https://twitter.com/home?lang=en-in" target="_blank">
            <i className="fa-brands fa-twitter text-background  text-[25px] sm:text-[35px] font-light"></i>
          </a>
          {/*---Mail---*/}
          <a href="mailto:2022.sami.thakur@ves.ac.in" target="_blank">
            <i className="fa-regular fa-envelope text-background  text-[25px] sm:text-[35px] font-light"></i>
          </a>
          {/*---Instagram---*/}
          <a
            href="https://www.instagram.com/sami_thakur_/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
            target="_blank"
          >
            <i className="fa-brands fa-instagram text-background  text-[25px] sm:text-[35px] font-light"></i>
          </a>
        </div>
        <div className="mt-8 flex flex-wrap gap-10 justify-center text-[25px] sm:text-[30px] font-robo glow text-white tracking-wider">
          Desing & Developed by AI CoLegion VESIT
        </div>
      </div>
    </>
  );
};

export default Footer;
