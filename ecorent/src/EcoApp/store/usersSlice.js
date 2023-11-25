import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "checking", //checking, not-authenticated, authenticated
  usuarios: [],
  cedula: null,
  nombre: null,
  apellidos: null,
  fechaNacimiento: null,
  password: null,
  correo: null,
  rol: null,
  errorMessage: null,
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
        correo,
        rol,
      } = action.payload;

      state.cedula = cedula;
      state.nombre = nombre;
      state.apellidos = apellidos;
      state.fechaNacimiento = fechaNacimiento;
      state.password = password;
      state.correo = correo;
      state.rol = rol;
    },
  },
});

export const { selectUser, setUsers } = usersSlice.actions;
