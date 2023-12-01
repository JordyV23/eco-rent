import React, { useEffect } from "react";
import { Table } from "flowbite-react";
import { useDispatch } from "react-redux";
import { setSeleccion } from "../store";

export const SearchTable = ({ headers, data, keyField, event, showModal }) => {
  const dispatch = useDispatch();

  const seleccionarRegistro = (field, keyField) => {
    event(field[keyField]);
    dispatch(setSeleccion());
    showModal(false)
  };

  return (
    <div className="container overflow-x-auto mx-auto mt-5">
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
                No hay coincidencias
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
                    className="font-medium text-cyan-600 hover:text-light-accent"
                    onClick={() => seleccionarRegistro(field, keyField)}
                  >
                    Seleccionar
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
