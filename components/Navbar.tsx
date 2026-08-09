"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="mx-auto mt-5 flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl">
        <div className="flex items-center gap-3">
  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 via-violet-500 to-cyan-400 shadow-lg shadow-cyan-500/20">
    <span className="text-lg font-black text-white">V</span>
  </div>

  <div>
    <h1 className="text-xl font-extrabold tracking-tight text-white">
      Virlix
    </h1>
    <p className="-mt-1 text-xs uppercase tracking-[0.3em] text-cyan-400">
      MEDIA
    </p>
  </div>
</div>

       <nav className="hidden items-center gap-8 text-sm font-medium text-gray-300 md:flex">
  <a href="#home" className="transition hover:text-cyan-400">
    Home
  </a>

  <a href="#services" className="transition hover:text-cyan-400">
    Services
  </a>

  <a href="#about" className="transition hover:text-cyan-400">
    About
  </a>

  <a href="#contact" className="transition hover:text-cyan-400">
    Contact
  </a>
</nav>
        <button
          className="text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

   {menuOpen && (
  <div className="mx-4 rounded-xl bg-[#111] p-4 md:hidden">
    <a
      href="#home"
      onClick={() => setMenuOpen(false)}
      className="block py-2"
    >
      Home
    </a>

    <a
      href="#services"
      onClick={() => setMenuOpen(false)}
      className="block py-2"
    >
      Services
    </a>

    <a
      href="#about"
      onClick={() => setMenuOpen(false)}
      className="block py-2"
    >
      About
    </a>

    <a
      href="#contact"
      onClick={() => setMenuOpen(false)}
      className="block py-2"
    >
      Contact
    </a>
  </div>
      )}
    </header>
  );
}