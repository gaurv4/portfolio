import { FaLocationArrow } from "react-icons/fa6";
import Link from "next/link";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-9 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:github.gaurav04@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-20 flex-col-reverse justify-center gap-10 items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Gaurav Mahajan
        </p>

        <div className="flex items-center gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="select-none w-10 h-10 hover:bg-purple hover:bg-opacity-90 active:bg-white-100 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Link target="_blank" href={info.href}><img src={info.img} alt="icons" width={20} height={20} /></Link>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
