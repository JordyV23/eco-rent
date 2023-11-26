import { useVehicles } from "../../hooks/vehicles/useVehicles";
import { cleanVehicle, setVehiculos } from "./vehiclesSlice";

const { getVehicles, insertVehicle, updateVehicle, deleteVehicle } =
  useVehicles();

/**
 * Inicia la carga de la lista de vehículos y actualiza el estado.
 * @returns {function} Función asincrónica que realiza la carga de vehículos.
 */
export const startLoadingVehicles = () => {
  return async (dispatch) => {
    const vehicles = await getVehicles();
    dispatch(setVehiculos(vehicles));
  };
};

/**
 * Inicia el proceso de inserción de un nuevo vehículo.
 * @param {object} vehicle - Objeto que representa el vehículo a insertar.
 * @returns {function} Función asincrónica que realiza la inserción del vehículo.
 */
export const startInsertVehicle = (vehicle) => {
  return async (dispatch) => {
    await insertVehicle(vehicle);
    dispatch(startLoadingVehicles());
    dispatch(cleanVehicle());
  };
};

/**
 * Inicia el proceso de actualización de un vehículo existente.
 * @param {object} vehicle - Objeto que representa el vehículo a actualizar.
 * @returns {function} Función asincrónica que realiza la actualización del vehículo.
 */
export const startUpdateVehicle = (vehicle) => {
  return async (dispatch) => {
    await updateVehicle(vehicle);
    dispatch(startLoadingVehicles());
    dispatch(cleanVehicle());
  };
};

/**
 * Inicia el proceso de eliminación de un vehículo existente.
 * @param {object} vehicle - Objeto que representa el vehículo a eliminar.
 * @returns {function} Función asincrónica que realiza la eliminación del vehículo.
 */
export const startDeleteVehicle = (vehicle) => {
  return async (dispatch) => {
    await deleteVehicle(vehicle);
    dispatch(startLoadingVehicles());
    dispatch(cleanVehicle());
  };
};
