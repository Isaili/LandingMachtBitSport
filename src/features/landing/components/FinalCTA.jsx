import React from 'react';

export default function FinalCTA() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 text-center">
      <div className="max-w-4xl mx-auto border border-slate-100 rounded-3xl p-12 md:p-16 shadow-xl space-y-6 bg-gradient-to-b from-white to-slate-50/50">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight max-w-xl mx-auto">
          ¿Listo para organizar tu próximo gran evento?
        </h2>
        <p className="text-slate-500 max-w-lg mx-auto text-sm leading-relaxed">
          Únete a cientos de organizadores que ya confían en la tecnología de Matchbit para sus carreras.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <button className="bg-[#006644] hover:bg-matchbit-dark text-white font-medium px-8 py-3.5 rounded-lg transition-colors shadow-sm">
            Empezar ahora
          </button>
          <button className="border border-slate-200 hover:bg-slate-50 text-slate-700 font-medium px-8 py-3.5 rounded-lg transition-colors">
            Hablar con un experto
          </button>
        </div>
      </div>
    </section>
  );
}