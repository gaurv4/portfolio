"use client";
import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";
import "../../../app/globals.css";

const profileCard = () => {
  useEffect(() => {
    gsap.fromTo(
      ".profile_img",
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 2, stagger: 5, ease: "power3.easeIn" }
    );
  }, []);

  const img = "/profile_img.jpg";

  return (
    <div className="relative flex justify-center h-64 lg:h-1/2 lg:w-1/2 z-50 w-64">
      <Image
        className="profile_img select-none opacity-0 img w-fit rounded-full border-4"
        src={img}
        alt="Profile Image"
        width={500}
        height={500}
      />
    </div>
  );
};

export default profileCard;
