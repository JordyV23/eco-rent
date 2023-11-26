import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  disableCrear: false,
  disableBuscar: false,
  disableEliminar: true,
  disableEditar: true,
  disableLimpiar: true,
};

export const crudSlice = createSlice({
  name: "crud",
  initialState,
  reducers: {
    setSeleccion: (state) => {
      state.disableEditar = false;
      state.disableEliminar = false;
      state.disableBuscar = false;
      state.disableCrear = true;
      state.disableLimpiar = false;
    },
    setReiniciar: (state) => {
      state.disableCrear = false;
      state.disableEditar = true;
      state.disableEliminar = true;
      state.disableLimpiar = true;
    },
    // setCrear: (state, action) => {
    //   state.crear = action.payload;
    // },
    // setEditar: (state, action) => {
    //   state.editar = action.payload;
    // },
    // setEliminar: (state, action) => {
    //   state.eliminar = action.payload;
    // },
    // setBuscar: (state, action) => {
    //   state.buscar = action.payload;
    // },
  },
});

export const { setSeleccion,setReiniciar } = crudSlice.actions;
