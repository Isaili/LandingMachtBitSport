
import React from 'react';
import HeroSection from '@/features/landing/components/HeroSection';
import BenefitsSection from '@/features/landing/components/BenefitsSection';
import ActiveRacesSection from '@/features/landing/components/ActiveRacesSection';
import ConfigSection from '@/features/landing/components/ConfigSection';
import FinalCTA from '@/features/landing/components/FinalCTA';

export default function MatchbitLanding() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased">
  
      <nav className="border-b border-slate-100 sticky top-0 bg-white z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold text-matchbit-dark flex items-center gap-1">
            Matchbit
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-matchbit">Inicio</a>
            <a href="#" className="hover:text-matchbit">Acerca de</a>
            <a href="#" className="hover:text-matchbit">Precios</a>
            <a href="#" className="border-b-2 border-matchbit py-1 text-matchbit font-semibold">Carreras</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-sm font-medium text-slate-700 hover:text-matchbit">Iniciar Sesión</button>
            <button className="bg-matchbit hover:bg-matchbit-dark text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors">
              Registrarse
            </button>
          </div>
        </div>
      </nav>

     
      <HeroSection />
      <BenefitsSection />
      <ActiveRacesSection />
      <ConfigSection />
      <FinalCTA />

      <footer className="border-t border-slate-100 bg-white text-sm text-slate-500 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-12 gap-8">
          <div className="col-span-2 md:col-span-4 space-y-3">
            <span className="text-lg font-bold text-matchbit-dark">Matchbit</span>
            <p className="text-xs text-slate-400 max-w-xs leading-relaxed">
              Elevando el estándar de la gestión deportiva con herramientas digitales de vanguardia.
            </p>
          </div>
          <div className="col-span-1 md:col-span-2 space-y-3">
            <h5 className="font-bold text-slate-800">Producto</h5>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-matchbit">Inicio</a></li>
              <li><a href="#" className="hover:text-matchbit">Acerca de</a></li>
              <li><a href="#" className="hover:text-matchbit">Precios</a></li>
            </ul>
          </div>
          <div className="col-span-1 md:col-span-2 space-y-3">
            <h5 className="font-bold text-slate-800">Legal</h5>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-matchbit">Privacidad</a></li>
              <li><a href="#" className="hover:text-matchbit">Términos</a></li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-4 space-y-3 md:text-right">
            <h5 className="font-bold text-slate-800">Contacto</h5>
            <p className="text-xs">contacto@matchbit.com</p>
            <p className="text-[11px] text-slate-400 pt-4">Powered by Cloudteen.io</p>
          </div>
        </div>
      </footer>

    </div>
  );
}