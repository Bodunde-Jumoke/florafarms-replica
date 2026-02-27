import heroBg from "@/assets/hero-bg.png";

const AboutHero = () => {
  return (
    <section className="relative bg-farm-green overflow-hidden min-h-[300px] md:min-h-[350px]">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Farm background with eggs and chickens"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-farm-green/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end h-full min-h-[300px] md:min-h-[350px] pb-12">
        <h1 className="text-primary-foreground font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
          About Us
        </h1>
        <p className="text-primary-foreground/70 text-sm font-sans">
          <a href="/" className="hover:text-farm-orange transition-colors">HOME</a>
          {" "}
          <span className="text-primary-foreground/50">/</span>
          {" "}
          <span>ABOUT US</span>
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
