import { configureStore } from "@reduxjs/toolkit";
import { usersSlice } from "./usersSlice";
import { crudSlice } from "./crudSlice";

/**
 * Configuración y creación del store de Redux utilizando @reduxjs/toolkit.
 * @type {Object}
 */
export const store = configureStore({
  reducer: {
    usuarios: usersSlice.reducer,
    crud: crudSlice.reducer,
  },
});
