import teamImg from "@/assets/team.jpeg";
import farmImg from "@/assets/gallery-8 - Copy.jpeg";
import structureIcon from "@/assets/structure-prod-system (1).png";
import qualityIcon from "@/assets/quality-icon.png";

const WhoWeAre = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Overlapping images */}
          <div className="relative h-[400px] md:h-[500px]">

            {/* Orange background shape */}
            <div className="absolute top-10 left-6 w-[65%] h-[65%] bg-[#E6A061] rounded-2xl z-0"></div>

            {/* Small image (BEHIND) */}
            <div className="absolute bottom-0 left-0 w-[45%] h-[65%] rounded-2xl overflow-hidden z-10">
              <img
                src={farmImg}
                alt="Farm products"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Big image (FRONT) */}
            <div className="absolute top-0 left-10 md:left-14 w-[80%] h-[73%] rounded-3xl overflow-hidden z-20 shadow-lg">
              <img
                src={teamImg}
                alt="Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text content */}
          <div>
            <span className="inline-block bg-white border/30 text-[#452102] text-md font-medium px-5 py-2 rounded-full mb-6">
              Who We Are
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-[#452102] mb-6 leading-tight">
              A Privately Managed Commercial Farm
            </h2>
            <p className="text-muted-foreground text-md leading-relaxed mb-4">
              We are a privately operated livestock and poultry farm based in Ijurin Ekiti, Nigeria. Our operations are built on structured production systems designed to maintain healthy animals, consistent output, and professional management standards.
            </p>
            <p className="text-muted-foreground text-md leading-relaxed mb-8">
              Through disciplined farm practices, controlled housing systems, and routine health monitoring, we ensure stability and quality across all production units.
            </p>

            {/* Two feature boxes with icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <img src={structureIcon} alt="Structured Production Systems icon" className="h-12 w-12 mb-3" />
                <h3 className="font-semibold text-sm text-[#452102] mb-2">
                  Structured Production Systems
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Clearly defined feeding schedules, monitored growth cycles, and organized housing units across all livestock categories.
                </p>
              </div>
              <div>
                <img src={qualityIcon} alt="Commitment to Quality icon" className="h-12 w-12 mb-3" />
                <h3 className="font-semibold text-sm text-[#452102] mb-2">
                  Commitment to Quality & Biosecurity
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
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
