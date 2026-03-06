import gallery1 from "@/assets/gallery-1.jpg";

const CommitmentToQuality = () => {
  return (
    <section className="bg-farm-testimonial-bg" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 items-start" style={{ gap: '64px' }}>
          {/* Image */}
          <div className="rounded-3xl overflow-hidden">
            <img
              src={gallery1}
              alt="Close-up of a healthy hen with eggs on the farm"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              Our Commitment to Quality
            </h2>
            <p className="text-foreground/80 text-sm leading-relaxed mb-8">
              As a private commercial farm, we prioritize consistent standards over short-term output. Our production systems are designed to maintain reliability, stability, and scalable agricultural operations.
            </p>

            <div className="space-y-4">
              {/* Item 01 - Highlighted card */}
              <div className="bg-farm-testimonial-card rounded-2xl p-6 flex items-center gap-4">
                <span className="font-display text-4xl md:text-5xl font-bold text-farm-orange">
                  01
                </span>
                <span className="font-sans text-sm font-medium text-foreground">
                  Controlled Housing Systems
                </span>
              </div>

              {/* Item 02 - Simple row */}
              <div className="flex items-center gap-4 pb-4 border-b border-foreground/10">
                <span className="font-display text-4xl md:text-5xl font-bold text-farm-orange/30">
                  02
                </span>
                <span className="font-sans text-sm font-medium text-foreground">
                  Monitored Growth Cycles
                </span>
              </div>

              {/* Item 03 - Simple row */}
              <div className="flex items-center gap-4 pb-4 border-b border-foreground/10">
                <span className="font-display text-4xl md:text-5xl font-bold text-farm-orange/30">
                  03
                </span>
                <span className="font-sans text-sm font-medium text-foreground">
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
