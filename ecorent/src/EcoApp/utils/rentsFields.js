import {
  writeIdRenta,
  writeFechaRenta,
  writeFechaDevolucion,
  writeFechaVencimiento,
  writeCedulaRental,
  writePlacaRental,
} from "../store";

export const rentalsHeaders = [
    "Renta No.",
    "Fecha Renta",
    "Fecha Devolución",
    "Fecha Vencimiento",
    "Cédula",
    "Placa",
];

export const rentalSliceFunctions = [
    writeIdRenta,
    writeFechaRenta,
    writeFechaDevolucion,
    writeFechaVencimiento,
    writeCedulaRental,
    writePlacaRental,
];

export const rentalFields = [
    {
        label: "Renta No.",
        name: "idRenta",
        type: "number",
    },
    {
        label: "Fecha Renta",
        name: "fechaRenta",
        type: "date",
    },
    {
        label: "Fecha Devolución",
        name: "fechaDevolucion",
        type: "date",
    },
    {
        label: "Fecha Vencimiento",
        name: "fechaVencimiento",
        type: "date",
    },
    {
        label: "Cédula",
        name: "cedula",
        type: "text",
    },
    {
        label: "Placa",
        name: "placa",
        type: "text",
    },
]
