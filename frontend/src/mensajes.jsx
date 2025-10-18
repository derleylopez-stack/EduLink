import React, { useState } from "react";
import logo from './assets/img/logo.png';

export default function ChatPage() {
  const [active, setActive] = useState("Inicio");
  const links = ["Inicio", "Mensajes", "Créditos", "Mi Perfil"];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-300 via-green-200 to-blue-300">
      <div className="w-[95%] mx-auto mt-2 mb-4 bg-white/70 rounded-2xl shadow-lg px-6 py-4 flex flex-col h-[calc(100vh-1rem)]">
        {/* NAVBAR */}
        <header className="w-full">
          <div className="bg-[#1f3247] rounded-2xl shadow-lg flex flex-wrap items-center gap-6 p-2">
            {/* Logo + brand */}
            <div className="flex items-center gap-3">
              <img src={logo} alt="logo" className="w-14 h-14 rounded-md" />
              <span className="text-white text-2xl font-bold">Conectao</span>
            </div>

            {/* Nav links */}
            <nav className="ml-8 flex gap-6 items-center flex-wrap">
              {links.map((link) => (
                <div key={link} className="relative">
                  <button
                    onClick={() => setActive(link)}
                    className={`px-2 py-1 text-base font-medium transition ${
                      active === link ? "text-white" : "text-white/80 hover:text-white"
                    }`}
                  >
                    {link}
                  </button>
                  {active === link && (
                    <span className="absolute left-0 -bottom-3 w-full h-1 bg-orange-400 rounded-full"></span>
                  )}
                </div>
              ))}
            </nav>

            {/* Search */}
            <div className="ml-auto bg-white rounded-lg mt-2 sm:mt-0">
              <input
                type="text"
                placeholder="Buscar habilidades, mentores o categorías"
                className="px-3 py-2 w-64 sm:w-80 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-200"
              />
            </div>
          </div>

          {/* Search bar debajo */}
          <div className="mt-4 -translate-y-4">
            <div className="bg-white rounded-xl p-2 shadow-md">
              <input
                className="w-full bg-transparent placeholder-gray-400 text-gray-700 px-4 py-3 rounded-lg"
                placeholder="Encuentra habilidades, mentores o categoría"
              />
            </div>
          </div>
        </header>

        {/* CONTENEDOR PRINCIPAL DEL CHAT */}
        <div className="flex flex-1 gap-5 bg-white/70 rounded-3xl shadow-xl p-6 mt-2 overflow-hidden flex-col lg:flex-row">
          {/* Panel izquierdo: listado de chats */}
          <div className="w-full lg:w-[28%] bg-white rounded-2xl shadow-md p-5 flex flex-col h-full">
            <h2 className="text-lg font-semibold mb-2">Mensajes</h2>
            <h3 className="text-base font-medium mb-4">Listado de Chats</h3>

            <div className="flex flex-col gap-4 flex-1 overflow-y-auto pr-2">
              {/* Chat 1 */}
              <div className="p-4 bg-gray-50 rounded-xl shadow-sm hover:bg-gray-100 transition">
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="perfil"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-sm">
                      Jaime Brito, Ingeniero de Sistemas
                    </p>
                    <p className="text-sm text-gray-600">
                      Hola! Tengo una app en mente y quiero mejorar cómo se siente la navegación.
                    </p>
                  </div>
                </div>
                <button className="bg-orange-500 text-white text-xs font-semibold py-1 px-2 rounded-md shadow w-1/3">
                  Sesión por confirmar
                </button>
              </div>

              {/* Chat 2 */}
              <div className="p-4 bg-gray-50 rounded-xl shadow-sm hover:bg-gray-100 transition">
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src="https://randomuser.me/api/portraits/men/10.jpg"
                    alt="perfil"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-sm">Derley López, Diseño Web</p>
                    <p className="text-sm text-gray-600">
                      Tengo una app en mente y quiero mejorar cómo se siente la navegación.
                    </p>
                  </div>
                </div>
                <button className="bg-orange-500 text-white text-xs font-semibold py-1 px-2 rounded-md shadow w-1/3">
                  Sesión por confirmar
                </button>
              </div>
            </div>
          </div>

          {/* Panel derecho: conversación */}
          <div className="w-full lg:w-[72%] bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between h-full">
            {/* Cabecera */}
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="perfil"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-semibold">Jaime Brito, Ingeniero de Sistemas</p>
                <p className="text-green-600 text-sm font-medium">● En línea</p>
              </div>
            </div>

            <hr className="mb-4" />

            {/* Mensajes */}
            <div className="flex flex-col gap-4 overflow-y-auto flex-1">
              <div className="self-start bg-yellow-100 rounded-xl p-3 max-w-[85%] shadow-sm">
                <p className="text-sm">
                  ¡Has hecho Match con Jaime Brito! Puedes coordinar tu primera sesión.
                </p>
              </div>
              <div className="self-start bg-gray-100 rounded-xl p-3 max-w-[85%] shadow-sm">
                <p className="text-sm">
                  ¡Hola! Gracias por hacer match conmigo. Trabajo en diseño UX/UI y me encanta ayudar con ideas.
                </p>
              </div>
              <div className="self-end bg-blue-500 text-white rounded-xl p-3 max-w-[85%] shadow-sm">
                <p className="text-sm">
                  Hola! Tengo una app en mente y quiero mejorar cómo se siente la navegación.
                </p>
              </div>
            </div>

            {/* Input de mensaje */}
            <div className="mt-4 flex gap-2">
              <input
                type="text"
                placeholder="Escribe tu mensaje..."
                className="w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 flex items-center justify-center shadow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12l15-9v18l-15-9z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
