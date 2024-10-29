import ImageCarousel from "@/components/ImageCarousel";

export default function ClientSection() {
  return (
    <section className="flex w-full text-7xl font-bold justify-center align-middle items-center">
      <div className="text-left w-[50%]">
        <p>Our Clients</p>
      </div>

      <ImageCarousel />
    </section>
  );
}
