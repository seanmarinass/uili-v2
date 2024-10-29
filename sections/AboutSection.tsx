export default function AboutSection() {
  return (
    <section className="lg:text-7xl md:text-5xl text-3xl text-left w-full flex flex-col gap-[3rem] font-bold">
      <div className="flex flex-col gap-[0.75rem]">
        <p>At Ui-Li Print & Services we</p>
        <p>
          <span className="bg-primary text-background w-fit">
            elevate brands
          </span>{" "}
          by delivering
        </p>
        <p className="bg-primary text-background w-fit">
          exceptional printing solutions.
        </p>
      </div>

      <div className="flex flex-col gap-[0.75rem]">
        <p>Our mission is simple</p>
        <p>to add value through</p>
        <p>
          <span className="bg-primary text-background w-fit">
            personalised service
          </span>{" "}
          and
        </p>
        <p className="bg-primary text-background w-fit">
          quality craftsmanship.
        </p>
      </div>

      <div className="flex flex-col gap-[0.75rem]">
        <p>From design to delivery</p>
        <p>our fully equipped facility</p>
        <p>ensures your projects</p>
        <p>
          <span className="bg-primary text-background w-fit">stand out</span>{" "}
          and reach you
        </p>
        <p>seamlessly.</p>
      </div>
    </section>
  );
}
