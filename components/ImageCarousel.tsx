"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

export default function ImageCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({
      delay: 1000,
      stopOnInteraction: false,
      stopOnFocusIn: true,
      stopOnMouseEnter: true,
    }),
  ]);

  return (
    <div className="embla flex-grow" ref={emblaRef}>
      <div className="embla__container max-w-[600px] h-[500px]">
        <div className="embla__slide">
          <Card className="w-[500px] h-[500px] aspect-square bg-white text-black flex justify-center align-middle items-center p-[1rem]">
            <div className="relative h-full w-full">
              <Image
                src="/canonLogo.svg"
                alt="Canon logo"
                fill={true}
                style={{ objectFit: "contain" }}
              />
            </div>
          </Card>
        </div>

        <div className="embla__slide">
          <Card className="relative w-[500px] h-[500px] aspect-square bg-white text-black flex justify-center align-middle items-center">
            <Image
              src="/nutellaLogo.svg"
              alt="Nutella logo"
              fill={true}
              style={{ objectFit: "contain" }}
            />
          </Card>
        </div>

        <div className="embla__slide">
          <Card className="w-[500px] h-[500px] aspect-square bg-white text-black flex justify-center align-middle items-center p-[1rem]">
            <div className="relative w-full h-full">
              <Image
                src="/logitechLogo.svg"
                alt="Logitech logo"
                fill={true}
                style={{ objectFit: "contain" }}
              />
            </div>
          </Card>
        </div>

        <div className="embla__slide">
          <Card className="relative w-[500px] h-[500px] aspect-square bg-white text-black flex justify-center align-middle items-center">
            <Image
              src="https://tukuz.com/wp-content/uploads/2020/07/singapore-national-eye-centre-snec-logo-vector.png"
              alt="Singapore National Eye Centre logo"
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
              src="/moeLogo.jpg"
              alt="Ministry of Education logo"
              fill={true}
              style={{ objectFit: "contain" }}
            />
          </Card>
        </div>

        <div className="embla__slide">
          <Card className="relative w-[500px] h-[500px] aspect-square bg-white text-black flex justify-center align-middle items-center">
            <Image
              src="/msfLogo.png"
              alt="Ministry of Social and Family Development logo"
              fill={true}
              style={{ objectFit: "contain" }}
            />
          </Card>
        </div>
      </div>
    </div>
  );
}
