import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function ConfigSection() {
  const features = [
    { title: "Landing personalizada", desc: "Sube tus fotos, logo y descripción. Nosotros generamos el resto." },
    { title: "Pasarela de pagos", desc: "Recibe pagos de cualquier parte del mundo con comisiones competitivas." },
    { title: "Gestión de inscritos", desc: "Dashboard completo para ver el progreso de las inscripciones." },
    { title: "Control de logística", desc: "Herramientas digitales para el día del evento." },
    { title: "Precio por inscripción (folio)", desc: "Transparencia total: solo pagas por corredor inscrito. Sin costos fijos mensuales.", highlight: true }
  ];

  return (
    <section className="bg-[#111315] text-white py-24 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-16 items-center">
        
     
        <div className="md:col-span-6 space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Configura tu carrera en minutos
          </h2>
          
          <ul className="space-y-6">
            {features.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-matchbit mt-0.5 shrink-0" />
                <div>
                  <h4 className={`font-semibold ${feat.highlight ? 'text-matchbit' : 'text-slate-200'}`}>
                    {feat.title}
                  </h4>
                  <p className="text-zinc-400 text-sm mt-0.5">{feat.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

     
        <div className="md:col-span-6 bg-zinc-800/40 p-6 md:p-8 rounded-2xl border border-zinc-700/50 backdrop-blur-sm">
          <div className="bg-white text-slate-900 rounded-xl overflow-hidden shadow-xl">
            <div className="bg-slate-50 px-4 py-3 border-b border-slate-100 flex items-center justify-between">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
              </div>
              <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase">MATCHBIT DASHBOARD</span>
              <div className="w-4"></div>
            </div>
            <div className="p-6 space-y-6">
              <div className="flex justify-between items-center">
                <h4 className="font-bold text-slate-800">Resumen de Evento</h4>
                <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Activo</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Ventas</span>
                  <p className="text-xl font-bold text-slate-800 mt-1">$12,450</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Corredores</span>
                  <p className="text-xl font-bold text-slate-800 mt-1">342</p>
                </div>
              </div>
              <div className="space-y-2 pt-2">
                <div className="h-2 bg-slate-100 rounded-full w-full"></div>
                <div className="h-2 bg-slate-100 rounded-full w-4/5"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}