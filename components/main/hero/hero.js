import ProfileCard from "./profileCard";
import RunningText from "../../bgtext/runningText";
import Profile from "./profile";

const hero = () => {
  return (
    <div className="relative mt-7 lg:mt-6 z-10 w-full h-fit lg:h-screen flex flex-col items-center">
      <ProfileCard />
      <RunningText />
      <Profile />
    </div>
  );
};

export default hero;
