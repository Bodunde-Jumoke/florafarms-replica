import quotationIcon from "@/assets/quotation-icon.png";

const testimonials = [
  {
    quote: "The point of lay birds we received were uniform in size and properly managed. You can tell they follow a structured system. Transition into egg production was smooth.",
    name: "Poultry Farmer – Ogun State",
  },
  {
    quote: "Their table eggs are consistently clean and well handled. You don't see cracked or poorly stored products. The quality control is evident.",
    name: "Egg Distributor – Lagos",
  },
  {
    quote: "The goats and rams were healthy and well-fed. It's clear they maintain proper feeding and housing standards.",
    name: "Livestock Buyer – Oyo State",
  },
  {
    quote: "What stands out is their biosecurity discipline. The farm layout and housing system reflect organized commercial planning.",
    name: "Agricultural Consultant",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-farm-testimonial-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-farm-testimonial-card text-farm-dark text-sm font-medium px-5 py-2 rounded-full mb-4">
            Testimonial
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-farm-dark">
            What our customers say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-farm-testimonial-card rounded-[20px] p-8 text-center relative"
            >
              <div className="absolute -top-3 right-5">
                <img
                  src={quotationIcon}
                  alt="Quote icon"
                  className="w-10 h-10"
                  loading="lazy"
                />
              </div>
              <p className="text-farm-dark/80 text-sm leading-relaxed mb-6 mt-4">
                "{t.quote}"
              </p>
              <p className="font-sans font-semibold text-sm text-farm-dark">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
