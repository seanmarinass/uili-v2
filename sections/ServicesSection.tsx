"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

// Define a type for Service
type Service = {
  title: string;
  description: string;
};

// Services array with titles and descriptions
const services: Service[] = [
  {
    title: "Creative Design",
    description:
      "We craft visually stunning designs that capture your brand's essence, ensuring your message resonates with your audience.",
  },
  {
    title: "Photography",
    description:
      "Our photography services deliver high-quality, professional images that bring your vision to life with precision and creativity.",
  },
  {
    title: "Print Production",
    description:
      "We offer end-to-end print production solutions, delivering vibrant, high-quality prints that meet your marketing and promotional needs.",
  },
  {
    title: "Storage & Delivery",
    description:
      "We handle the secure storage and timely delivery of your printed materials, ensuring they reach your audience without a hitch.",
  },
];

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);

  return (
    <section className="flex w-full gap-[5rem]">
      <div className="flex flex-col w-fit font-bold gap-[2rem] text-nowrap">
        <h2 className="text-8xl text-primary">Our Services</h2>

        <div className="w-full flex flex-col gap-[0.75rem]">
          {services.map((service, index) => (
            <div
              key={index}
              className="text-6xl hover:text-7xl transition-all ease-in-out delay-50 duration-300 cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(-1)}
            >
              {service.title}
            </div>
          ))}
        </div>
      </div>
      {hoveredIndex !== -1 && (
        <div className="flex flex-grow justify-center items-center align-middle font-bold">
          <Card className="w-full max-w-[50rem] border-none">
            <CardHeader>
              <CardTitle className="text-7xl text-nowrap bg-primary text-background w-fit p-[0.75rem]">
                {services[hoveredIndex].title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-6xl">
              {services[hoveredIndex].description}
            </CardContent>
          </Card>
        </div>
      )}
    </section>
  );
}
