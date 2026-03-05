import { ShieldCheck, Leaf, Award, Users } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Healthy & Vaccinated Animals",
    description: "All our livestock and poultry are fully vaccinated, disease-free, and regularly health-checked for superior quality.",
    variant: "light" as const,
  },
  {
    icon: Leaf,
    title: "Ethical Animal Welfare",
    description: "Spacious, clean environments with natural feeding and humane practices, animal well-being is our priority.",
    variant: "light" as const,
  },
  {
    icon: Award,
    title: "Premium Quality & Direct Supply",
    description: "Fresh products straight from our farm to you, with expert care for consistent excellence.",
    variant: "dark" as const,
  },
  {
    icon: Users,
    title: "Experienced & Knowledgeable Team",
    description: "Dedicated experts with years of hands-on farming expertise.",
    variant: "dark" as const,
  },
];

const Features = () => {
  return (
    <section className="bg-background py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 ${
                feature.variant === "dark"
                  ? "bg-farm-orange text-white"
                  : "bg-accent"
              }`}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                feature.variant === "dark"
                  ? "bg-white/20"
                  : "bg-farm-orange/15"
              }`}>
                <feature.icon className={`h-6 w-6 ${
                  feature.variant === "dark" ? "text-white" : "text-farm-orange"
                }`} />
              </div>
              <h3 className={`font-sans font-semibold text-base mb-3 ${
                feature.variant === "dark" ? "text-white" : "text-foreground"
              }`}>
                {feature.title}
              </h3>
              <p className={`text-sm leading-relaxed ${
                feature.variant === "dark" ? "text-white/80" : "text-muted-foreground"
              }`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
