// src/Home.jsx
import React from "react";
import logo from './assets/img/logo.png';

function Home() {
  const links = ["Inicio", "Mensajes", "Créditos", "Mi Perfil"];
  const active = "Mensajes"; // puedes cambiarlo según la pantalla activa

  return (
    <div className="flex flex-col min-h-screen  bg-gradient-to-br from-blue-300 via-green-200 to-blue-300">
      {/* Contenedor principal más ancho */}
      <div className="w-[95%] mx-auto mt-2 bg-white/70 rounded-2xl shadow-lg px-6 py-4">

        {/* Navbar */}
        <header className="w-full mb-6">
          <div className="bg-[#1f3247] rounded-2xl shadow-lg flex items-center gap-6 p-2">
            {/* Logo + brand */}
            <div className="flex items-center gap-3">
              <img src={logo} alt="logo" className="w-14 h-14 rounded-md" />
              <span className="text-white text-2xl font-bold">Conectao</span>
            </div>

            {/* Nav links */}
            <nav className="ml-8 flex gap-8 items-center">
              {links.map((link) => (
                <div key={link} className="relative">
                  <button
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
            <div className="ml-auto bg-white rounded-lg">
              <input
                type="text"
                placeholder="Buscar habilidades, mentores o categorías"
                className="px-3 py-2 w-80 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-200"
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

        {/* Contenido principal más amplio */}
        <div className="w-full flex gap-6">
          {/* Sidebar Filtros */}
          <aside className="flex-[1.2] bg-white rounded-xl shadow p-4 space-y-4">
            <h2 className="font-bold">Estoy buscando aprender...</h2>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 rounded-full">Diseño UX</span>
              <span className="px-3 py-1 bg-blue-100 rounded-full">Python</span>
              <span className="px-3 py-1 bg-blue-100 rounded-full">Marketing</span>
              <span className="px-3 py-1 bg-blue-100 rounded-full">Alemán</span>
            </div>

            <h2 className="font-bold mt-4">Modalidad</h2>
            <div className="flex gap-2">
              <button className="px-3 py-1 border rounded">Presencial</button>
              <button className="px-3 py-1 border rounded">Virtual</button>
              <button className="px-3 py-1 border rounded">Ambas</button>
            </div>

            <h2 className="font-bold mt-4">Rango de créditos</h2>
            <input type="range" min="10" max="50" className="w-full" />

            <h2 className="font-bold mt-4">Nivel de experiencia</h2>
            <div className="flex gap-2">
              <button className="px-3 py-1 border rounded">Básico</button>
              <button className="px-3 py-1 border rounded">Intermedio</button>
              <button className="px-3 py-1 border rounded">Avanzado</button>
            </div>
          </aside>

          {/* Card Central */}
<main className="flex-[2] bg-white rounded-xl shadow-lg p-6 overflow-y-auto max-h-[70vh] mx-4 scroll-smooth space-y-8">


  {/* MENTOR 1 */}
  <div className="flex flex-col bg-gray-50 p-4 rounded-xl shadow">
    <img
      src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=800&q=60"
      alt="mentor"
      className="rounded-xl w-full h-64 object-cover"
    />
    <div className="mt-4">
      <h3 className="font-bold text-lg">
        Jaime Brito, Ingeniero en Sistemas y especialista en Ciberseguridad
      </h3>
      <p className="text-gray-700 mt-2">
        Clases de Diseño UX, Python y Marketing Digital. <br />
        Te ayudo a aprender de manera práctica cómo crear experiencias digitales atractivas,
        programar en Python y dominar estrategias de marketing digital.
      </p>
      <p className="mt-2 font-semibold">Tarifa: 20 Créditos/Hora</p>
      <div className="flex gap-2 mt-2 flex-wrap">
        <span className="px-3 py-1 bg-gray-100 rounded-full">Diseño UX</span>
        <span className="px-3 py-1 bg-gray-100 rounded-full">Python</span>
        <span className="px-3 py-1 bg-gray-100 rounded-full">Marketing</span>
      </div>
      <div className="mt-2 text-yellow-500">⭐ 4.8/5</div>
    </div>
  </div>

  {/* MENTOR 2 */}
  <div className="flex flex-col bg-gray-50 p-4 rounded-xl shadow">
    <img
      src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=800&q=60"
      alt="mentor"
      className="rounded-xl w-full h-64 object-cover"
    />
    <div className="mt-4">
      <h3 className="font-bold text-lg">Lucía Hernández, Desarrolladora Full Stack</h3>
      <p className="text-gray-700 mt-2">
        Enseño React, Node.js y bases de datos modernas. <br />
        Aprende a construir aplicaciones web completas desde cero con un enfoque práctico.
      </p>
      <p className="mt-2 font-semibold">Tarifa: 25 Créditos/Hora</p>
      <div className="flex gap-2 mt-2 flex-wrap">
        <span className="px-3 py-1 bg-gray-100 rounded-full">React</span>
        <span className="px-3 py-1 bg-gray-100 rounded-full">Node.js</span>
        <span className="px-3 py-1 bg-gray-100 rounded-full">MongoDB</span>
      </div>
      <div className="mt-2 text-yellow-500">⭐ 4.9/5</div>
    </div>
  </div>

  {/* MENTOR 3 */}
  <div className="flex flex-col bg-gray-50 p-4 rounded-xl shadow">
    <img
      src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=60"
      alt="mentor"
      className="rounded-xl w-full h-64 object-cover"
    />
    <div className="mt-4">
      <h3 className="font-bold text-lg">Carlos Méndez, Analista de Datos</h3>
      <p className="text-gray-700 mt-2">
        Clases de Power BI, Excel avanzado y Python para análisis de datos. <br />
        Aprende a transformar datos en decisiones con proyectos reales.
      </p>
      <p className="mt-2 font-semibold">Tarifa: 18 Créditos/Hora</p>
      <div className="flex gap-2 mt-2 flex-wrap">
        <span className="px-3 py-1 bg-gray-100 rounded-full">Power BI</span>
        <span className="px-3 py-1 bg-gray-100 rounded-full">Excel</span>
        <span className="px-3 py-1 bg-gray-100 rounded-full">Python</span>
      </div>
      <div className="mt-2 text-yellow-500">⭐ 4.7/5</div>
    </div>
  </div>

  {/* MENTOR 4 */}
  <div className="flex flex-col bg-gray-50 p-4 rounded-xl shadow">
    <img
      src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=800&q=60"
      alt="mentor"
      className="rounded-xl w-full h-64 object-cover"
    />
    <div className="mt-4">
      <h3 className="font-bold text-lg">Valeria Torres, Diseñadora Gráfica</h3>
      <p className="text-gray-700 mt-2">
        Aprende a construir marcas sólidas y coherentes visualmente. <br />
        Te enseño Photoshop, Illustrator y estrategias de branding.
      </p>
      <p className="mt-2 font-semibold">Tarifa: 15 Créditos/Hora</p>
      <div className="flex gap-2 mt-2 flex-wrap">
        <span className="px-3 py-1 bg-gray-100 rounded-full">Branding</span>
        <span className="px-3 py-1 bg-gray-100 rounded-full">Photoshop</span>
        <span className="px-3 py-1 bg-gray-100 rounded-full">Illustrator</span>
      </div>
      <div className="mt-2 text-yellow-500">⭐ 4.6/5</div>
    </div>
  </div>

  {/* MENTOR 5 */}
  <div className="flex flex-col bg-gray-50 p-4 rounded-xl shadow">
    <img
      src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=60"
      alt="mentor"
      className="rounded-xl w-full h-64 object-cover"
    />
    <div className="mt-4">
      <h3 className="font-bold text-lg">Miguel Castillo, Experto en Cloud y DevOps</h3>
      <p className="text-gray-700 mt-2">
        Aprende AWS, Docker y Kubernetes desde cero. <br />
        Te enseño cómo desplegar aplicaciones escalables con buenas prácticas.
      </p>
      <p className="mt-2 font-semibold">Tarifa: 30 Créditos/Hora</p>
      <div className="flex gap-2 mt-2 flex-wrap">
        <span className="px-3 py-1 bg-gray-100 rounded-full">AWS</span>
        <span className="px-3 py-1 bg-gray-100 rounded-full">Docker</span>
        <span className="px-3 py-1 bg-gray-100 rounded-full">Kubernetes</span>
      </div>
      <div className="mt-2 text-yellow-500">⭐ 4.9/5</div>
    </div>
  </div>

</main>



          {/* Panel Derecho */}
          <aside className="flex-[1.2] bg-white rounded-xl shadow p-4">
            <h2 className="font-bold">Tus Créditos Actuales:</h2>
            <p className="text-2xl font-bold">245</p>
            <button className="bg-yellow-400 hover:bg-yellow-500 w-full mt-2 py-2 rounded-lg">
              Adquirir más créditos
            </button>

            <h2 className="font-bold mt-6">Tu Match del Día</h2>
            <div className="flex items-center gap-3 mt-2 p-2 border rounded-lg">
              <img
                src="https://via.placeholder.com/50"
                alt="match"
                className="rounded-full w-12 h-12"
              />
              <div>
                <p className="font-semibold">Derley Lopez</p>
                <span className="text-sm text-gray-600">Diseño Web</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default Home;
