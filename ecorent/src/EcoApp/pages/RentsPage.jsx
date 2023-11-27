import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  NavbarApp,
  UserOptions,
  GeneralTable,
  CrudForm,
  CrudBtsn,
} from "../components/";
import { rentalFields, rentalsHeaders, rentalSliceFunctions } from "../utils";
import { startLoadingRentals, selectRental } from "../store";
import { useCrudRentals } from "../hooks";

export const RentsPage = () => {
  const dispatch = useDispatch();
  const { rentas } = useSelector((state) => state.rentas);
  const { insertar, actualizar, eliminar } = useCrudRentals();

  const setSelectedRental = (idRenta) => {
    const renta = rentas.find((renta) => renta.idRenta === idRenta);
    dispatch(selectRental(renta));
  };

  useEffect(() => {
    dispatch(startLoadingRentals());
  }, [dispatch]);

  return (
    <>
      <NavbarApp />
      <UserOptions />
      {/* Sección de formulario y botones de CRUD */}
      <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 ">
        {/* Formulario de CRUD */}
        <div className="col-span-full sm:col-span-4">
          <CrudForm
            stateName={"rentas"}
            fields={rentalFields}
            slices={rentalSliceFunctions}
          />
        </div>

        {/* Botones de CRUD */}
        <div className="col-span-full sm:col-span-2">
          <CrudBtsn
            insertar={insertar}
            actualizar={actualizar}
            eliminar={eliminar}
            buscar={() => {
              console.log("buscar");
            }}
          />
        </div>
      </div>

      {/* Tabla general de usuarios */}
      <GeneralTable
        headers={rentalsHeaders}
        storeName={"rentas"}
        event={setSelectedRental}
        keyField={"idRenta"}
      />
    </>
  );
};
