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
    <button className="w-full rounded-xl bg-light-accent p-3 text-white font-bold hover:-translate-y-1 hover:scale-100 hover:bg-red-800 duration-300" onClick={action}>
      {/* Texto del botón */}
      {text}
    </button>
  );
};
