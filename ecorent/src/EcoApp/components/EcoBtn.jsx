/**
 * Componente funcional que representa un botón personalizado.
 * @component
 * @param {object} props - Propiedades del componente.
 * @param {string} props.text - Texto del botón.
 * @param {function} props.action - Función a ejecutar al hacer clic en el botón.
 * @param {boolean} props.disabled - Indica si el botón está deshabilitado.
 * @example
 * Ejemplo de uso del componente en un contenedor principal.
 * <EcoBtn text="Enviar" action={() => console.log("Botón clickeado")} disabled={false} />
 */
export const EcoBtn = ({ text, action, disabled }) => {
  return (
    <button
      disabled={disabled}
      className={
        "w-full rounded-xl p-3 text-white font-bold " +
        (!disabled
          ? "bg-light-accent hover:-translate-y-1 hover:scale-100 hover:bg-red-800 duration-300"
          : "bg-red-300")
      }
      onClick={action}
    >
      {/* Texto del botón */}
      {text}
    </button>
  );
};
