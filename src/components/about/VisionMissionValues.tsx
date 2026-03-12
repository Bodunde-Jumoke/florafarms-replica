import missionIcon from "@/assets/mission.png";
import visionIcon from "@/assets/vision.png";
import coreValuesIcon from "@/assets/core-values.png";
import farmImg from "@/assets/farm.jpeg";
import tableEggsImg from "@/assets/table-eggs.jpg";
import teamImg from "@/assets/team.jpeg";

const cards = [
  {
    image: farmImg,
    imageAlt: "Farm scene with chickens and egg basket",
    icon: visionIcon,
    iconAlt: "Mission icon",
    title: "Our Mission",
    content: "Our mission is to operate a well-managed and sustainable livestock and poultry farm that delivers reliable farm products while maintaining high standards of animal care, farm hygiene, and responsible agricultural practices.",
    type: "paragraph" as const,
  },
  {
    image: tableEggsImg,
    imageAlt: "Close-up of hen with fresh eggs",
    icon: missionIcon,
    iconAlt: "Vision icon",
    title: "Our Vision",
    content: "To become a trusted private commercial livestock and poultry farm in Nigeria, known for producing healthy animals, quality farm products, and operating with professional agricultural standards.",
    type: "paragraph" as const,
  },
  {
    image: teamImg,
    imageAlt: "FloraFarms team members",
    icon: coreValuesIcon,
    iconAlt: "Core Values icon",
    title: "Our Core Values",
    content: "",
    type: "list" as const,
    items: [
      "Integrity",
      "Animal Welfare",
      "Quality Production",
      "Professional Farm Management",
      "Agricultural Responsibility",
    ],
  },
];

const VisionMissionValues = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-signika text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Vision, Mission and Core Values
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div key={index} className="flex flex-col">
              {/* Image with icon overlay */}
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src={card.image}
                  alt={card.imageAlt}
                  className="w-full h-[250px] md:h-[280px] object-cover"
                  loading="lazy"
                />
                {/* Icon positioned at bottom-right, overlapping */}
                <div className="absolute -bottom-6 right-6 w-14 h-14 rounded-full bg-farm-orange flex items-center justify-center shadow-md z-10">
                  <img src={card.icon} alt={card.iconAlt} className="w-8 h-8 object-contain" />
                </div>
              </div>

              {/* Text content */}
              <div className="pt-10 pb-4 px-2">
                <h3 className="font-signika font-bold text-xl text-foreground mb-3">
                  {card.title}
                </h3>
                {card.type === "paragraph" ? (
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {card.content}
                  </p>
                ) : (
                  <ul className="space-y-1.5">
                    {card.items?.map((item, i) => (
                      <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="text-foreground mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionMissionValues;
