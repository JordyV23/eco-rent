import React from "react";
import { EcoBtn } from "./EcoBtn";
import { useDispatch, useSelector } from "react-redux";
import { setReiniciar, cleanUser, cleanVehicle } from "../store";
import { ModalComponent } from "./ModalComponent";

/**
 * Componente que muestra botones de CRUD (Crear, Leer, Actualizar, Eliminar) y otras operaciones
 * relacionadas con usuarios. Los botones están diseñados para interactuar con el estado global
 * de Redux.
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {Function} props.insertar - Función a ejecutar al hacer clic en el botón "Crear".
 * @param {Function} props.actualizar - Función a ejecutar al hacer clic en el botón "Editar".
 * @param {Function} props.eliminar - Función a ejecutar al hacer clic en el botón "Eliminar".
 * @param {Function} props.buscar - Función a ejecutar al hacer clic en el botón "Buscar".
 * @param {string[]} props.headers - Lista de encabezados para la tabla modal.
 * @param {string} props.keyField - Campo clave para la tabla modal.
 * @param {Function} props.event - Función a ejecutar al interactuar con la tabla modal.
 * @returns {JSX.Element} Elemento JSX que contiene botones para operaciones CRUD.
 * @example
 * // Ejemplo de uso en un componente funcional.
 * <CrudBtsn
 *   insertar={handleInsertar}
 *   actualizar={handleActualizar}
 *   eliminar={handleEliminar}
 *   headers={["Header1", "Header2"]}
 *   keyField="id"
 *   event={handleEvent}
 * />
 */
export const CrudBtsn = ({
  insertar,
  actualizar,
  eliminar,
  headers,
  keyField,
  event,
}) => {
  const {
    disableCrear,
    disableEditar,
    disableEliminar,
    disableBuscar,
    disableLimpiar,
  } = useSelector((state) => state.crud);

  const dispatch = useDispatch();

  const limpiar = () => {
    dispatch(cleanUser());
    dispatch(cleanVehicle());
    dispatch(setReiniciar());
  };

  return (
    <section className="mt-4 p-4 space-y-4 flex flex-col items-center">
      <div className="w-full">
        <EcoBtn
          text={"Crear"}
          action={() => {
            insertar();
            dispatch(setReiniciar());
          }}
          disabled={disableCrear}
        />
      </div>
      <div className="w-full">
        <EcoBtn
          text={"Editar"}
          action={() => {
            actualizar();
            dispatch(setReiniciar());
          }}
          disabled={disableEditar}
        />
      </div>
      <div className="w-full">
        <ModalComponent headers={headers} event={event} keyField={keyField} />
      </div>
      <div className="w-full">
        <EcoBtn
          text={"Limpiar"}
          action={() => {
            limpiar();
          }}
          disabled={disableLimpiar}
        />
      </div>
      <div className="w-full">
        <EcoBtn
          text={"Eliminar"}
          action={eliminar}
          disabled={disableEliminar}
        />
      </div>
    </section>
  );
};
