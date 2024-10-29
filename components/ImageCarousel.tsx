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
          <Card className="relative w-[500px] h-[500px] aspect-square bg-white text-black flex justify-center align-middle items-center">
            <Image
              src="/canonLogo.svg"
              alt="Canon logo"
              fill={true}
              style={{ objectFit: "contain" }}
            />
          </Card>
        </div>

        <div className="embla__slide">
          <Card className="relative w-[500px] h-[500px] aspect-square bg-white text-black flex justify-center align-middle items-center">
            <Image
              src="/parkwayPantaiLogo.svg"
              alt="Parkway Pantai logo"
              fill={true}
              style={{ objectFit: "contain" }}
            />
          </Card>
        </div>

        <div className="embla__slide">
          <Card className="relative w-[500px] h-[500px] aspect-square bg-white text-black flex justify-center align-middle items-center">
            <Image
              src="https://tukuz.com/wp-content/uploads/2020/07/singapore-national-eye-centre-snec-logo-vector.png"
              alt="Parkway Pantai logo"
              fill={true}
              style={{ objectFit: "contain" }}
            />
          </Card>
        </div>

        <div className="embla__slide">
          <Card className="relative w-[500px] h-[500px] aspect-square bg-white text-black flex justify-center align-middle items-center">
            <Image
              src="/changiAirportGroupLogo.png"
              alt="Changi Airport Group logo"
              fill={true}
              style={{ objectFit: "contain" }}
            />
          </Card>
        </div>

        <div className="embla__slide">
          <Card className="relative w-[500px] h-[500px] aspect-square bg-white text-black flex justify-center align-middle items-center">
            <Image
              src="/moeLogo.jpg"
              alt="Ministry of Edication logo"
              fill={true}
              style={{ objectFit: "contain" }}
            />
          </Card>
        </div>
      </div>
    </div>
  );
}
