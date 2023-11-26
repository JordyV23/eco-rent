import { useVehicles } from "../../hooks/vehicles/useVehicles";
import { cleanVehicle, setVehiculos } from "./vehiclesSlice";

const { getVehicles, insertVehicle, updateVehicle, deleteVehicle } =
  useVehicles();

export const startLoadingVehicles = () => {
  return async (dispatch) => {
    const vehicles = await getVehicles();
    dispatch(setVehiculos(vehicles));
  };
};

export const startInsertVehicle = (vehicle) => {
  return async (dispatch) => {

    await insertVehicle(vehicle);
    dispatch(startLoadingVehicles());
    dispatch(cleanVehicle());
  };
};

export const startUpdateVehicle = (vehicle) => {
  return async (dispatch) => {
    await updateVehicle(vehicle);
    dispatch(startLoadingVehicles());
    dispatch(cleanVehicle());
  };
};

export const startDeleteVehicle = (vehicle) => {
  return async (dispatch) => {
    await deleteVehicle(vehicle);
    dispatch(startLoadingVehicles());
    dispatch(cleanVehicle());
  };
};
