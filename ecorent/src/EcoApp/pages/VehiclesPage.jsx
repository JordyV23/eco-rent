import React, { useEffect } from "react";
import { CrudBtsn, CrudForm, GeneralTable, NavbarApp, UserOptions } from "../components";
import {
  vehiclesFields,
  vehiclesHeaders,
  vehiclesSliceFunctions,
} from "../utils";
import { useDispatch, useSelector } from "react-redux";
import { selectVehiculo, startLoadingVehicles } from "../store";
import { useCrudVehicles } from "../hooks/vehicles/useCrudVehicles";

export const VehiclesPage = () => {
  const dispatch = useDispatch();
  const { vehiculos } = useSelector((state) => state.vehiculos);
  const { insertar, actualizar, eliminar } = useCrudVehicles();

  useEffect(() => {
    dispatch(startLoadingVehicles());
  }, []);

  const setSelectedVehicle = (placa) => {
    const vehiculo = vehiculos.find((vehiculo) => vehiculo.placa === placa);
    dispatch(selectVehiculo(vehiculo));
  };

  return (
    <>
      <NavbarApp />
      <UserOptions />
      <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 ">
        <div className="col-span-full sm:col-span-4">
          <CrudForm stateName={"vehiculos"}  fields={vehiclesFields} slices={vehiclesSliceFunctions} />
        </div>
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

      <GeneralTable
        headers={vehiclesHeaders}
        storeName={"vehiculos"}
        event={setSelectedVehicle}
        keyField={"placa"}
      />
    </>
  );
};
