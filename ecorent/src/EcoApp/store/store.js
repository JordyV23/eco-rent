import { configureStore } from "@reduxjs/toolkit";
import { usersSlice } from "./users/usersSlice";
import { crudSlice } from "./crudSlice";
import { vehiclesSlice } from "./vehicles/vehiclesSlice";
import { rentalsSlice } from "./rentals/rentalsSlice";

/**
 * Configuración y creación del store de Redux utilizando @reduxjs/toolkit.
 * @type {Object}
 */
export const store = configureStore({
  reducer: {
    usuarios: usersSlice.reducer,
    vehiculos: vehiclesSlice.reducer,
    rentas: rentalsSlice.reducer,
    crud: crudSlice.reducer,
  },
});
