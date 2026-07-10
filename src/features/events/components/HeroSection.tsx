import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <header id="inicio" className="relative min-h-[600px] flex items-center bg-gray-900 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-40 bg-no-repeat scale-105"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1502224562085-639556652f33?q=80&w=1920')` }}
      />
      
      <div className="relative max-w-5xl mx-auto px-6 py-20 w-full z-10 text-white">
        <div className="inline-flex items-center gap-1.5 bg-[#00b074] text-white text-xs font-bold px-2.5 py-1 rounded-full mb-6 tracking-wide">
          <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
          PRÓXIMO EVENTO
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 leading-tight">
          Maratón <br />
          <span className="text-[#00b074]">Ciudad Verde</span> 2024
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl font-light leading-relaxed mb-10">
          Únete a la carrera más emblemática de la ciudad. Una ruta diseñada para superar tus límites en un entorno natural y urbano único.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-4 min-w-[180px]">
            <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Fecha / Hora</span>
            <span className="font-bold text-base text-white">15 de Septiembre</span>
          </div>
          <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-4 min-w-[180px]">
            <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Ubicación</span>
            <span className="font-bold text-base text-white">Parque Central</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <a href="#precios" className="bg-[#00b074] hover:bg-[#009662] text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2">
            Inscribirme Ahora 
            <span className="text-lg">→</span>
          </a>
          <button className="border border-white/30 bg-white/5 hover:bg-white/10 font-bold px-8 py-4 rounded-xl transition-all">
            Ver Reglamento
          </button>
        </div>
      </div>
    </header>
  );
};