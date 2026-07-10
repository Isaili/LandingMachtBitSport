import React from 'react';
import { Share2, Send } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111827] text-gray-400 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          
          <div className="md:col-span-4 space-y-4">
            <span className="font-extrabold text-lg text-white tracking-tight block">
              Matchbit <span className="text-[#00b074] font-normal text-xs block tracking-widest mt-0.5">BEYOND THE FINISH LINE</span>
            </span>
            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              La plataforma líder en gestión deportiva para eventos de alto impacto y experiencias atléticas memorables.
            </p>
            <div className="flex gap-3 pt-2">
              <button type="button" className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 text-white flex items-center justify-center transition-colors">
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-white text-xs font-bold tracking-wider uppercase mb-4">Evento</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#inicio" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#kit" className="hover:text-white transition-colors">Acerca de</a></li>
              <li><a href="#kit" className="hover:text-white transition-colors">Recorrido</a></li>
              <li><a href="#precios" className="hover:text-white transition-colors">Precios</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-white text-xs font-bold tracking-wider uppercase mb-4">Soporte</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#" className="hover:text-white transition-colors">Preguntas Frecuentes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacidad</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-4">
            <h4 className="text-white text-xs font-bold tracking-wider uppercase mb-1">Mantente al tanto</h4>
            <p className="text-[11px] text-gray-500">Suscríbete para recibir noticias y avisos de última hora.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Tu email" 
                className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#00b074] flex-1"
              />
              <button type="button" className="bg-[#00b074] hover:bg-[#009662] text-white p-2 rounded-lg transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800/60 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500">
          <p>© 2024 Maratón Ciudad Verde. Gestionado por Matchbit.</p>
          <p className="flex items-center gap-1">
            Desarrollado con precisión cinética 
            <span className="font-bold text-gray-400 border border-gray-800 px-1 rounded ml-1 text-[10px]">MATCHBIT V2.4</span>
          </p>
        </div>
      </div>
    </footer>
  );
};