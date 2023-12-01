import { Table } from "flowbite-react";
import { useSelector, useDispatch } from "react-redux";
import { setSeleccion } from "../store";

/**
 * Componente que representa una tabla general con funcionalidad de selección de registros.
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {Array} props.headers - Array que contiene los encabezados de la tabla.
 * @param {string} props.storeName - Nombre del slice del store que contiene los datos a mostrar.
 * @param {Function} props.event - Función a ejecutar al seleccionar un registro.
 * @param {string} props.keyField - Campo clave que sirve como identificador único para cada fila.
 * @returns {JSX.Element} Elemento JSX que representa una tabla con funcionalidad de selección.
 * @example
 * // Ejemplo de uso en un componente funcional.
 * <GeneralTable headers={["ID", "Nombre", "Apellido"]} storeName="usuarios" event={handleSeleccion} keyField="id" />
 */
export const GeneralTable = ({ headers, storeName, event, keyField }) => {
  const storeElement = useSelector((state) => state[storeName]);
  const data = storeElement[storeName];
  const dispatch = useDispatch();

  /**
   * Función que ejecuta la acción de selección de un registro y desencadena el evento asociado.
   * @function
   * @param {Object} field - Objeto que representa un registro de la tabla.
   * @param {string} keyField - Campo clave que sirve como identificador único para cada fila.
   */
  const seleccionarRegistro = (field, keyField) => {
    event(field[keyField]);
    dispatch(setSeleccion());
  };

  return (
    <div className="container overflow-x-auto mx-auto">
      <Table striped>
        <Table.Head>
          {headers.map((header) => (
            <Table.HeadCell key={header}>{header}</Table.HeadCell>
          ))}
          <Table.HeadCell>
            <span className="sr-only">Editar</span>
          </Table.HeadCell>
        </Table.Head>

        <Table.Body className="divide-y">
          {data.length === 0 ? ( // Verifica si data está vacío
            <Table.Row className="text-center">
              <Table.Cell colSpan={headers.length + 1}>
                No hay data para mostrar
              </Table.Cell>
            </Table.Row>
          ) : (
            // Renderizar filas de tabla según los datos del store
            data.map((field) => (
              <Table.Row key={field[keyField]}>
                {/* Renderizar celdas de tabla según las propiedades del usuario */}
                {Object.values(field).map((value, index) => (
                  <Table.Cell key={index}>{value}</Table.Cell>
                ))}
                <Table.Cell>
                  <button
                    className="font-medium text-cyan-600 "
                    onClick={() => seleccionarRegistro(field, keyField)}
                  >
                    Editar
                  </button>
                </Table.Cell>
              </Table.Row>
            ))
          )}
        </Table.Body>
      </Table>
    </div>
  );
};
