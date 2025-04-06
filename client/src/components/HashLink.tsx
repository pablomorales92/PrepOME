import React from 'react';
import { useLocation } from 'wouter';

// Componente para manejar enlaces internos utilizando el hash
interface HashLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const HashLink: React.FC<HashLinkProps> = ({ to, children, className = '', onClick }) => {
  const [location, setLocation] = useLocation();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Si es un enlace interno (no comienza con http o https), actualiza el hash
    if (!to.startsWith('http')) {
      // Si es un enlace de ancla (comienza con # y no es una ruta), mantener el formato
      if (to.startsWith('#') && !to.startsWith('#/')) {
        // Es un ancla dentro de la página (ej: #footer)
        window.location.hash = to;
      } else {
        // Si es un enlace de ruta
        if (to === "/") {
          // Si es la página principal
          window.location.hash = "";
          setLocation("/");
        } else if (to.startsWith('/')) {
          // Si es una ruta interna, añadir # al inicio
          window.location.hash = to;
          setLocation(to);
        } else {
          // Otros casos (por ejemplo, rutas relativas)
          window.location.hash = `/${to}`;
          setLocation(`/${to}`);
        }
      }
    } else {
      // Si es un enlace externo, comportamiento normal
      window.open(to, '_blank', 'noopener,noreferrer');
    }
    
    // Ejecutar el onClick adicional si existe
    if (onClick) onClick();
  };
  
  return (
    <a 
      href={to.startsWith('http') ? to : `#${to.startsWith('/') ? to : `/${to}`}`}
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
};

export default HashLink;