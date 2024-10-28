import { HoverCard, HoverCardTrigger } from "@/components/ui/hover-card";

const services: string[] = [
  "Creative Design",
  "Photography",
  "Print Production",
  "Storage & Delivery",
];

export default function ServicesSection() {
  return (
    <section className="w-full flex flex-col gap-[0.75rem]">
      {services.map((service, index) => (
        <HoverCard key={index}>
          <HoverCardTrigger asChild>
            <p className="text-5xl font-bold hover:text-7xl hover:text-primary transition-all ease-in-out delay-100 duration-500">{service}</p>
          </HoverCardTrigger>
        </HoverCard>
      ))}
    </section>
  );
}
