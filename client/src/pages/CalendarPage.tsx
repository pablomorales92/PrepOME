import React from 'react';

// Componente para mostrar un evento del calendario
interface EventProps {
  date: string;
  title: string;
  description: string;
  location?: string;
  important?: boolean;
}

const CalendarEvent: React.FC<EventProps> = ({ date, title, description, location, important = false }) => {
  return (
    <div className={`border-l-4 ${important ? 'border-primary' : 'border-muted'} pl-4 py-4`}>
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
        <h3 className="font-heading font-bold text-xl">{title}</h3>
        <span className={`text-sm font-medium ${important ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'} px-3 py-1 rounded-full mb-2 md:mb-0`}>
          {date}
        </span>
      </div>
      <p className="text-muted-foreground mb-2">{description}</p>
      {location && (
        <p className="text-sm text-muted-foreground">
          <span className="font-medium">Ubicación:</span> {location}
        </p>
      )}
    </div>
  );
};

const CalendarPage: React.FC = () => {
  // Datos de los eventos
  const events = [
    {
      date: '15 de noviembre de 2024',
      title: 'Apertura de inscripciones',
      description: 'Comienza el periodo de inscripción para centros educativos y participantes individuales.',
      important: true
    },
    {
      date: '20 de diciembre de 2024',
      title: 'Cierre de inscripciones',
      description: 'Fecha límite para completar el registro de participantes.',
      important: true
    },
    {
      date: '25 de enero de 2025',
      title: 'Fase Local',
      description: 'Primera etapa de la competición. Se realiza en cada centro educativo.',
      location: 'Centros educativos participantes',
      important: true
    },
    {
      date: '15 de febrero de 2025',
      title: 'Publicación de resultados - Fase Local',
      description: 'Anuncio de los estudiantes clasificados para la siguiente fase.'
    },
    {
      date: '1 de marzo de 2025',
      title: 'Seminario preparatorio',
      description: 'Sesión de preparación para los clasificados a la fase autonómica.',
      location: 'Online (Zoom)'
    },
    {
      date: '15 de marzo de 2025',
      title: 'Fase Autonómica',
      description: 'Segunda etapa de la competición. Participan los clasificados de la fase local.',
      location: 'Sedes universitarias de cada comunidad autónoma',
      important: true
    },
    {
      date: '5 de abril de 2025',
      title: 'Publicación de resultados - Fase Autonómica',
      description: 'Anuncio de los estudiantes clasificados para la fase nacional.'
    },
    {
      date: '10-15 de mayo de 2025',
      title: 'Programa de preparación intensiva',
      description: 'Campamento de entrenamiento para los clasificados a la fase nacional.',
      location: 'Universidad de Granada'
    },
    {
      date: '20 de mayo de 2025',
      title: 'Fase Nacional',
      description: 'Final nacional con los mejores clasificados de cada comunidad autónoma.',
      location: 'Madrid, Facultad de Ciencias Matemáticas UCM',
      important: true
    },
    {
      date: '10 de junio de 2025',
      title: 'Anuncio de seleccionados para IMO',
      description: 'Publicación del equipo que representará a España en la Olimpiada Internacional de Matemáticas.'
    },
    {
      date: '5-15 de julio de 2025',
      title: 'Olimpiada Internacional de Matemáticas (IMO)',
      description: 'Competición internacional donde participan los mejores estudiantes seleccionados de cada país.',
      location: 'Por confirmar',
      important: true
    }
  ];

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="font-heading font-bold text-3xl text-foreground mb-6">Calendario Olimpiada Matemática 2024-2025</h1>
      
      <p className="text-muted-foreground mb-8">A continuación, presentamos las fechas más importantes relacionadas con la Olimpiada Matemática para el curso 2024-2025. Las fechas exactas pueden estar sujetas a pequeñas variaciones, que serán comunicadas con antelación.</p>
      
      <div className="grid grid-cols-1 gap-y-6 mb-12">
        {events.map((event, index) => (
          <CalendarEvent 
            key={index}
            date={event.date}
            title={event.title}
            description={event.description}
            location={event.location}
            important={event.important}
          />
        ))}
      </div>
      
      <div className="bg-muted p-6 rounded-lg">
        <h2 className="font-heading font-bold text-xl mb-4">Información adicional</h2>
        <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
          <li>Las fechas específicas de la Fase Local pueden variar ligeramente según la comunidad autónoma.</li>
          <li>La participación en la Fase Nacional está sujeta a los criterios de selección establecidos por cada comunidad autónoma.</li>
          <li>La selección para la Olimpiada Internacional se realizará entre los finalistas de la Fase Nacional.</li>
        </ul>
        <p className="text-muted-foreground">Para cualquier duda relacionada con las fechas y ubicaciones, por favor contacta con la organización a través del <a href="mailto:info@olimpiadamatematica.es" className="text-primary hover:underline">correo electrónico</a> o el formulario de contacto.</p>
      </div>
    </div>
  );
};

export default CalendarPage;