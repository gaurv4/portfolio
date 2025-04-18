import { useEffect } from "react";
import "../../../app/globals.css";
import gsap from "gsap";

const runningText = ({ text, theme }) => {
  useEffect(() => {
    gsap.fromTo(
      ".runningtext",
      { z: -2, opacity: 0 },
      { z: -1, opacity: 5, duration: 3, ease: "expo.in" }
    );
  }, []);

  return (
    <div className="runningtext absolute -translate-y-0 lg:-translate-y-64 h-72 -z-10 overflow-hidden whitespace-nowrap">
      <div className="flex animate-marquee h-full items-center">
        <div className="pr-24">
          <p
            className={`${
              theme === "light" ? "" : "text"
            } bg_text text-9xl opacity-30 uppercase font-bold`}
          >
            {text}
          </p>
        </div>
        <div className="pr-24">
          <p
            className={`${
              theme === "light" ? "" : "text"
            } bg_text text-9xl opacity-30 uppercase font-bold`}
          >
            {text}
          </p>
        </div>
        <div className="pr-24">
          <p
            className={`${
              theme === "light" ? "" : "text"
            } bg_text text-9xl opacity-30 uppercase font-bold`}
          >
            {text}
          </p>
        </div>
        <div className="pr-24">
          <p
            className={`${
              theme === "light" ? "" : "text"
            } bg_text text-9xl opacity-30 uppercase font-bold`}
          >
            {text}
          </p>
        </div>
        <div className="pr-24">
          <p
            className={`${
              theme === "light" ? "" : "text"
            } bg_text text-9xl opacity-30 uppercase font-bold`}
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default runningText;
