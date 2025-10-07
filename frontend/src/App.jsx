import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/app.css'
import logo from './assets/img/logo.png';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-300 via-green-200 to-blue-300">
      <div className="bg-white/0 backdrop-blur-md p-10 rounded-2xl shadow-lg w-full max-w-xl text-center">
        
        {/* Logo */}
        <div className="mb-6">
          <div className="w-50 h-32 mx-auto  flex items-center justify-center">
            {<img src={logo} alt="logo" className="w-45 h-30"/>}
            
          </div>
        </div>

        {/* Título */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Inicia Sesión
        </h2>

        {/* Formulario */}
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Correo Electrónico"
            className="w-full bg-white/70 px-4 py-3 border border-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="w-full bg-white/70 px-4 py-3  border border-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-100"
          />

          <button
            type="submit"
            className="w-full bg-yellow-400 text-white font-semibold py-3 rounded-lg hover:bg-yellow-500 transition"
          >
            Ingresar
          </button>
        </form>

        {/* Olvidaste contraseña */}
        <p className="text-sm text-gray-600 mt-3 cursor-pointer hover:underline">
          ¿Olvidaste la contraseña?
        </p>

        {/* Botones de redes */}
        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <button className="flex items-center justify-center gap-2 w-full bg-white border rounded-lg py-2 hover:bg-gray-100 transition">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5"/>
            <span className="text-gray-700">Inicia sesión con Google</span>
          </button>

          <button className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition">
            <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" alt="Facebook" className="w-5 h-5"/>
            <span>Continuar con Facebook</span>
          </button>
        </div>

        {/* Registro */}
        <p className="text-gray-700 text-sm mt-6">
          ¿No tienes cuenta?{" "}
          <a href="#" className="text-blue-600 font-medium hover:underline">
            Regístrate aquí
          </a>
        </p>
      </div>
    </div>
      
    </>
  )
}

export default App
