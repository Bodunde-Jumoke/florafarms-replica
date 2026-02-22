import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The quality of the animals we bought was top-notch. I confidently recommend FloraFarms to everyone I know who is looking for the best livestock solutions for their farms. Their energy and passion are unmatched.",
    name: "Poultry Farmer",
    location: "Ogun State",
  },
  {
    quote: "The hatchlings our customers have got from your farm are top-class. We will definitely buy from FloraFarms next time because our sales were incredible. The quality and support is unmatched.",
    name: "Egg Distributor",
    location: "Lagos",
  },
  {
    quote: "The animals arrived very safely, and we can confirm that the FloraFarms team is professional in everything they do, from keeping good records to professional delivery.",
    name: "Livestock Buyer",
    location: "Oyo State",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-farm-testimonial-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-farm-orange/10 text-farm-orange text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            What our customers say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-sm border border-border"
            >
              <Quote className="h-6 w-6 text-farm-orange mb-4" />
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                "{t.quote}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-sans font-semibold text-sm text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
