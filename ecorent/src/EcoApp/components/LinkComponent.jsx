import { Link } from "react-router-dom";

/**
 * Componente funcional que representa un enlace personalizado.
 * Este componente utiliza el componente Link de react-router-dom para crear un enlace.
 * @component
 * @param {object} props - Propiedades del componente.
 * @param {string} props.text - Texto del enlace.
 * @param {string} props.link - Ruta a la que apunta el enlace.
 * @example
 * Ejemplo de uso del componente en un contenedor principal.
 * <LinkComponent text="Usuarios" link="/users" />
 */
export const LinkComponent = ({ text, link }) => {
  return (
    <>
      {/* Enlace personalizado */}
      <Link
        to={link}
        className="hvr-grow items-center p-2 text-txt-light rounded-lg text-white text-xl font-semibold"
      >
        {/* Texto del enlace */}
        <span className="ml-3 whitespace-nowrap hover:text-red-600">{text}</span>
      </Link>
    </>
  );
};
