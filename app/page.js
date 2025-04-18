import Navbar from "@/components/main/header/navbar";
import Hero from "@/components/main/hero/hero";
import Intro from "@/components/main/intro/intro";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <>
      <main className="overflow-hidden overflow-x-hidden">
        <header
          className={`h-20 w-full border-b-0 dark:bg-grey-900 dark:bg-opacity-40 border-gray-200 dark:border-b-0 z-30 min-w-full flex items-center`}
        >
          <Navbar />
        </header>
        <Hero />
        <Intro />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </main>
    </>
  );
};

export default page;
