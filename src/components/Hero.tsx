import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative bg-farm-green overflow-hidden min-h-[500px] md:min-h-[550px]">
      {/* Full background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Farm with basket of fresh eggs and free-range chickens at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-farm-green/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 lg:py-20 max-w-xl">
          <h1 className="text-primary-foreground font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Commercial Livestock and Poultry Farm
          </h1>
          <p className="text-primary-foreground/70 text-lg mb-2 font-medium">
            Janklo Road, Nigeria
          </p>
          <p className="text-primary-foreground/60 text-sm mb-8 max-w-md">
            Delivering trusted livestock and poultry that thrive in every condition, ensuring unmatched quality and productivity.
          </p>
          <a
            href="#contact"
            className="inline-block bg-farm-orange hover:bg-farm-orange-hover text-primary-foreground px-8 py-3 rounded-full font-semibold transition-colors"
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
