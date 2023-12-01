import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  vehiculos: [],
  placa: "",
  marca: "",
  detalle: "",
  color: "",
  disponible: "",
  isLoading: true,
  placaDisabled: false,
  marcaDisabled: false,
  detalleDisabled: false,
  colorDisabled: false,
  disponibleDisabled: false,
};

export const vehiclesSlice = createSlice({
  name: "vehiculos",
  initialState,
  reducers: {
    /**
     * Selecciona un vehículo y actualiza el estado con sus propiedades.
     * @function
     * @param {object} state - Estado actual del slice.
     * @param {object} action - Acción que contiene la información del vehículo seleccionado.
     */
    selectVehiculo: (state, action) => {
      const { placa, marca, detalle, color, disponible } = action.payload;
      state.placa = placa;
      state.marca = marca;
      state.detalle = detalle;
      state.color = color;
      state.disponible = disponible;

      state.placaDisabled = true;
    },

    /**
     * Establece la lista de vehículos en el estado.
     * @function
     * @param {object} state - Estado actual del slice.
     * @param {object} action - Acción que contiene la lista de vehículos.
     */
    setVehiculos: (state, action) => {
      state.isLoading = true;
      state.vehiculos = action.payload;
      state.isLoading = false;
    },

    /**
     * Actualiza el estado con la placa del vehículo.
     * @function
     * @param {object} state - Estado actual del slice.
     * @param {object} action - Acción que contiene la placa del vehículo.
     */
    writePlaca: (state, action) => {
      state.placa = action.payload;
    },

    /**
     * Actualiza el estado con la marca del vehículo.
     * @function
     * @param {object} state - Estado actual del slice.
     * @param {object} action - Acción que contiene la marca del vehículo.
     */
    writeMarca: (state, action) => {
      state.marca = action.payload;
    },

    /**
     * Actualiza el estado con el detalle del vehículo.
     * @function
     * @param {object} state - Estado actual del slice.
     * @param {object} action - Acción que contiene el detalle del vehículo.
     */
    writeDetalle: (state, action) => {
      state.detalle = action.payload;
    },

    /**
     * Actualiza el estado con el color del vehículo.
     * @function
     * @param {object} state - Estado actual del slice.
     * @param {object} action - Acción que contiene el color del vehículo.
     */
    writeColor: (state, action) => {
      state.color = action.payload;
    },

    /**
     * Actualiza el estado con la disponibilidad del vehículo.
     * @function
     * @param {object} state - Estado actual del slice.
     * @param {object} action - Acción que contiene la disponibilidad del vehículo.
     */
    writeDisponible: (state, action) => {
      state.disponible = action.payload;
    },

    /**
     * Limpia las propiedades del vehículo en el estado.
     * @function
     * @param {object} state - Estado actual del slice.
     */
    cleanVehicle: (state) => {
      state.placa = "";
      state.marca = "";
      state.detalle = "";
      state.color = "";
      state.disponible = "";

      state.placaDisabled = false;
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
