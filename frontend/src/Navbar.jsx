// src/components/Navbar.jsx
import React from "react";

export default function Navbar({ active = "Mensajes" }) {
  const links = ["Inicio", "Mensajes", "Creditos", "Mi Perfil"];

  return (
    <header className="w-full">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top bar */}
        <div className="bg-[#1f3247] rounded-2xl shadow-lg flex items-center gap-6 p-4">
          {/* Logo + brand */}
          <div className="flex items-center gap-3">
            {/* si tu logo está en public/img/logo.png usa /img/logo.png */}
            <img src="/img/logo.png" alt="logo" className="w-10 h-10 rounded-md" />
            <span className="text-white text-2xl font-bold">Conectao</span>
          </div>

          {/* Nav links */}
          <nav className="ml-6 flex gap-6 items-center">
            {links.map((link) => (
              <div key={link} className="relative">
                <button
                  className={`px-1 py-1 text-sm font-medium transition ${
                    active === link ? "text-white" : "text-white/80 hover:text-white"
                  }`}
                >
                  {link}
                </button>

                {/* underline for active */
                active === link && (
                  <span className="absolute left-0 -bottom-3 w-full h-1 bg-orange-400 rounded-full"></span>
                )}
              </div>
            ))}
          </nav>

          {/* Right: search short */}
          <div className="ml-auto">
            <input
              type="text"
              placeholder="Buscar habilidades, mentores o categorías"
              className="px-3 py-2 w-80 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-200"
            />
          </div>
        </div>

        {/* White rounded search area that overlaps (like en la imagen) */}
        <div className="mt-4 -translate-y-6">
          <div className="bg-white rounded-xl p-4 shadow-md">
            <input
              className="w-full bg-transparent placeholder-gray-400 text-gray-700 px-4 py-3 rounded-lg"
              placeholder="Encuentra habilidades, mentores o categoría"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
