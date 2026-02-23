import { Quote } from "lucide-react";

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
          <span className="inline-block border border-foreground/30 text-foreground text-sm font-medium px-5 py-2 rounded-full mb-4">
            Testimonial
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            What our customers say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-sm border border-border"
            >
              <Quote className="h-8 w-8 text-farm-orange mb-4" />
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                "{t.quote}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-sans font-semibold text-sm text-farm-orange">{t.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
