import heroBg from "@/assets/about-hero.png";

const ProductsHero = () => {
  return (
    <section className="relative  overflow-hidden min-h-[300px] md:min-h-[460px]">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Farm background with eggs and chickens"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-farm-black/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end h-full min-h-[300px] md:min-h-[460px] pb-12">
        <h1 className="text-primary-foreground font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-3 text-center">
          Our Products
        </h1>
        <p className="text-primary-foreground/70 text-sm font-sans text-center">
          <a href="/" className="hover:text-farm-orange transition-colors">HOME</a>
          {" / "}
          <span>OUR PRODUCTS</span>
        </p>
      </div>
    </section>
  );
};

export default ProductsHero;
