import React from "react";
import { EcoBtn } from "./EcoBtn";
import { useDispatch, useSelector } from "react-redux";
import { setReiniciar,cleanUser } from "../store";

export const CrudBtsn = ({ insertar, actualizar, eliminar, buscar }) => {
  const {
    disableCrear,
    disableEditar,
    disableEliminar,
    disableBuscar,
    disableLimpiar,
  } = useSelector((state) => state.crud);

  const dispatch = useDispatch();

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
        <EcoBtn text={"Buscar"} action={() => {}} disabled={disableBuscar} />
      </div>
      <div className="w-full">
        <EcoBtn
          text={"Limpiar"}
          action={() => {
            dispatch(cleanUser());
            dispatch(setReiniciar());
          }}
          disabled={disableLimpiar}
        />
      </div>
      <div className="w-full">
        <EcoBtn
          text={"Eliminar"}
          action={() => {
            eliminar();
          }}
          disabled={disableEliminar}
        />
      </div>
    </section>
  );
};
