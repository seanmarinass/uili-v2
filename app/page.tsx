import AboutSection from "@/sections/AboutSection";
import HomeSection from "../sections/HomeSection";

export default function Home() {
  return (
    <main className="flex flex-col gap-[5rem] p-[1rem] justify-center align-middle items-center w-full">
      <HomeSection />
      <AboutSection />
    </main>
  );
}
