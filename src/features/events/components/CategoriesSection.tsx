import React from 'react';
import { Check } from 'lucide-react';

interface PricingTier {
  id: string;
  name: string;
  price: string;
  level: 'Beginner' | 'Intermediate' | 'Pro';
  description: string;
  features: string[];
  isPopular?: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    id: '5k',
    name: '5K',
    price: '$25.00',
    level: 'Beginner',
    description: 'Ideal para quienes se inician en el running o buscan una carrera recreativa en familia.',
    features: ['Circuito Plano', 'Hidratación km 2.5', 'Kit básico de corredor']
  },
  {
    id: '10k',
    name: '10K',
    price: '$35.00',
    level: 'Intermediate',
    description: 'El balance perfecto entre resistencia y velocidad. Nuestra ruta más concurrida por corredores asiduos.',
    features: ['2 Puntos de Hidratación', 'Medalla especial finisher', 'Foto en meta gratuita'],
    isPopular: true
  },
  {
    id: '21k',
    name: '21K',
    price: '$45.00',
    level: 'Pro',
    description: 'Media maratón para corredores experimentados que buscan una nueva marca personal.',
    features: ['Clasificación Élite', 'Recovery Zone Pro', 'Seguimiento live App']
  }
];

export const CategoriesSection: React.FC = () => {
  return (
    <section id="precios" className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          Elige tu desafío
        </h2>
        <p className="mt-4 text-base text-gray-500">
          Contamos con distancias para todos los niveles, desde aficionados hasta corredores profesionales.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {pricingTiers.map((tier) => (
          <div 
            key={tier.id}
            className={`relative bg-white rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 ${
              tier.isPopular 
                ? 'border-2 border-[#00b074] shadow-xl md:-translate-y-2' 
                : 'border border-gray-100 shadow-sm hover:shadow-md'
            }`}
          >
            {tier.isPopular && (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#00b074] text-white text-[10px] font-extrabold tracking-widest uppercase px-4 py-1 rounded-full shadow-sm">
                MÁS POPULAR
              </span>
            )}
            
            <div>
              <span className={`text-xs font-bold tracking-widest uppercase ${tier.isPopular ? 'text-[#00b074]' : 'text-gray-400'}`}>
                {tier.level}
              </span>
              <h3 className="text-4xl font-black text-gray-900 mt-2">{tier.name}</h3>
              <div className="text-2xl font-bold text-gray-700 mt-1 mb-4">{tier.price}</div>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">{tier.description}</p>
              
              <div className="w-full h-[1px] bg-gray-100 my-6" />
              
              <ul className="space-y-3.5 mb-8">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="mt-0.5 w-5 h-5 bg-[#e6f7f1] rounded-full flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-[#00b074]" strokeWidth={3} />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button 
              className={`w-full py-3 px-4 rounded-xl font-bold text-sm tracking-wide transition-all ${
                tier.isPopular
                  ? 'bg-[#00b074] text-white hover:bg-[#009662] shadow-md'
                  : 'border-2 border-gray-200 text-gray-700 hover:border-gray-900'
              }`}
            >
              ELEGIR {tier.name}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};