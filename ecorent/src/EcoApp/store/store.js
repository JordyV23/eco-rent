import { configureStore } from "@reduxjs/toolkit";
import { usersSlice } from "./usersSlice";
import { crudSlice } from "./crudSlice";

export const store = configureStore({
  reducer: {
    usuarios: usersSlice.reducer,
    crud: crudSlice.reducer,
  },
});
