import ImageCarousel from "@/components/ImageCarousel";

export default function ClientSection() {
  return (
    <section className="flex w-full text-8xl font-bold justify-center align-middle items-center text-primary">
      <ImageCarousel />
      <div className="text-center w-[50%]">
        <p>Our Clients</p>
      </div>
    </section>
  );
}
