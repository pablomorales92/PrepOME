import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const SubscriptionBanner: React.FC = () => {
  return (
    <section id="subscription" className="scroll-mt-20 bg-primary py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-white mb-2">Mantente informado</h2>
          <p className="text-white text-opacity-90">Recibe actualizaciones, materiales y fechas importantes de la preparación de olimpiadas.</p>
        </div>

        <form
          className="flex flex-col md:flex-row gap-4 justify-center validate"
          action="https://gmail.us2.list-manage.com/subscribe/post?u=1fcc04006e8055ccd913fda88&amp;id=9004e6385b&amp;f_id=00ddabe0f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          target="_blank"
        >
          <Input
            type="email"
            name="EMAIL"
            placeholder="Tu correo electrónico"
            className="px-4 py-3 rounded-lg w-full md:w-96 border-0 focus:ring-2 focus:ring-[#f57c00]"
            required
          />
          {/* Campo oculto anti-spam */}
          <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
            <input
              type="text"
              name="b_1fcc04006e8055ccd913fda88_9004e6385b"
              tabIndex={-1}
              defaultValue=""
            />
          </div>
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
