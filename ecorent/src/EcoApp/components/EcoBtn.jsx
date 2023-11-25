import React from "react";

/**
 * Componente funcional que representa un botón personalizado.
 * @component
 * @param {object} props - Propiedades del componente.
 * @param {string} props.text - Texto del botón.
 * @param {function} props.action - Función a ejecutar al hacer clic en el botón.
 * @example
 * Ejemplo de uso del componente en un contenedor principal.
 * <EcoBtn text="Enviar" action={() => console.log("Botón clickeado")} />
 */
export const EcoBtn = ({ text, action }) => {
  return (
    <button className="w-full rounded-xl bg-light-accent p-3 text-white font-bold" onClick={action}>
      {/* Texto del botón */}
      {text}
    </button>
  );
};
