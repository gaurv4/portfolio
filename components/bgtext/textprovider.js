import "../../app/globals.css";

const textprovider = ({ text }) => {
  return (
    <div className="mr-10">
      <p
        className={`text select-none -z-10 bg_text hover:opacity-80 hover:text-white
          text-8xl lg:text-9xl opacity-20 uppercase font-bold font-mono`}
      >
        {text}
      </p>
    </div>
  );
};

export default textprovider;
