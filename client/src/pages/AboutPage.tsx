import React from 'react';
import { ExternalLink } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="font-heading font-bold text-3xl text-foreground mb-6">¿Qué es la Olimpiada Matemática?</h1>
      
      <div className="prose max-w-none">
        <p className="text-muted-foreground mb-4">
          La <strong>Olimpiada Matemática Española (OME)</strong> es una competición de resolución de problemas matemáticos dirigida a estudiantes de bachillerato (y últimos cursos de la ESO). El objetivo principal es estimular el estudio de las matemáticas entre los jóvenes y servir como medio para la detección y el estímulo del talento matemático.
        </p>
        
        <p className="text-muted-foreground mb-4">
          Organizada por la <strong>Real Sociedad Matemática Española (RSME)</strong> desde 1964, la Olimpiada se estructura en diferentes fases:
        </p>
        
        <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-6">
          <li><strong>Fase Local:</strong> Permite la selección inicial de los participantes. Normalmente se clasifican tres estudiantes por provincia.</li>
          <li><strong>Fase Autonómica:</strong> Los clasificados localmente compiten a nivel de comunidad autónoma. En andalucía de los 24 participantes pasan a la siguiente fase los doce mejores.</li>
          <li><strong>Fase Nacional:</strong> Reúne a los mejores estudiantes de cada comunidad autónoma. Se otorgan 6 medallas de oro, 12 de plata y 18 de bronce.</li>
          <li><strong>Fase Internacional:</strong> Los ganadores nacionales representan a España en la Olimpiada Internacional de Matemáticas (IMO). Adicionalmente, los cuatro mejor clasificados en la IMO participarán en la Olimpiada Iberoamericana.</li>
        </ul>
        
        <h2 className="font-heading font-bold text-2xl text-foreground mt-8 mb-4">Historia</h2>
        <p className="text-muted-foreground mb-4">
          La primera Olimpiada Matemática Española se celebró en 1964, y desde entonces ha ido creciendo en importancia y participación. España participa en la Olimpiada Internacional de Matemáticas (IMO) desde 1983, habiendo obtenido importantes reconocimientos a lo largo de su historia.
        </p>
        <a 
          href="https://www.rsme.es/la-sociedad/quienes-somos/historia/"
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-sm text-primary hover:underline flex items-center"
        >
          Más información.
          <ExternalLink size={12} className="ml-1" />
        </a>
        
        <h2 className="font-heading font-bold text-2xl text-foreground mt-8 mb-4">¿Quién puede participar?</h2>
        <p className="text-muted-foreground mb-4">
          Pueden participar todos los estudiantes de Bachillerato matriculados en centros escolares españoles. Excepcionalmente, y previa solicitud justificada, se puede autorizar la participación de estudiantes de ESO con especial talento.
        </p>
        
        <h2 className="font-heading font-bold text-2xl text-foreground mt-8 mb-4">Tipos de problemas</h2>
        <p className="text-muted-foreground mb-4">
          Los problemas propuestos en la Olimpiada cubren áreas como:
        </p>
        <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-6">
          <li>Álgebra</li>
          <li>Combinatoria</li>
          <li>Geometría</li>
          <li>Teoría de números</li>
        </ul>
        <p className="text-muted-foreground mb-4">
          No requieren conocimientos avanzados de matemáticas más allá del currículo preuniversitario, pero sí exigen creatividad, capacidad de razonamiento y habilidad para resolver problemas no rutinarios.
        </p>
        
        <h2 id="beneficios" className="scroll-mt-20 font-heading font-bold text-2xl text-foreground mt-8 mb-4">Beneficios de participar</h2>
        <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-6">
          <li>Conectar con antiguos participantes que te puedan guiar y ayudar en tus primeros pasos universitarios.</li>
          <li>Orientar tu trayectoria universitaria hacia diferentes ámbitos. Como ves, los organizadores tenemos perfiles muy diversos, y conocemos a muchos otros antiguos olímpicos con trayectorias muy diferentes (tecnología, finanzas, salud, bioquímica etc.).</li>
          <li>Desarrollo de habilidades de resolución de problemas y pensamiento crítico.</li>
          <li>Contacto con otros estudiantes con intereses similares.</li>
          <li>Reconocimiento académico.</li>
          <li>Posibilidad de representar a España en competiciones internacionales.</li>
          <li>Acceso a becas y programas especiales de formación matemática.</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;