import { ShieldCheck, Leaf, Award, Users } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Healthy & Vaccinated Animals",
    description: "All our animals are fully vaccinated, well-nourished, stress-free, and maintained at the ideal state of health quality.",
  },
  {
    icon: Leaf,
    title: "Climate Animal Culture",
    description: "Optimal local conditions drive the most humane breeding with many varieties of breeds ensuring their wellbeing.",
  },
  {
    icon: Award,
    title: "Premium Quality & Direct Supply",
    description: "Best products, direct from our farm to your doorstep, with all checks, verified, and health guaranteed always.",
  },
  {
    icon: Users,
    title: "Experienced & Knowledgeable Team",
    description: "Built on decades of local and global experience, our livestock care and poultry management team is second to none.",
  },
];

const Features = () => {
  return (
    <section className="bg-card py-0 -mt-1 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 -translate-y-10 md:-translate-y-14">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-border"
            >
              <div className="w-10 h-10 rounded-full bg-farm-orange/10 flex items-center justify-center mb-4">
                <feature.icon className="h-5 w-5 text-farm-orange" />
              </div>
              <h3 className="font-sans font-semibold text-sm text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
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
