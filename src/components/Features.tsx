import { ShieldCheck, Leaf, Award, Users } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Healthy & Vaccinated Animals",
    description: "All our livestock and poultry are fully vaccinated, disease-free, and regularly health-checked for superior quality.",
  },
  {
    icon: Leaf,
    title: "Ethical Animal Welfare",
    description: "Spacious, clean environments with natural feeding and humane practices, animal well-being is our priority.",
  },
  {
    icon: Award,
    title: "Premium Quality & Direct Supply",
    description: "Fresh products straight from our farm to you, with expert care for consistent excellence.",
  },
  {
    icon: Users,
    title: "Experienced & Knowledgeable Team",
    description: "Dedicated experts with years of hands-on farming expertise.",
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
              className="bg-accent rounded-xl p-6"
            >
              <div className="w-12 h-12 rounded-full bg-farm-orange/15 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-farm-orange" />
              </div>
              <h3 className="font-sans font-semibold text-base text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
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
