export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#060608] px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl">

        {/* Main Footer */}
        <div className="grid gap-12 lg:grid-cols-12">

          {/* Brand / About */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 via-fuchsia-500 to-cyan-400 shadow-lg shadow-cyan-500/10">
                <span className="text-xl font-black">V</span>
              </div>

              <div>
                <h2 className="text-xl font-extrabold tracking-tight">
                  SIXTH
                </h2>

                <p className="-mt-1 text-[10px] font-semibold uppercase tracking-[0.35em] text-cyan-400">
                  COLLAB
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-400">
              Sixth Collab is a next-generation media and influencer
              marketing agency built for brands that want to stand out in a
              crowded digital world.
            </p>

            <p className="mt-4 max-w-xl text-base leading-8 text-gray-400">
              We connect ambitious brands with the right creators, develop
              scroll-stopping content, and build strategic campaigns that
              turn attention into meaningful growth.
            </p>

            <div className="mt-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Our Mission
              </p>

              <p className="mt-2 text-gray-300">
                Create influence. Build communities. Grow brands.
              </p>
            </div>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Company
            </h3>

            <div className="mt-6 space-y-4 text-gray-400">
              <a
                href="#about"
                className="block transition hover:text-cyan-400"
              >
                About Us
              </a>

              <a
                href="#services"
                className="block transition hover:text-cyan-400"
              >
                Services
              </a>

              <a
                href="#portfolio"
                className="block transition hover:text-cyan-400"
              >
                Our Work
              </a>

              <a
                href="#contact"
                className="block transition hover:text-cyan-400"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Services
            </h3>

            <div className="mt-6 space-y-4 text-gray-400">
              <p>Influencer Marketing</p>
              <p>Content Production</p>
              <p>Social Media Management</p>
              <p>Brand Strategy</p>
              <p>Creator Campaigns</p>
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Get In Touch
            </h3>

            <div className="mt-6 space-y-5">

              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500">
                  Email
                </p>

                <a
                  href="mailto:hello@virlixmedia.com"
                  className="mt-1 block text-gray-300 transition hover:text-cyan-400"
                >
                 info@sixthcollab.in
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500">
                  Phone
                </p>

                <a
                  href="tel:+910000000000"
                  className="mt-1 block text-gray-300 transition hover:text-cyan-400"
                >
                  +91 91013  38288
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500">
                  Location
                </p>

                <p className="mt-1 text-gray-300">
                  India,Assam
                </p>
              </div>

              <a
                href="#contact"
                className="inline-flex rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 px-5 py-3 font-semibold text-white transition hover:scale-105"
              >
                Start a Project →
              </a>
            </div>
          </div>
        </div>

        {/* Social / CTA */}
        <div className="mt-14 rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:flex md:items-center md:justify-between">
          <div>
            <p className="text-lg font-semibold">
              Ready to make your brand impossible to ignore?
            </p>

            <p className="mt-1 text-sm text-gray-500">
              Let's create something people can't stop talking about.
            </p>
          </div>

          <a
            href="#contact"
            className="mt-5 inline-block text-sm font-semibold text-cyan-400 transition hover:text-cyan-300 md:mt-0"
          >
            Book a Free Consultation →
          </a>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Virlix Media. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-6 text-sm text-gray-500">
            <a
              href="/privacy"
              className="transition hover:text-cyan-400"
            >
              Privacy Policy
            </a>

            <a
              href="/terms"
              className="transition hover:text-cyan-400"
            >
              Terms & Conditions
            </a>

            <a
              href="https://www.instagram.com/sixthcollab/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-cyan-400"
            >
              Instagram
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}