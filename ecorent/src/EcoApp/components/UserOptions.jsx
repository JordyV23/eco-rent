import React from "react";
import { LinkComponent } from "./LinkComponent";
import { Link } from "react-router-dom";

/**
 * Componente funcional que representa las opciones de usuario.
 * Este componente renderiza enlaces a diferentes secciones como "Usuarios", "Vehículos" y "Alquileres".
 * Utiliza el componente LinkComponent para los enlaces.
 * @component
 * @example
 * Ejemplo de uso del componente en un contenedor principal.
 * <UserOptions />
 */
export const UserOptions = () => {
  return (
    <>
      {/* Contenedor principal */}
      <div className="container mx-auto mt-8 text-center">
        {/* Enlace a la sección de Usuarios */}
        <LinkComponent ink={"users"} text={"Usuarios"} />

        {/* Enlace a la sección de Vehículos */}
        <LinkComponent ink={"vehicles"} text={"Vehículos"} />

        {/* Enlace a la sección de Alquileres */}
        <LinkComponent ink={"rental"} text={"Alquileres"} />
      </div>
    </>
  );
};
