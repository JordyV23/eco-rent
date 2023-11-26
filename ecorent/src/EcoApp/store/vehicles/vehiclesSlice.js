import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  vehiculos: [],
  placa: "",
  marca: "",
  detalle: "",
  color: "",
  disponible: "",
};

export const vehiclesSlice = createSlice({
  name: "vehiculos",
  initialState,
  reducers: {
    selectVehiculo: (state, action) => {
      const { placa, marca, detalle, color, disponible } = action.payload;
      state.placa = placa;
      state.marca = marca;
      state.detalle = detalle;
      state.color = color;
      state.disponible = disponible;
    },
    setVehiculos: (state, action) => {
      state.vehiculos = action.payload;
    },
    writePlaca: (state, action) => {
      state.placa = action.payload;
    },
    writeMarca: (state, action) => {
      state.marca = action.payload;
    },
    writeDetalle: (state, action) => {
      state.detalle = action.payload;
    },
    writeColor: (state, action) => {
      state.color = action.payload;
    },
    writeDisponible: (state, action) => {
      state.disponible = action.payload;
    },
    cleanVehicle: (state) => {
      state.placa = "";
      state.marca = "";
      state.detalle = "";
      state.color = "";
      state.disponible = "";
    },
  },
});

export const {
  selectVehiculo,
  setVehiculos,
  writePlaca,
  writeMarca,
  writeDetalle,
  writeColor,
  writeDisponible,
  cleanVehicle,
} = vehiclesSlice.actions;
