import gallery1 from "@/assets/point-of-lay.jpeg";

const CommitmentToQuality = () => {
  return (
    <section className="bg-farm-testimonial-bg" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 items-start" style={{ gap: '64px' }}>
          {/* Image */}
          <div className="rounded-3xl overflow-hidden flex justify-center">
            <img
              src={gallery1}
              alt="Close-up of a healthy hen with eggs on the farm"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div className="text-center lg:text-left">
            <h2 className="font-signika text-white text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              Our Commitment to Quality
            </h2>
            <p className="text-foreground/80 text-white text-md leading-relaxed mb-8">
              As a private commercial farm, we prioritize consistent standards over short-term output. Our production systems are designed to maintain reliability, stability, and scalable agricultural operations.
            </p>

            <div className="space-y-4">
              {/* Item 01 - Highlighted card */}
              <div className="bg-farm-testimonial-card rounded-2xl p-6 flex items-center gap-4">
                <span className="font-signika text-4xl md:text-7xl font-bold font-bold text-[#E6A061]">
                  01
                </span>
                <span className="font-signika text-[#452102] text-sm font-medium text-foreground">
                  Controlled Housing Systems
                </span>
              </div>

              {/* Item 02 - Simple row */}
              <div className="flex items-center gap-4 pb-4 border-b border-foreground/10">
                <span className="font-signika text-white text-4xl md:text-7xl font-bold text-farm-orange/30">
                  02
                </span>
                <span className="font-signika text-white text-sm font-medium text-foreground">
                  Monitored Growth Cycles
                </span>
              </div>

              {/* Item 03 - Simple row */}
              <div className="flex items-center gap-4 pb-4 border-b border-foreground/10">
                <span className="font-signika text-white text-4xl md:text-7xl font-bold text-farm-orange/30">
                  03
                </span>
                <span className="font-signika text-white text-sm font-medium text-foreground">
                  Climate-Suitable Management for Nigeria
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommitmentToQuality;
