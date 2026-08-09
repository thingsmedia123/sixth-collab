export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070708] px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#home" className="inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 via-violet-500 to-cyan-400 shadow-lg shadow-cyan-500/20">
                <span className="text-lg font-black text-white">V</span>
              </div>

              <div>
                <h2 className="text-xl font-extrabold text-white">
                  Virlix
                </h2>
                <p className="-mt-1 text-xs uppercase tracking-[0.3em] text-cyan-400">
                  Media
                </p>
              </div>
            </a>

            <p className="mt-6 max-w-md leading-7 text-gray-400">
              Influencer marketing, creative content, and social media
              strategies built to help ambitious brands grow.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-white">Navigation</h3>

            <div className="mt-5 space-y-3">
              <a
                href="#home"
                className="block text-gray-400 transition hover:text-cyan-400"
              >
                Home
              </a>

              <a
                href="#services"
                className="block text-gray-400 transition hover:text-cyan-400"
              >
                Services
              </a>

              <a
                href="#about"
                className="block text-gray-400 transition hover:text-cyan-400"
              >
                About
              </a>

              <a
                href="#contact"
                className="block text-gray-400 transition hover:text-cyan-400"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white">Services</h3>

            <div className="mt-5 space-y-3 text-gray-400">
              <p>Influencer Marketing</p>
              <p>Content Production</p>
              <p>Social Media Management</p>
              <p>Brand Strategy</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Virlix Media. All rights reserved.
          </p>

          <a
            href="#contact"
            className="text-gray-400 transition hover:text-cyan-400"
          >
            Start a Project →
          </a>
        </div>
      </div>
    </footer>
  );
}