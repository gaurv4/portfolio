"use client";
import { useEffect } from "react";
import "../../app/globals.css";
import gsap from "gsap";
import Textprovider from "./textprovider";

const text = ["Building", "Exceptional", "User", "Experience"];

const runningText = () => {
  useEffect(() => {
    gsap.fromTo(
      ".runningtext",
      { z: -2, opacity: 0 },
      { z: -1, opacity: 5, duration: 3, ease: "expo.in" }
    );
  }, []);

  const textProviders = [];
  for (let i = 0; i < 150; i++) {
    textProviders.push(
      <div key={i} className="flex">
        <Textprovider text={text[i % text.length]} />
      </div>
    );
  }

  return (
    <div className="runningtext translate-y-36 h-fit absolute overflow-hidden whitespace-nowrap">
      <div className="flex animate-marquee h-full items-center">
        {textProviders}
      </div>
    </div>
  );
};

export default runningText;
