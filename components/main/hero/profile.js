"use client";
import React, { useEffect } from "react";
import "../../../app/globals.css";
import gsap from "gsap";

const profile = () => {
  useEffect(() => {
    gsap.fromTo(
      ".profile",
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 5, stagger: 5, ease: "back.inOut" }
    );
    gsap.fromTo(
      ".profile_p",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 5, ease: "power4.easein" }
    );
    gsap.fromTo(
      ".profile_text_G",
      { x: -800, opacity: 0 },
      { x: 0, opacity: 1, duration: 5, stagger: 5, ease: "bounce.inOut" }
    );
    gsap.fromTo(
      ".profile_text_V",
      { x: 800, opacity: 0 },
      { x: 0, opacity: 1, duration: 5, stagger: 5, ease: "bounce.inOut" }
    );
  }, []);

  return (
    <div className="profile -translate-x-7 w-full mt-20 lg:mt-10 flex justify-center">
      <p className="profile_p select-none translate-x-28 lg:translate-x-40 -mt-12 lg:text-5xl text-4xl text-white font-medium">
        I'M
      </p>
      <div className="flex lg:mt-2">
        <h1 className="profile_text_G select-none font-sans lg:text-9xl text-7xl text-transparent font-extrabold mr-4">
          G
        </h1>
        <h1 className="profile_text select-none font-sans lg:text-9xl text-7xl text-transparent -ml-3 font-extrabold">
          AURA
        </h1>
        <h1 className="profile_text_V select-none font-sans lg:text-9xl text-7xl text-transparent font-extrabold lg:-ml-3 -ml-1">
          V
        </h1>
      </div>
    </div>
  );
};

export default profile;
