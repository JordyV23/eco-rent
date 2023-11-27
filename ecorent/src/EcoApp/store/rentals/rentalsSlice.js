import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rentas: [],
  idRenta: "",
  fechaRenta: "",
  fechaDevolucion: "",
  fechaVencimiento: "",
  cedula: "",
  placa: "",
};

export const rentalsSlice = createSlice({
  name: "rentals",
  initialState,
  reducers: {
    /**
     * Establece las rentas en el estado.
     * @param {object} state - Estado actual.
     * @param {object} action - Acción con el payload que contiene las rentas.
     */
    setRentals: (state, action) => {
      state.rentas = action.payload;
    },

    /**
     * Selecciona una renta y actualiza el estado con sus datos.
     * @param {object} state - Estado actual.
     * @param {object} action - Acción con el payload que contiene los datos de la renta seleccionada.
     */
    selectRental: (state, action) => {
      const {
        idRenta,
        fechaRenta,
        fechaDevolucion,
        fechaVencimiento,
        cedula,
        placa,
      } = action.payload;

      state.idRenta = idRenta;
      state.fechaRenta = fechaRenta;
      state.fechaDevolucion = fechaDevolucion;
      state.fechaVencimiento = fechaVencimiento;
      state.cedula = cedula;
      state.placa = placa;
    },

    /**
     * Actualiza el ID de la renta en el estado.
     * @param {object} state - Estado actual.
     * @param {object} action - Acción con el payload que contiene el nuevo ID de la renta.
     */
    writeIdRenta: (state, action) => {
      state.idRenta = action.payload;
    },

    /**
     * Actualiza la fecha de renta en el estado.
     * @param {object} state - Estado actual.
     * @param {object} action - Acción con el payload que contiene la nueva fecha de renta.
     */
    writeFechaRenta: (state, action) => {
      state.fechaRenta = action.payload;
    },

    /**
     * Actualiza la fecha de devolución en el estado.
     * @param {object} state - Estado actual.
     * @param {object} action - Acción con el payload que contiene la nueva fecha de devolución.
     */
    writeFechaDevolucion: (state, action) => {
      state.fechaDevolucion = action.payload;
    },

    /**
     * Actualiza la fecha de vencimiento en el estado.
     * @param {object} state - Estado actual.
     * @param {object} action - Acción con el payload que contiene la nueva fecha de vencimiento.
     */
    writeFechaVencimiento: (state, action) => {
      state.fechaVencimiento = action.payload;
    },

    /**
     * Actualiza la cédula en el estado.
     * @param {object} state - Estado actual.
     * @param {object} action - Acción con el payload que contiene la nueva cédula.
     */
    writeCedulaRental: (state, action) => {
      state.cedula = action.payload;
    },

    /**
     * Actualiza la placa en el estado.
     * @param {object} state - Estado actual.
     * @param {object} action - Acción con el payload que contiene la nueva placa.
     */
    writePlacaRental: (state, action) => {
      state.placa = action.payload;
    },

    /**
     * Limpia los datos de la renta en el estado.
     * @param {object} state - Estado actual.
     */
    cleanRental: (state) => {
      state.idRenta = "";
      state.fechaRenta = "";
      state.fechaDevolucion = "";
      state.fechaVencimiento = "";
      state.cedula = "";
      state.placa = "";
    },
  },
});

export const {
  setRentals,
  selectRental,
  writeIdRenta,
  writeFechaRenta,
  writeFechaDevolucion,
  writeFechaVencimiento,
  writeCedulaRental,
  writePlacaRental,
  cleanRental,
} = rentalsSlice.actions;
