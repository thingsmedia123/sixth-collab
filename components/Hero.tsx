"use client";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#09090B] px-6 pt-32 md:pt-36">
      {/* Background Glow */}
      <div className="absolute left-10 top-32 h-72 w-72 rounded-full bg-purple-600/20 blur-[120px]" />
      <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        {/* Tagline */}
        <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-300">
          🚀 India's Next-Gen Influencer Marketing Agency
        </span>

        {/* Main Heading */}
        <h1 className="mt-8 text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
          We Make Brands
          <br />
          <span className="bg-gradient-to-r from-purple-500 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
            Impossible to Ignore.
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
          Sixth Collab connects ambitious brands with powerful creators,
          scroll-stopping content, and strategic campaigns that turn
          attention into real business growth.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 px-8 py-4 font-semibold text-white transition hover:scale-105"
          >
            Book Free Consultation
          </a>

          <a
            href="#portfolio"
            className="rounded-xl border border-white/10 bg-white/[0.03] px-8 py-4 font-semibold text-white transition hover:border-cyan-400/50"
          >
            View Our Work
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h2 className="text-4xl font-bold text-purple-400">500+</h2>
            <p className="mt-1 text-gray-400">Campaigns</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-cyan-400">150+</h2>
            <p className="mt-1 text-gray-400">Creators</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-purple-400">20M+</h2>
            <p className="mt-1 text-gray-400">Audience Reach</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-cyan-400">98%</h2>
            <p className="mt-1 text-gray-400">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
}