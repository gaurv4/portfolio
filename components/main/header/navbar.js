"use client";
import { useEffect } from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { FaRegCopyright } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import "../../../app/globals.css";
import gsap from "gsap";

const navbar = () => {
  const navs = ["home", "projects", "about", "contact"];

  useEffect(() => {
    gsap.fromTo(
      ".navbar",
      { y: -52, opacity: 0 },
      { y: 0, opacity: 1, duration: 2, stagger: 1, ease: "power3.easeIn" }
    );
  }, []);

  return (
    <>
      <nav
        className={`navbar mt-3 lg:max-w-3xl w-10/12 h-14 z-50 backdrop-filter backdrop-blur-sm bg-transparent bg-opacity-10 backdrop-contrast-75 text-white 2xl:w-2/4 md:px-6 2xl:px-0 mx-auto flex items-center justify-between rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]`}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        <Link
          href={"/"}
          className="2xl:ml-11 select-none ml-5 gap-1 flex justify-center items-center transition-colors duration-300"
        >
          <FaRegCopyright />
          <TypeAnimation
            sequence={[
              "Code by Gaurav.",
              500,
              "Code by Gaurav..",
              500,
              "Code by Gaurav...",
              500,
              "Code by Gaurav....",
              500,
            ]}
            wrapper="span"
            speed={50}
            style={{ display: "inline-block" }}
            repeat={Infinity}
            omitDeletionAnimation={true}
          />
        </Link>

        <ul className="flex hidden items-center gap-8 mr-11">
          {navs.map((e, i) => (
            <li key={i}>
              <ScrollLink
                className="nav_links select-none text-sm hover:text-slate-200 transition-colors capitalize cursor-pointer"
                to={e}
                offset={-60}
                smooth={true}
                duration={500}
                isDynamic={true}
              >
                {e}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default navbar;
