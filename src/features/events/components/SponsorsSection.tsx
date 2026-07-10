import React from 'react';

export const SponsorsSection: React.FC = () => {
  return (
    <section className="bg-gray-50/50 py-20 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <span className="text-[11px] font-extrabold tracking-widest text-[#00b074] uppercase block mb-12">
          Alianzas Estratégicas / Patrocinadores
        </span>
        
        <div className="mb-12">
          <h5 className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-6">Main Sponsors</h5>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {['Global Partner Logo', 'Eco Energy Logo', 'Bank Partner Logo', 'Health Corp Logo'].map((sponsor, idx) => (
              <div key={idx} className="bg-white border border-gray-100 rounded-xl p-6 flex items-center justify-center font-medium text-xs text-gray-400 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all min-h-[70px] shadow-sm">
                {sponsor}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h5 className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-6">Official Partners</h5>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((partner) => (
              <div key={partner} className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center text-[11px] text-gray-300 font-medium min-h-[50px]">
                Partner Logo
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};