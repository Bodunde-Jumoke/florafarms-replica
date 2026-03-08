import structuredFeeding from "@/assets/Structured-Feeding.png";
import biosecurity from "@/assets/Biosecurity-Hygiene.png";
import veterinary from "@/assets/Veterinary-Supervision.png";
import industryImg from "@/assets/industry.png";

const approaches = [
  {
    icon: structuredFeeding,
    label: "Structured Feeding Programs",
  },
  {
    icon: biosecurity,
    label: "Biosecurity & Hygiene",
  },
  {
    icon: veterinary,
    label: "Veterinary Supervision",
  },
];

const ProductionApproach = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Production Approach
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Our farm operates through clearly defined feeding schedules, housing systems, and health monitoring procedures. Each livestock category is managed according to its growth stage and production purpose to ensure uniform development and long-term stability.
          </p>
        </div>

        {/* Three icons */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12">
          {approaches.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-3">
              <div className="w-20 h-20 rounded-full border-2 border-farm-orange flex items-center justify-center">
                <item.icon className="h-8 w-8 text-farm-orange" />
              </div>
              <span className="font-sans text-xs font-medium text-farm-orange text-center max-w-[140px]">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Industry Alignment box */}
        <div className="max-w-lg mx-auto bg-card rounded-xl p-6 flex items-start gap-4">
          <div className="shrink-0 w-16 h-16 rounded-full overflow-hidden bg-farm-green flex items-center justify-center">
            <img src={logo} alt="PAN - Poultry Association of Nigeria" className="w-full h-full object-cover" />
          </div>
          <div>
            <h3 className="font-sans font-semibold text-sm text-foreground mb-1">
              Industry Alignment
            </h3>
            <p className="text-muted-foreground text-xs leading-relaxed">
              Our farm collaborates with the Poultry Association of Nigeria (PAN), reinforcing our commitment to structured poultry production and professional agricultural standards in Nigeria.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductionApproach;
