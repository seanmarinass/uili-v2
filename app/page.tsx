import AboutSection from "@/sections/AboutSection";
import HomeSection from "../sections/HomeSection";
import ClientSection from "@/sections/ClientSection";

export default function Home() {
  return (
    <main className="flex flex-col gap-[10rem] p-[1rem] justify-center align-middle items-center w-full">
      <HomeSection />
      <AboutSection />
      <ClientSection />
    </main>
  );
}
