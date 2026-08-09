export default About;
 function About() {
  return (
    <section
  id="about"
  className="relative overflow-hidden bg-[#09090B] px-6 py-24"
>
      <div className="absolute right-0 top-1/4 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
        {/* Left Side */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            ABOUT VIRLIX
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
            We turn
            <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
              {" "}attention
            </span>
            <br />
            into growth.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Virlix Media is an influencer marketing agency built for brands
            that want to stand out in the fast-moving world of social media.
          </p>

          <p className="mt-5 leading-7 text-gray-500">
            From finding the right creators to planning campaigns and
            producing engaging content, we bring strategy and creativity
            together to help brands build meaningful connections with their
            audiences.
          </p>

          <button className="mt-8 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 px-7 py-3 font-semibold text-white transition hover:scale-105">
            Work With Us →
          </button>
        </div>

        {/* Right Side */}
        <div className="grid grid-cols-2 gap-5">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl">
            <p className="text-4xl font-black text-purple-400">500+</p>
            <p className="mt-2 text-gray-400">Campaigns</p>
          </div>

          <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl">
            <p className="text-4xl font-black text-cyan-400">150+</p>
            <p className="mt-2 text-gray-400">Creators</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl">
            <p className="text-4xl font-black text-cyan-400">20M+</p>
            <p className="mt-2 text-gray-400">Reach</p>
          </div>

          <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl">
            <p className="text-4xl font-black text-purple-400">98%</p>
            <p className="mt-2 text-gray-400">Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
}