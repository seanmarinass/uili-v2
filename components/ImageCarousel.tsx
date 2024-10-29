"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

export default function ImageCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({
      delay: 750,
      stopOnInteraction: false,
      stopOnFocusIn: true,
      stopOnMouseEnter: true,
    }),
  ]);

  return (
    <div className="embla flex-grow" ref={emblaRef}>
      <div className="embla__container w-[600px] h-[500px]">
        <div className="embla__slide">
          <Card className="w-[500px] h-[500px] aspect-square bg-cyan-400 text-black flex justify-center align-middle items-center">
            Client 1
          </Card>
        </div>

        <div className="embla__slide">
          <Card className="w-[500px] h-[500px] aspect-square bg-red-400 text-black flex justify-center align-middle items-center">
            <CardContent>Client 2</CardContent>
          </Card>
        </div>

        <div className="embla__slide">
          <Card className="w-[500px] h-[500px] aspect-square bg-yellow-300 text-black flex justify-center align-middle items-center">
            <CardContent>Client 3</CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
