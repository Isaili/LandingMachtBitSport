import React from 'react';
import { TrendingUp } from 'lucide-react';

export default function HeroSection() {
  return (
    <header className="max-w-7xl mx-auto px-6 pt-12 pb-24 grid md:grid-cols-12 gap-12 items-center">
      <div className="md:col-span-6 space-y-6">
        <span className="bg-matchbit-light text-matchbit text-xs font-bold tracking-wider uppercase px-3 py-1 rounded">
          Gestión de Carreras
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Lleva tu carrera al <br />
          <span className="text-matchbit">siguiente nivel</span>
        </h1>
        <p className="text-slate-600 text-lg max-w-lg leading-relaxed">
          Desde el registro hasta la meta, gestiona cada detalle de tus eventos deportivos con tecnología de precisión y una interfaz diseñada para el alto rendimiento.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <button className="bg-matchbit hover:bg-matchbit-dark text-white font-medium px-8 py-3.5 rounded-lg transition-colors shadow-sm">
            Crear mi carrera
          </button>
          <button className="border-2 border-slate-200 hover:border-slate-300 text-slate-800 font-medium px-8 py-3.5 rounded-lg transition-colors">
            Ver Demo
          </button>
        </div>
      </div>

     
      <div className="md:col-span-6 relative flex justify-center">
        <div className="relative w-full max-w-lg aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-slate-100">
          <img 
            src="https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?q=80&w=1000" 
            alt="Maratón Matchbit" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute -bottom-6 -left-4 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-4">
          <div className="bg-matchbit-light p-3 rounded-lg text-matchbit">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Inscritos Hoy</p>
            <p className="text-2xl font-bold text-slate-900">+124</p>
          </div>
        </div>
      </div>
    </header>
  );
}