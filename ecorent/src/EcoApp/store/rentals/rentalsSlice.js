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
    serRentals: (state, action) => {
      state.rentas = action.payload;
    },

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

    writeIdRenta: (state, action) => {
      state.idRenta = action.payload;
    },

    writeFechaRenta: (state, action) => {
      state.fechaRenta = action.payload;
    },

    writeFechaDevolucion: (state, action) => {
      state.fechaDevolucion = action.payload;
    },

    writeFechaVencimiento: (state, action) => {
      state.fechaVencimiento = action.payload;
    },

    writeCedulaRetal: (state, action) => {
      state.cedula = action.payload;
    },

    writePlacaRental: (state, action) => {
      state.placa = action.payload;
    },

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
  serRentals,
  selectRental,
  writeIdRenta,
  writeFechaRenta,
  writeFechaDevolucion,
  writeFechaVencimiento,
  writeCedulaRetal,
  writePlacaRental,
  cleanRental,
} = rentalsSlice.actions;
