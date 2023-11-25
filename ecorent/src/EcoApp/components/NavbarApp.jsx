import React from "react";
import { Navbar } from "flowbite-react";

/**
 * Componente funcional que representa la barra de navegación de la aplicación.
 * Utiliza el componente Navbar de Flowbite React para crear una barra de navegación.
 * @component
 * @example
 * Ejemplo de uso del componente en un contenedor principal.
 * <NavbarApp />
 */
export const NavbarApp = () => {
  return (
    <Navbar fluid className="bg-light-accent p-6 sticky top-0 z-50">
      {/* Marca de la barra de navegación */}
      <Navbar.Brand>
        <img alt="Economylogo" className="mr-3 h-6 sm:h-9" src="/ecorent.svg" />
      </Navbar.Brand>

      {/* Contenido de la barra de navegación */}
      <Navbar.Collapse className="text-white">
        {/* Enlace para cerrar sesión */}
        <Navbar.Link className="text-white p-2 text-base" href="/gpto/home">
          <p>Cerrar Sesión</p>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};
