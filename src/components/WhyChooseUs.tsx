import whyChooseImg from "@/assets/team.jpeg";

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-farm-cream-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden">
            <img
              src={whyChooseImg}
              alt="FloraFarms team members standing together"
              className="w-full h-[400px] lg:h-[550px] object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Text */}
          <div>
            <span className="inline-block border border-foreground/30 text-foreground text-sm font-medium px-5 py-2 rounded-full mb-6">
              Why Choose Us?
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Experience the Best with Our Livestock and Poultry Farm.
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8">
              We operate as a structured private agricultural enterprise focused on consistency, animal welfare, and professional farm management. Our systems are designed to support reliable livestock and poultry production under Nigerian farming conditions.
            </p>
            <a
              href="/about"
              className="inline-block bg-farm-orange hover:bg-farm-orange-hover text-primary-foreground px-8 py-3 rounded-full font-semibold transition-colors text-sm"
            >
              Read More About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
