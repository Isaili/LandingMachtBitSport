import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';

export default function ActiveRacesSection() {
  const races = [
    {
      title: "Maratón Ciudad Verde",
      date: "24 OCT, 2024",
      location: "Madrid, España",
      image: "https://images.unsplash.com/photo-1502224562085-639556652f33?q=80&w=600",
      count: "+450"
    },
    {
      title: "10K Nocturna",
      date: "12 NOV, 2024",
      location: "Buenos Aires, AR",
      image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=600",
      count: "+1.2k"
    },
    {
      title: "Triatlón del Sol",
      date: "05 DIC, 2024",
      location: "Miami, USA",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=600",
      count: "+280"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="flex justify-between items-end mb-12">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-matchbit">Explora Eventos</span>
          <h2 className="text-3xl font-bold text-slate-900 mt-1">Carreras Activas</h2>
        </div>
        <a href="#" className="text-matchbit font-semibold flex items-center gap-1 hover:underline group text-sm">
          Ver todos los eventos <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {races.map((race, index) => (
          <div key={index} className="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-48 bg-slate-200">
              <img src={race.image} alt={race.title} className="w-full h-full object-cover" />
              <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[10px] font-bold px-2.5 py-1 rounded text-slate-700 uppercase tracking-wider">
                {race.date}
              </span>
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-lg font-bold text-slate-900">{race.title}</h3>
              <div className="flex items-center gap-1.5 text-sm text-slate-500">
                <MapPin className="w-4 h-4 text-slate-400" /> {race.location}
              </div>
              <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                <div className="flex -space-x-2 overflow-hidden items-center">
                  <div className="w-7 h-7 rounded-full bg-slate-300 border-2 border-white"></div>
                  <div className="w-7 h-7 rounded-full bg-slate-400 border-2 border-white"></div>
                  <span className="text-[11px] font-semibold text-slate-500 pl-3">{race.count}</span>
                </div>
                <a href="#" className="text-matchbit text-sm font-semibold hover:underline">Ver Landing</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}