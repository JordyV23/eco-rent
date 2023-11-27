import { userRentals } from "../../hooks/";
import { cleanRental, setRentals } from "./rentalsSlice";

const { getRentals, insertRent, updateRent, deleteRent } = userRentals();

/**
 * Inicia la carga de la lista de alquileres y actualiza el estado.
 * @returns {function} Función asincrónica que realiza la carga de alquileres.
 */
export const startLoadingRentals = () => {
  return async (dispatch) => {
    const rentals = await getRentals();
    dispatch(setRentals(rentals));
  };
};

/**
 * Inicia el proceso de inserción de un nuevo alquiler.
 * @param {object} rent - Objeto que representa el alquiler a insertar.
 * @returns {function} Función asincrónica que realiza la inserción del alquiler.
 */
export const startInsertRent = (rent) => {
  return async (dispatch) => {
    await insertRent(rent);
    dispatch(startLoadingRentals());
    dispatch(cleanRental());
  };
};

/**
 * Inicia el proceso de actualización de un alquiler existente.
 * @param {object} rent - Objeto que representa el alquiler a actualizar.
 * @returns {function} Función asincrónica que realiza la actualización del alquiler.
 */
export const startUpdateRent = (rent) => {
  return async (dispatch) => {
    await updateRent(rent);
    dispatch(startLoadingRentals());
    dispatch(cleanRental());
  };
};

/**
 * Inicia el proceso de eliminación de un alquiler existente.
 * @param {object} rent - Objeto que representa el alquiler a eliminar.
 * @returns {function} Función asincrónica que realiza la eliminación del alquiler.
 */
export const startDeleteRent = (rent) => {
  return async (dispatch) => {
    await deleteRent(rent);
    dispatch(startLoadingRentals());
    dispatch(cleanRental());
  };
};
