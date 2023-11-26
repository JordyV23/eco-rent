import React from "react";
import { EcoBtn } from "./EcoBtn";

export const CrudBtsn = () => {

  

  return (
    <section className="mt-4 p-4 space-y-4 flex flex-col items-center">
      <div className="w-full">
        <EcoBtn text={"Crear"} action={() => {}} />
      </div>
      <div className="w-full">
        <EcoBtn text={"Editar"} action={() => {}} />
      </div>
      <div className="w-full">
        <EcoBtn text={"Buscar"} action={() => {}} />
      </div>
      <div className="w-full">
        <EcoBtn text={"Eliminar"} action={() => {}} />
      </div>
    </section>
  );
};
