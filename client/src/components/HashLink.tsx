import React from 'react';
import { useLocation } from 'wouter';

// Definimos la interfaz para nuestro componente HashLink
interface HashLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

// Componente para gestionar la navegación basada en hash compatible con GitHub Pages
const HashLink = ({ to, children, className, onClick }: HashLinkProps) => {
  const [_, navigate] = useLocation();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Si hay un manejador de eventos adicional, lo ejecutamos
    if (onClick) {
      onClick();
    }
    
    // Navegamos a la ruta utilizando el hash
    navigate(to);
  };

  return (
    <a 
      href={`#${to}`} 
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
};

export default HashLink;