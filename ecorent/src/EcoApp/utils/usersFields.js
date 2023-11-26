import {
  writeCedula,
  writeNombre,
  writeApellidos,
  writeFechaNacimiento,
  writeEmail,
  writeRol,
} from "../store/users/usersSlice";

export const usersHeaders = [
  "Cédula",
  "Nombre",
  "Apellidos",
  "Fecha de Nacimiento",
  "Contraseña",
  "Correo Electrónico",
  "Rol",
];

export const userSliceFunctions = [
  writeCedula,
  writeFechaNacimiento,
  writeNombre,
  writeApellidos,
  writeEmail,
  writeRol,
];

export const userFields = [
  {
    label: "Cédula",
    name: "cedula",
    type: "text",
  },
  {
    label: "Fecha de Nacimiento",
    name: "fechaNacimiento",
    type: "date",
  },
  {
    label: "Nombre",
    name: "nombre",
    type: "text",
  },
  {
    label: "Apellidos",
    name: "apellidos",
    type: "text",
  },
  {
    label: "Correo Electrónico",
    name: "email",
    type: "text",
  },
  {
    label: "Rol",
    name: "rol",
    type: "text",
  },
];
