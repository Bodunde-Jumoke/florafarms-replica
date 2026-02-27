import gallery1 from "@/assets/gallery-1.jpg";

const items = [
  { number: "01", label: "Controlled Housing Systems" },
  { number: "02", label: "Monitored Growth Cycles" },
  { number: "03", label: "Climate-Suitable Management for Nigeria" },
];

const CommitmentToQuality = () => {
  return (
    <section className="py-16 md:py-24 bg-farm-cream-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden">
            <img
              src={gallery1}
              alt="Close-up of a healthy hen on the farm"
              className="w-full h-[350px] md:h-[450px] object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              Our Commitment to Quality
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              As a private commercial farm, we prioritize consistent standards over short-term output. Our production systems are designed to maintain reliability, stability, and scalable agricultural operations.
            </p>

            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.number}
                  className="flex items-center gap-4 border border-farm-orange rounded-lg px-5 py-3"
                >
                  <span className="font-display text-3xl md:text-4xl font-bold text-farm-orange/30">
                    {item.number}
                  </span>
                  <span className="font-sans text-sm font-medium text-foreground">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommitmentToQuality;
