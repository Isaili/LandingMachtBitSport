"use client";

import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 px-6 py-4 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-extrabold text-xl tracking-tight text-[#00b074]">
            MARATÓN <span className="text-[#1e293b] font-normal">CIUDAD VERDE</span>
          </span>
          <span className="text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded font-mono uppercase tracking-wider">
            Powered by Matchbit
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 font-medium text-sm text-gray-600">
          <a href="#inicio" className="text-[#00b074] transition-colors">Inicio</a>
          <a href="#kit" className="hover:text-gray-900 transition-colors">Recorrido</a>
          <a href="#precios" className="hover:text-gray-900 transition-colors">Precios</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
            Iniciar Sesión
          </button>
          <button className="bg-[#00b074] hover:bg-[#009662] text-white text-sm font-bold px-4 py-2 rounded-lg transition-all shadow-sm">
            Registrarse
          </button>
        </div>
      </div>
    </nav>
  );
};