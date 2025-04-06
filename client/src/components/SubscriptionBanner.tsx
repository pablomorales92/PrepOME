import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const SubscriptionBanner: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally handle the subscription logic
    // For now, we'll just reset the form
    setEmail('');
    alert('¡Gracias por suscribirte! Te mantendremos informado.');
  };

  return (
    <section id="subscription" className="bg-primary py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-white mb-2">Mantente informado</h2>
          <p className="text-white text-opacity-90">Recibe actualizaciones, materiales y fechas importantes de la Olimpiada Matemática</p>
        </div>
        
        <form className="flex flex-col md:flex-row gap-4 justify-center" onSubmit={handleSubmit}>
          <Input 
            type="email" 
            placeholder="Tu correo electrónico" 
            className="px-4 py-3 rounded-lg w-full md:w-96 border-0 focus:ring-2 focus:ring-[#f57c00]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button 
            type="submit" 
            className="bg-[#f57c00] hover:bg-[#ffad42] text-white font-bold py-3 px-6 rounded-lg shadow"
          >
            Suscribirme
          </Button>
        </form>
        <p className="text-center text-white text-opacity-70 text-sm mt-4">
          Nos comprometemos a proteger tus datos y no enviar spam.
        </p>
      </div>
    </section>
  );
};

export default SubscriptionBanner;
