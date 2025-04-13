import React from 'react';
import { Button } from '@/components/ui/button';
import { Book, FileText, Video, Download } from 'lucide-react';

interface MaterialItemProps {
  title: string;
  description: string;
  type: 'book' | 'file' | 'video';
  downloadLink?: string;
  viewLink?: string;
}

const MaterialItem: React.FC<MaterialItemProps> = ({ title, description, type, downloadLink, viewLink }) => {
  // Función para obtener el icono según el tipo de material
  const getIcon = () => {
    switch (type) {
      case 'book':
        return <Book className="h-8 w-8 text-primary" />;
      case 'file':
        return <FileText className="h-8 w-8 text-primary" />;
      case 'video':
        return <Video className="h-8 w-8 text-primary" />;
      default:
        return <FileText className="h-8 w-8 text-primary" />;
    }
  };

  return (
    <div className="flex items-start p-4 border rounded-lg bg-card">
      <div className="mr-4 mt-1">{getIcon()}</div>
      <div className="flex-1">
        <h3 className="font-heading font-bold text-lg mb-1">{title}</h3>
        <p className="text-muted-foreground text-sm mb-3">{description}</p>
        <div className="flex flex-wrap gap-2">
          {downloadLink && (
            <a href={downloadLink} download>
              <Button size="sm" variant="outline" className="text-xs flex items-center gap-1">
                <Download className="h-3 w-3" /> Descargar
              </Button>
            </a>
          )}
          {viewLink && (
            <a href={viewLink} target="_blank" rel="noopener noreferrer">
              <Button size="sm" variant="secondary" className="text-xs">
                Ver material
              </Button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const MaterialPage: React.FC = () => {
  // Datos de los materiales por categoría
  const problemSets = [
    {
      title: "Problemas Fase Local 1997-2024",
      description: "Colección de problemas propuestos en la fase local de los últimos años.",
      type: "file" as const,
      downloadLink: "https://github.com/Jerry-Master/PrepOME/raw/refs/heads/main/Material/localOME.zip",
      viewLink: "https://www.rsme.es/olimpiada-matematica-espanola/problemas-propuestos-y-resultados/"
    },
    {
      title: "Problemas Fase Autonómica 2019-2025",
      description: "Problemas de la fase autonómica con soluciones.",
      type: "file" as const,
      downloadLink: "https://github.com/Jerry-Master/PrepOME/raw/refs/heads/main/Material/OMA.zip",
      viewLink: "https://web.ujaen.es/eventos/omatematica/oma/oma6.php"
    },
    {
      title: "Colección histórica problemas OME 1993-2025",
      description: "Recopilación de problemas propuestos en las últimas ediciones de la Olimpiada Matemática Española.",
      type: "file" as const,
      downloadLink: "https://github.com/Jerry-Master/PrepOME/raw/refs/heads/main/Material/OME.zip",
      viewLink: "https://www.rsme.es/olimpiada-matematica-espanola/problemas-propuestos-y-resultados/"
    }
  ];

  const trainingMaterials = [
    {
      title: "Introducción a la Teoría de Números",
      description: "Manual básico sobre teoría de números, congruencias, primos y teorema de Fermat.",
      type: "book" as const,
      downloadLink: "#",
      viewLink: "#"
    },
    {
      title: "Geometría para olimpiadas",
      description: "Conceptos y técnicas avanzadas de geometría para resolución de problemas olímpicos.",
      type: "book" as const,
      downloadLink: "#",
      viewLink: "#"
    },
    {
      title: "Combinatoria y principio del palomar",
      description: "Técnicas de conteo, permutaciones, combinaciones y aplicaciones.",
      type: "book" as const,
      downloadLink: "#",
      viewLink: "#"
    }
  ];

  const videoLectures = [
    {
      title: "Técnicas de resolución de problemas olímpicos",
      description: "Serie de 10 vídeos con estrategias y enfoques para abordar problemas de olimpiada.",
      type: "video" as const,
      viewLink: "#"
    },
    {
      title: "Masterclass: Inducción Matemática",
      description: "Clase magistral sobre el principio de inducción y sus aplicaciones en olimpiadas.",
      type: "video" as const,
      viewLink: "#"
    },
    {
      title: "Webinarios preparatorios 2024",
      description: "Grabaciones de las sesiones de preparación realizadas para la OME 2024.",
      type: "video" as const,
      viewLink: "#"
    }
  ];

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="font-heading font-bold text-3xl text-foreground mb-6">Material de preparación</h1>
      
      <p className="text-muted-foreground mb-8">
        En esta sección encontrarás recursos y materiales para ayudarte a preparar la Olimpiada Matemática. Desde colecciones de problemas hasta guías teóricas y vídeos formativos, todos estos recursos están diseñados para desarrollar tu capacidad de resolución de problemas matemáticos.
      </p>
      
      {/* Problemas de olimpiadas */}
      <section className="mb-10">
        <h2 className="font-heading font-bold text-2xl text-foreground mb-4">Problemas de olimpiadas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {problemSets.map((item, index) => (
            <MaterialItem 
              key={index}
              title={item.title}
              description={item.description}
              type={item.type}
              downloadLink={item.downloadLink}
              viewLink={item.viewLink}
            />
          ))}
        </div>
      </section>
      
      {/* Material formativo */}
      <section className="mb-10">
        <h2 className="font-heading font-bold text-2xl text-foreground mb-4">Material formativo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {trainingMaterials.map((item, index) => (
            <MaterialItem 
              key={index}
              title={item.title}
              description={item.description}
              type={item.type}
              downloadLink={item.downloadLink}
              viewLink={item.viewLink}
            />
          ))}
        </div>
      </section>
      
      {/* Vídeos formativos */}
      <section className="mb-10">
        <h2 className="font-heading font-bold text-2xl text-foreground mb-4">Vídeos formativos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {videoLectures.map((item, index) => (
            <MaterialItem 
              key={index}
              title={item.title}
              description={item.description}
              type={item.type}
              viewLink={item.viewLink}
            />
          ))}
        </div>
      </section>
      
      {/* Recomendaciones */}
      <section className="bg-muted p-6 rounded-lg">
        <h2 className="font-heading font-bold text-xl mb-4">Recomendaciones para el estudio</h2>
        <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
          <li>Comienza con problemas de nivel básico e intermedio antes de abordar los más avanzados.</li>
          <li>Practica regularmente, dedicando tiempo específico cada semana a resolver problemas.</li>
          <li>No te desanimes si no puedes resolver un problema. Los problemas olímpicos están diseñados para ser desafiantes.</li>
          <li>Forma grupos de estudio con otros estudiantes interesados para discutir enfoques y soluciones.</li>
          <li>Revisa las soluciones de problemas anteriores para aprender nuevas técnicas y estrategias.</li>
        </ul>
        <p className="text-muted-foreground">
          Estos materiales se actualizan periódicamente. Si tienes sugerencias o necesitas recursos adicionales, no dudes en contactar con el equipo organizador.
        </p>
      </section>
    </div>
  );
};

export default MaterialPage;