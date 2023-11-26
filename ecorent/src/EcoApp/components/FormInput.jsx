import React from "react";
import { useDispatch, useSelector } from "react-redux";

/**
 * Componente funcional que representa un campo de entrada de formulario.
 * @component
 * @param {object} props - Propiedades del componente.
 * @param {string} props.id - Identificador único del campo.
 * @param {string} props.label - Etiqueta del campo.
 * @param {string} props.type - Tipo de entrada del campo (text, number, etc.).
 * @param {function} props.func - Función a ejecutar al cambiar el valor del campo.
 * @returns {JSX.Element} Elemento JSX que representa un campo de entrada de formulario.
 * @example
 * // Ejemplo de uso en un formulario.
 * <FormInput id="nombre" label="Nombre" type="text" func={updateNombre} />
 */
export const FormInput = ({ id, label, type, func,stateName }) => {
  const valor = useSelector((state) => state[stateName])
  const dispatch = useDispatch();

  return (
    <div className="col-span-full sm:col-span-3">
      <label htmlFor={id} className="text-sm">
        {label}
      </label>
      <input
        // required
        id={id}
        type={type}
        placeholder={label}
        value={valor[id]}
        onChange={(e) => dispatch(func(e.target.value))}
        className="w-full rounded-md focus:ring border-gray-700 text-gray-900"
      />
    </div>
  );
};
