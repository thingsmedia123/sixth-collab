export default function Portfolio() {
  const projects = [
    {
      brand: "Fashion & Lifestyle",
      title: "Creator Campaign",
      result: "12M+",
      label: "Total Reach",
      icon: "👟",
    },
    {
      brand: "Technology",
      title: "Product Launch",
      result: "8.5M+",
      label: "Views Generated",
      icon: "🎧",
    },
    {
      brand: "Beauty & Personal Care",
      title: "UGC Growth Campaign",
      result: "15M+",
      label: "Campaign Reach",
      icon: "✨",
    },
  ];

  return (
    <section
      id="portfolio"
      className="bg-[#09090B] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">

        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            OUR WORK
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Campaigns That
            <span className="text-cyan-400"> Get Noticed.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            From creator campaigns to product launches, we build digital
            campaigns designed to capture attention and create measurable
            results.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40"
            >
              <div className="flex h-52 items-center justify-center bg-gradient-to-br from-purple-600/80 via-violet-600/70 to-cyan-500/80">
                <span className="text-7xl transition duration-300 group-hover:scale-110">
                  {project.icon}
                </span>
              </div>

              <div className="p-8">
                <p className="text-sm font-medium uppercase tracking-wider text-cyan-400">
                  {project.brand}
                </p>

                <h3 className="mt-3 text-2xl font-bold">
                  {project.title}
                </h3>

                <div className="mt-8">
                  <p className="text-4xl font-bold text-white">
                    {project.result}
                  </p>

                  <p className="mt-1 text-gray-400">
                    {project.label}
                  </p>
                </div>

                <div className="mt-8 h-px bg-white/10" />

                <p className="mt-5 text-gray-400">
                  Influencer strategy, creator partnerships and campaign
                  execution built for maximum impact.
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}