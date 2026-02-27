import teamImg from "@/assets/team.jpeg";
import farmImg from "@/assets/farm.jpeg";

const WhoWeAre = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Overlapping images */}
          <div className="relative h-[400px] md:h-[500px]">
            <div className="absolute top-0 left-8 md:left-12 w-[65%] h-[70%] rounded-xl overflow-hidden z-10">
              <img
                src={teamImg}
                alt="FloraFarms team members working together"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-[45%] h-[55%] rounded-xl overflow-hidden z-20 border-4 border-background">
              <img
                src={farmImg}
                alt="Farm products and supplies"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Orange accent block */}
            <div className="absolute bottom-[30%] left-0 w-10 h-14 bg-farm-orange rounded-md z-0" />
          </div>

          {/* Text content */}
          <div>
            <span className="text-farm-orange text-sm font-sans font-medium mb-2 block">
              Who We Are
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              A Privately Managed Commercial Farm
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              We are a privately operated livestock and poultry farm based in Ijurin Ekiti, Nigeria. Our operations are built on structured production systems designed to maintain healthy animals, consistent output, and professional management standards.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              Through disciplined farm practices, controlled housing systems, and routine health monitoring, we ensure stability and quality across all production units.
            </p>

            {/* Two feature boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-sans font-semibold text-sm text-foreground mb-2">
                  Structured Production Systems
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  Clearly defined feeding schedules, monitored growth cycles, and organized housing units across all livestock categories.
                </p>
              </div>
              <div>
                <h3 className="font-sans font-semibold text-sm text-foreground mb-2">
                  Commitment to Quality & Biosecurity
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  Controlled farm access, sanitation procedures, and routine veterinary supervision to support animal health and production stability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
