import React, { useState } from "react";
import { useSelector } from "react-redux";
import { SearchTable } from "./SearchTable";

/**
 * Componente funcional que representa un modal de búsqueda.
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {string[]} props.headers - Lista de encabezados para la tabla modal.
 * @param {string} props.keyField - Campo clave para la tabla modal.
 * @param {Function} props.event - Función a ejecutar al interactuar con la tabla modal.
 * @param {string} props.storeName - Nombre del estado asociado al modal.
 * @param {string} props.filter1 - Primer campo a considerar en la búsqueda.
 * @param {string} props.filter2 - Segundo campo a considerar en la búsqueda.
 * @param {string} props.placeholder - Texto de marcador de posición para el campo de búsqueda.
 * @returns {JSX.Element} Elemento JSX que contiene un botón de búsqueda y un modal.
 * @example
 * // Ejemplo de uso en un componente funcional.
 * <ModalComponent
 *   headers={["Header1", "Header2"]}
 *   keyField="id"
 *   event={handleEvent}
 *   storeName="usuarios"
 *   filter1="nombre"
 *   filter2="apellido"
 *   placeholder="Buscar por nombre o apellido"
 * />
 */
export const ModalComponent = ({
  headers,
  keyField,
  event,
  storeName,
  filter1,
  filter2,
  placeholder,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [coincidencias, setCoincidencias] = useState([]);

  const store = useSelector((state) => state[storeName]);

  /**
   * Realiza una búsqueda en el estado global según el valor proporcionado.
   * @param {string} value - Valor a buscar en el estado global.
   */
  const buscar = (value) => {
    let val = store[storeName].filter(
      (obj) => obj[filter1].includes(value) || obj[filter2].includes(value)
    );

    setCoincidencias(val);
  };

  return (
    <>
      <button
        className="w-full rounded-xl p-3 text-white font-bold bg-light-accent hover:-translate-y-1 hover:scale-100 hover:bg-red-800 duration-300"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Buscar
      </button>
      {showModal && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Búsqueda</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <input
                    id="input"
                    type="text"
                    placeholder={placeholder}
                    onChange={(e) => buscar(e.target.value)}
                    className="w-full rounded-md focus:ring border-gray-700 text-gray-900"
                  />

                  <SearchTable
                    data={coincidencias}
                    headers={headers}
                    keyField={keyField}
                    event={event}
                    showModal={setShowModal}
                  />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
};
