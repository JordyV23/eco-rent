import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  disableCrear: false,
  disableBuscar: false,
  disableEliminar: true,
  disableEditar: true,
  disableLimpiar: true,
};

/**
 * Slice de Redux que gestiona el estado relacionado con las operaciones CRUD.
 * @type {Object}
 */
export const crudSlice = createSlice({
  name: "crud",
  initialState,
  reducers: {
    /**
     * Acción que habilita las opciones de edición y eliminación, deshabilita la creación, y habilita la limpieza.
     * @function
     * @param {Object} state - Estado actual del slice.
     */
    setSeleccion: (state) => {
      state.disableEditar = false;
      state.disableEliminar = false;
      state.disableBuscar = false;
      state.disableCrear = true;
      state.disableLimpiar = false;
    },
    /**
     * Acción que restablece el estado a su configuración inicial, habilitando la creación y deshabilitando las demás opciones.
     * @function
     * @param {Object} state - Estado actual del slice.
     */
    setReiniciar: (state) => {
      state.disableCrear = false;
      state.disableEditar = true;
      state.disableEliminar = true;
      state.disableLimpiar = true;
    },
  },
});

export const { setSeleccion, setReiniciar } = crudSlice.actions;
