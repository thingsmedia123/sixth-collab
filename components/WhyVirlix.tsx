export default WhyVirlix;
function WhyVirlix() {
  const reasons = [
    {
      number: "01",
      title: "Creator Network",
      description:
        "We connect brands with creators who match their audience, niche, and campaign goals.",
    },
    {
      number: "02",
      title: "Strategy First",
      description:
        "Every campaign starts with a clear strategy designed to turn attention into measurable growth.",
    },
    {
      number: "03",
      title: "Creative That Converts",
      description:
        "We focus on authentic content that feels native to social platforms while keeping your brand memorable.",
    },
    {
      number: "04",
      title: "Results Driven",
      description:
        "From reach and engagement to conversions, we focus on metrics that actually matter to your business.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#09090B] px-6 py-24">
      <div className="absolute left-0 top-1/3 h-72 w-72 rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            WHY Sixth Collab
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
            We don't just create
            <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
              {" "}content.
            </span>
            <br />
            We create momentum.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Sixth Collab combines creators, strategy, and creative production
            to help ambitious brands stand out in the social-first world.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {reasons.map((reason) => (
            <div
              key={reason.number}
              className="group rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
            >
              <span className="text-sm font-bold text-cyan-400">
                {reason.number}
              </span>

              <h3 className="mt-6 text-2xl font-bold text-white">
                {reason.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                {reason.description}
              </p>

              <div className="mt-8 h-px w-12 bg-gradient-to-r from-purple-500 to-cyan-400 transition-all duration-300 group-hover:w-24" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}