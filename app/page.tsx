import { AboutMe } from "@/components/AboutMe";
import { Footer } from "@/components/Footer";
import Hero from "@/components/Hero";
import { NavbarDemo } from "@/components/NavBar";
import { WorkExperience } from "@/components/WorkExperience";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <NavbarDemo />
      <Hero />
      <AboutMe />
      <WorkExperience />
      <Footer />
    </main>
  );
}
