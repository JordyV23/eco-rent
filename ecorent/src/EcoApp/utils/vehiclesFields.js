import {
  writePlaca,
  writeMarca,
  writeDetalle,
  writeColor,
  writeDisponible,
} from "../store";

export const vehiclesHeaders = [
  "Placa",
  "Marca",
  "Detalle",
  "Color",
  "Disponible",
];

export const vehiclesSliceFunctions = [
  writePlaca,
  writeMarca,
  writeDetalle,
  writeColor,
  writeDisponible,
];

export const vehiclesFields = [
  {
    label: "Placa",
    name: "placa",
    type: "text",
  },
  {
    label: "Marca",
    name: "marca",
    type: "text",
  },
  {
    label: "Detalle",
    name: "detalle",
    type: "text",
  },
  {
    label: "Color",
    name: "color",
    type: "text",
  },
  {
    label: "Disponible",
    name: "disponible",
    type: "text",
  },
];
