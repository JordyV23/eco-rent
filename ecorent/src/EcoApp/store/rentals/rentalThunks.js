import { userRentals } from "../../hooks/";
import { cleanRental, serRentals } from "./rentalsSlice";

const { getRentals, insertRent, updateRent, deleteRent } = userRentals();

export const startLoadingRentals = () => {
  return async (dispatch) => {
    const rentals = await getRentals();
    dispatch(serRentals(rentals));
  };
};

export const startInsertRent = (rent) => {
    return async (dispatch) => {
        await insertRent(rent);
        dispatch(startLoadingRentals());
        dispatch(cleanRental());
    };
}

export const startUpdateRent = (rent) => {
    return async (dispatch) => {
        await updateRent(rent);
        dispatch(startLoadingRentals());
        dispatch(cleanRental());
    };
}

export const startDeletRent = (rent) => {
    return async (dispatch) => {
        await deleteRent(rent);
        dispatch(startLoadingRentals());
        dispatch(cleanRental());
    };
}
