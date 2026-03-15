import heroBg from "@/assets/hero-bg.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-[600px] md:min-h-[700px]">
      {/* Full background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Farm with basket of fresh eggs and free-range chickens at sunset"
          className="w-full h-full object-cover"
        />
        {/* Subtle dark overlay, NOT green */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-32 lg:py-40 max-w-2xl">
          <h1 className="text-white font-signika text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Commercial Livestock and Poultry Farm
          </h1>
          <p className="text-white/80 text-lg mb-8 font-medium">
            Ijurin Ekiti, Nigeria
          </p>
          <hr className="border-white/30 mb-10" />
          <div className="mb-10">
            <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-lg">
              Operating structured production systems that ensure healthy animals and consistent quality standards.
            </p>
          </div>

          <a
            href="/contact"
            className="inline-block bg-farm-orange hover:bg-farm-orange-hover text-white px-8 py-3 rounded-full font-semibold transition-colors"
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
