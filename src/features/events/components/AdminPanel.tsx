"use client";

import React, { useState } from 'react';
import { Globe, Copy, Settings } from 'lucide-react';

export const AdminPanel: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const publicUrl = "maraton-ciudad-verde.matchbit.run";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(publicUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="bg-white border-t border-gray-200 py-6 sticky bottom-0 z-40 shadow-[0_-8px_30px_rgb(0,0,0,0.04)]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        
        {/* Estado */}
        <div className="md:col-span-3 flex items-center gap-3">
          <div className="p-2 bg-gray-50 rounded-xl">
            <Globe className="w-5 h-5 text-gray-500" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">Estado de Publicación</h4>
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#00b074] mt-0.5">
              <span className="w-2 h-2 bg-[#00b074] rounded-full" />
              Página Activa
            </div>
          </div>
        </div>

        {/* URL Personalizada */}
        <div className="md:col-span-5">
          <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
            URL Personalizada
          </label>
          <div className="flex rounded-lg shadow-sm border border-gray-200 overflow-hidden text-sm bg-gray-50">
            <span className="px-3 py-2 bg-gray-100 text-gray-500 font-mono select-none border-r border-gray-200">https://</span>
            <input 
              type="text" 
              readOnly 
              value={publicUrl}
              className="bg-transparent px-3 py-2 flex-1 font-mono text-xs text-gray-700 outline-none"
            />
            <button 
              onClick={handleCopyLink}
              className="bg-white px-3 hover:bg-gray-50 text-gray-600 border-l border-gray-200 transition-colors flex items-center gap-1 text-xs font-semibold w-24 justify-center"
            >
              <Copy className="w-3.5 h-3.5" />
              {copied ? 'Copiado' : 'Copiar'}
            </button>
          </div>
        </div>

        {/* Social Preview */}
        <div className="md:col-span-4 flex items-center justify-between md:justify-end gap-6 border-t md:border-t-0 pt-4 md:pt-0 border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-gray-200 overflow-hidden shrink-0 aspect-square">
              <img src="https://images.unsplash.com/photo-1502224562085-639556652f33?q=80&w=100" alt="Preview" className="object-cover w-full h-full" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-gray-800 line-clamp-1">Maratón Ciudad Verde 20...</h5>
              <p className="text-[10px] text-gray-400">Imagen de previsualización activa</p>
            </div>
          </div>
          
          <button className="text-xs font-bold text-gray-600 hover:text-gray-900 border border-gray-200 rounded-lg px-3 py-2 flex items-center gap-1.5 bg-white transition-colors">
            <Settings className="w-3.5 h-3.5" />
            <span>Gestionar Meta Tags</span>
          </button>
        </div>

      </div>
    </section>
  );
};