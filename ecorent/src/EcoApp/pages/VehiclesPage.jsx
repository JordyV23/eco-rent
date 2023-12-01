import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CrudBtsn,
  CrudForm,
  GeneralTable,
  NavbarApp,
  UserOptions,
} from "../components";
import {
  vehiclesFields,
  vehiclesHeaders,
  vehiclesSliceFunctions,
} from "../utils";
import { selectVehiculo, startLoadingVehicles } from "../store";
import { useCrudVehicles } from "../hooks/vehicles/useCrudVehicles";

/**
 * Página principal para la gestión de vehículos.
 * @component
 * @returns {JSX.Element} Elemento JSX que representa la página de gestión de vehículos.
 */
export const VehiclesPage = () => {
  const dispatch = useDispatch();
  const { vehiculos } = useSelector((state) => state.vehiculos);
  const { insertar, actualizar, eliminar } = useCrudVehicles();

  // Cargar vehículos al cargar la página
  useEffect(() => {
    dispatch(startLoadingVehicles());
  }, [dispatch]);

  /**
   * Establece el vehículo seleccionado al hacer clic en una fila de la tabla.
   * @function
   * @param {string} placa - Placa del vehículo seleccionado.
   */
  const setSelectedVehicle = (placa) => {
    const vehiculo = vehiculos.find((vehiculo) => vehiculo.placa === placa);
    dispatch(selectVehiculo(vehiculo));
  };

  return (
    <>
      {/* Barra de navegación */}
      <NavbarApp />

      {/* Opciones de usuario */}
      <UserOptions />

      {/* Sección de formulario y botones de CRUD */}
      <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 ">
        {/* Formulario de CRUD */}
        <div className="col-span-full sm:col-span-4">
          <CrudForm
            stateName={"vehiculos"}
            fields={vehiclesFields}
            slices={vehiclesSliceFunctions}
          />
        </div>

        {/* Botones de CRUD */}
        <div className="col-span-full sm:col-span-2">
          <CrudBtsn
            insertar={insertar}
            actualizar={actualizar}
            eliminar={eliminar}
            headers={vehiclesHeaders}
            keyField={"placa"}
            event={setSelectedVehicle}
            storeName={"vehiculos"}
            filter1={"placa"}
            filter2={"marca"}
            placeholder={"Ingrese la placa del el vehículo o su marca"}
          />
        </div>
      </div>

      {/* Tabla general de vehículos */}
      <GeneralTable
        headers={vehiclesHeaders}
        storeName={"vehiculos"}
        event={setSelectedVehicle}
        keyField={"placa"}
      />
    </>
  );
};
