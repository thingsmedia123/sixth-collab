export default function Services() {
  const services = [
    {
      title: "Influencer Marketing",
      description:
        "Connect your brand with creators who drive real engagement and sales.",
      icon: "🚀",
    },
    {
      title: "Content Production",
      description:
        "High-quality reels, shorts, product videos and viral content.",
      icon: "🎥",
    },
    {
      title: "Social Media Management",
      description:
        "Grow your Instagram, YouTube and other social platforms consistently.",
      icon: "📱",
    },
    {
      title: "Brand Strategy",
      description:
        "Campaign planning, audience research and long-term brand growth.",
      icon: "📈",
    },
  ];

  return (
    <section
  id="services"
  className="bg-[#09090B] px-6 py-24"
>
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
            OUR SERVICES
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Everything You Need
            <span className="text-cyan-400"> To Go Viral.</span>
          </h2>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            We help brands build powerful digital presence through influencer
            marketing, creative content and social media growth.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/50"
            >
              <div className="text-5xl">{service.icon}</div>

              <h3 className="mt-6 text-2xl font-bold">
                {service.title}
              </h3>

              <p className="mt-4 text-gray-400 leading-7">
                {service.description}
              </p>

              <button className="mt-8 text-cyan-400 font-semibold group-hover:translate-x-2 transition-transform">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}