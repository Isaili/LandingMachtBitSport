import React from 'react';
import { Shirt, Cpu, Award, Box } from 'lucide-react';

export const KitSection: React.FC = () => {
  return (
    <section id="kit" className="bg-white border-y border-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Columna Izquierda */}
        <div className="lg:col-span-7 space-y-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl mb-3">
              El Kit del Corredor
            </h2>
            <p className="text-gray-500 leading-relaxed max-w-xl">
              Todo corredor recibirá un paquete premium con elementos de alta tecnología para asegurar la mejor experiencia el día de la carrera.
            </p>
          </div>

          <div className="space-y-6">
            {[
              { icon: Shirt, title: 'Camiseta Técnica', desc: 'Tejido Pro-Breath de alta tecnología, ultraligero y con protección UV para máximo rendimiento y transpirabilidad.' },
              { icon: Cpu, title: 'Chip de Cronometraje', desc: 'Sistema MyLaps de precisión olímpica para seguimiento en tiempo real y resultados inmediatos en la App Matchbit.' },
              { icon: Award, title: 'Medalla Conmemorativa', desc: 'Diseño exclusivo 2024 en aleación premium para cada finisher, grabada con el icónico skyline de Ciudad Verde.' }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 p-4 rounded-xl hover:bg-gray-50/70 transition-all">
                <div className="w-12 h-12 rounded-full bg-[#e6f7f1] flex items-center justify-center shrink-0 text-[#00b074]">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-base">{item.title}</h4>
                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Columna Derecha */}
        <div className="lg:col-span-5 bg-gray-50 border-2 border-dashed border-gray-200 rounded-3xl p-10 text-center min-h-[380px] flex flex-col items-center justify-center">
          <div className="w-16 h-16 bg-[#e6f7f1] rounded-2xl flex items-center justify-center text-[#00b074] mb-4 shadow-sm">
            <Box className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-1">Visualización Próximamente</h3>
          <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
            Estamos ultimando los detalles de diseño del kit oficial. ¡El lanzamiento será en agosto!
          </p>
        </div>

      </div>
    </section>
  );
};