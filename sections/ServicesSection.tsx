import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Image from "next/image";

const services: string[] = [
  "Creative Design",
  "Photography",
  "Print Production",
  "Storage & Delivery",
];

export default function ServicesSection() {
  return (
    <section className="w-full flex flex-col font-bold gap-[2rem]">
      <h2 className="text-8xl text-primary">Our Services</h2>

      <div className="w-full flex flex-col gap-[0.75rem]">
        {services.map((service, index) => (
          <HoverCard key={index}>
            <HoverCardTrigger asChild>
              <p className="text-6xl hover:text-7xl transition-all ease-in-out delay-50 duration-300">
                {service}
              </p>
            </HoverCardTrigger>
          </HoverCard>
        ))}
      </div>
    </section>
  );
}
