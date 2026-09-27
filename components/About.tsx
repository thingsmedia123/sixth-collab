export default function About() {
  return (
    <section
      id="about"
      className="bg-[#09090B] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              ABOUT SIXTH COLLAB
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
              We Turn
              <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
                {" "}Attention Into Growth.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              Sixth Collab is an influencer marketing and digital growth
              agency built for brands that want to stand out in a crowded
              digital world.
            </p>

            <p className="mt-5 leading-8 text-gray-400">
              From finding the right creators to producing scroll-stopping
              content and managing complete influencer campaigns, we handle
              the process from strategy to execution.
            </p>

            <p className="mt-5 leading-8 text-gray-400">
              Our goal is simple: create campaigns that people remember,
              communities that engage, and results that help businesses grow.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-block rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 px-7 py-3 font-semibold transition hover:scale-105"
            >
              Let's Work Together →
            </a>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl">
              <div className="text-4xl">🎯</div>
              <h3 className="mt-5 text-xl font-bold">
                Strategy First
              </h3>
              <p className="mt-3 leading-7 text-gray-400">
                Every campaign starts with clear goals, audience research
                and a focused strategy.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl">
              <div className="text-4xl">⚡</div>
              <h3 className="mt-5 text-xl font-bold">
                Creator Power
              </h3>
              <p className="mt-3 leading-7 text-gray-400">
                We connect brands with creators who genuinely influence
                their target audience.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl">
              <div className="text-4xl">📈</div>
              <h3 className="mt-5 text-xl font-bold">
                Real Growth
              </h3>
              <p className="mt-3 leading-7 text-gray-400">
                We focus on meaningful reach, engagement, conversions and
                long-term brand growth.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl">
              <div className="text-4xl">🚀</div>
              <h3 className="mt-5 text-xl font-bold">
                Built to Scale
              </h3>
              <p className="mt-3 leading-7 text-gray-400">
                Whether you're launching a product or scaling an existing
                brand, our campaigns are built to grow with you.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}