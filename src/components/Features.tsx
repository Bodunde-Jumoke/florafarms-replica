import chickenIcon from "@/assets/chicken-icon.png";
import eggIcon from "@/assets/egg-icon.png";
import pigIcon from "@/assets/pig-icon.png";
import ramIcon from "@/assets/ram-icon.png";

const features = [
  {
    icon: chickenIcon,
    title: "Healthy & Vaccinated Animals",
    description: "All our livestock and poultry are fully vaccinated, disease-free, and regularly health-checked for superior quality.",
    bg: "#F5F8F3",
    textDark: true,
  },
  {
    icon: eggIcon,
    title: "Ethical Animal Welfare",
    description: "Spacious, clean environments with natural feeding and humane practices, animal well-being is our priority.",
    bg: "#FAE8CD",
    textDark: true,
  },
  {
    icon: pigIcon,
    title: "Premium Quality & Direct Supply",
    description: "Fresh products straight from our farm to you, with expert care for consistent excellence.",
    bg: "#F0C497",
    textDark: true,
  },
  {
    icon: ramIcon,
    title: "Experienced & Knowledgeable Team",
    description: "Dedicated experts with years of hands-on farming expertise.",
    bg: "#E6A061",
    textDark: false,
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
              className="rounded-xl px-6 py-5"
              style={{ backgroundColor: feature.bg }}
            >
              <div className="mb-4">
                <img src={feature.icon} alt={feature.title} className="w-10 h-10 object-contain" />
              </div>
              <h3 className={`font-sans font-semibold text-base mb-3 ${
                feature.textDark ? "text-foreground" : "text-white"
              }`}>
                {feature.title}
              </h3>
              <p className={`text-sm leading-relaxed ${
                feature.textDark ? "text-muted-foreground" : "text-white/80"
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
