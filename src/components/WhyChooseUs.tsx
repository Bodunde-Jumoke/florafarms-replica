import whyChooseImg from "@/assets/why-choose-us.jpg";

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-farm-cream-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden">
            <img
              src={whyChooseImg}
              alt="Farmer caring for livestock and poultry on the farm"
              className="w-full h-[400px] lg:h-[500px] object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <span className="inline-block bg-farm-orange/10 text-farm-orange text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
              Why Choose Us?
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              Experience the Best with Our Livestock and Poultry Farm.
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              We guarantee you the best livestock and poultry, from healthy free-range breeds to quality eggs, all of
              our farm and delivers all the assurance you need. Our expert teams and modern equipment support our mission
              to consistently produce top quality livestock for both local and commercial enterprises.
            </p>
            <a
              href="#about"
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
