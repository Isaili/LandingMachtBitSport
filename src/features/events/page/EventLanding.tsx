import React from 'react';

import { Navbar } from '../components/Navbar'; 
import { HeroSection } from '../components/HeroSection';
import { CategoriesSection } from '../components/CategoriesSection';
import { KitSection } from '../components/KitSection';
import { SponsorsSection } from '../components/SponsorsSection';
import { AdminPanel } from '../components/AdminPanel';
import { Footer } from '../components/Footer';

export const EventLanding: React.FC = () => {
  
  const isOrganizer = true; 

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#1e293b] font-sans antialiased">
      <Navbar />
      
      <main>
        <HeroSection />
        <CategoriesSection />
        <KitSection />
        <SponsorsSection />
      </main>

      <Footer />

      {/* Panel flotante exclusivo para organizadores */}
      {isOrganizer && <AdminPanel />}
    </div>
  );
};

export default EventLanding;