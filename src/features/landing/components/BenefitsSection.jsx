import React from 'react';
import { Layout, CreditCard, QrCode } from 'lucide-react';

export default function BenefitsSection() {
  return (
    <section className="bg-slate-50/50 border-t border-b border-slate-100 py-24">
      <div className="max-w-7xl mx-auto px-6 text-center space-y-4 mb-16">
        <h2 className="text-3xl font-bold text-slate-900">Todo lo que necesitas para el éxito</h2>
        <p className="text-slate-500 max-w-2xl mx-auto">
          Nuestra plataforma automatiza la parte compleja para que puedas enfocarte en la experiencia del deportista.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Tarjeta 1 */}
        <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow space-y-4">
          <div className="w-12 h-12 bg-matchbit-light rounded-lg flex items-center justify-center text-matchbit">
            <Layout className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Landing personalizada</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Creamos automáticamente un sitio web optimizado para tu carrera, con toda la información y branding de tu marca.
          </p>
        </div>

        {/* Tarjeta 2 */}
        <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow space-y-4">
          <div className="w-12 h-12 bg-matchbit-light rounded-lg flex items-center justify-center text-matchbit">
            <CreditCard className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Cobros Simplificados</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Pasarela de pagos integrada que permite registros rápidos y seguros, con reportes financieros en tiempo real.
          </p>
        </div>

        {/* Tarjeta 3 */}
        <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow space-y-4">
          <div className="w-12 h-12 bg-matchbit-light rounded-lg flex items-center justify-center text-matchbit">
            <QrCode className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Control de Logística</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Cada participante recibe un código único para gestión de kits, puntos de control y entrega de medallas.
          </p>
        </div>
      </div>
    </section>
  );
}