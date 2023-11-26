import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usuarios: [],
  cedula: "",
  nombre: "",
  apellidos: "",
  fechaNacimiento: "",
  password: "",
  email: "",
  rol: "",
  errorMessage: "",
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.usuarios = action.payload;
    },
    selectUser: (state, action) => {
      const {
        cedula,
        nombre,
        apellidos,
        fechaNacimiento,
        password,
        email,
        rol,
      } = action.payload;

      state.cedula = cedula;
      state.nombre = nombre;
      state.apellidos = apellidos;
      state.fechaNacimiento = fechaNacimiento;
      state.password = password;
      state.email = email;
      state.rol = rol;
    },

    writeCedula: (state, action) => {
      state.cedula = action.payload;
    },

    writeNombre: (state, action) => {
      state.nombre = action.payload;
    },

    writeApellidos: (state, action) => {
      state.apellidos = action.payload;
    },

    writeFechaNacimiento: (state, action) => {
      state.fechaNacimiento = action.payload;
    },

    writeEmail: (state, action) => {
      state.email = action.payload;
    },

    writeRol: (state, action) => {
      state.rol = action.payload;
    },

    cleanUser: (state) => {
      state.cedula = "";
      state.nombre = "";
      state.apellidos = "";
      state.fechaNacimiento = "";
      state.password = "";
      state.email = "";
      state.rol = "";
    },
  },
});

export const {
  selectUser,
  setUsers,
  writeCedula,
  writeNombre,
  writeApellidos,
  writeFechaNacimiento,
  writeEmail,
  writeRol,
  cleanUser,
} = usersSlice.actions;
