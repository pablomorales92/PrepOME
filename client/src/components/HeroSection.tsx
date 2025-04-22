import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section flex items-center justify-center" style={{
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://static.grupojoly.com/clip/6f82fbbd-1d41-457e-9a29-b179e7db3512_source-aspect-ratio_1600w_0.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '70vh'
    }}>
      <div className="text-center text-white px-4 md:px-0">
        <h1 className="font-heading font-bold text-3xl md:text-5xl mb-2 md:mb-4">¡Prepárate para la Olimpiada de Matemáticas!</h1>
        <p className="text-lg md:text-xl mb-6">Sesiones semanales de resolución de problemas para fortalecer tus habilidades.</p>
        <a href="#subscription">
          <Button 
            className="bg-[#f57c00] hover:bg-[#ffad42] text-white font-bold py-3 px-6 rounded-lg shadow-lg"
          >
            Mantente informado
          </Button>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
