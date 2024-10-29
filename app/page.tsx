import AboutSection from "@/sections/AboutSection";
import HomeSection from "../sections/HomeSection";
import ClientSection from "@/sections/ClientSection";
import ServicesSection from "@/sections/ServicesSection";
import ContactUsSection from "@/sections/ContactUsSection";

export default function Home() {
  return (
    <main className="flex flex-col gap-[10rem] p-[6.25rem] justify-center align-middle items-center w-full">
      <HomeSection />
      <AboutSection />
      <ServicesSection />
      <ClientSection />
      <ContactUsSection />
    </main>
  );
}
