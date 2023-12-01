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
  isLoading: true,
  cedulaDisable: false,
  nombreDisable: false,
  apellidosDisable: false,
  fechaNacimientoDisable: false,
  passwordDisable: false,
  emailDisable: false,
  rolDisable: false,
};

/**
 * Slice de Redux que gestiona el estado relacionado con los usuarios.
 * @type {Object}
 */
export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    /**
     * Acción que actualiza la lista de usuarios en el estado.
     * @function
     * @param {Object} state - Estado actual del slice.
     * @param {Object} action - Objeto de acción con la propiedad 'payload' que contiene la nueva lista de usuarios.
     */
    setUsers: (state, action) => {
      state.isLoading = true;
      state.usuarios = action.payload;
      state.isLoading = false;
    },

    /**
     * Acción que selecciona un usuario y actualiza el estado con sus datos.
     * @function
     * @param {Object} state - Estado actual del slice.
     * @param {Object} action - Objeto de acción con el usuario seleccionado en la propiedad 'payload'.
     */
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

      state.cedulaDisabled = true;
      state.nombreDisabled = true;
      state.apellidosDisabled = true;
      state.fechaNacimientoDisabled = true;
    },

    /**
     * Acción que actualiza el campo 'cedula' en el estado.
     * @function
     * @param {Object} state - Estado actual del slice.
     * @param {Object} action - Objeto de acción con el nuevo valor de 'cedula'.
     */
    writeCedula: (state, action) => {
      state.cedula = action.payload;
    },

    /**
     * Acción que actualiza el campo 'nombre' en el estado.
     * @function
     * @param {Object} state - Estado actual del slice.
     * @param {Object} action - Objeto de acción con el nuevo valor de 'nombre'.
     */
    writeNombre: (state, action) => {
      state.nombre = action.payload;
    },

    /**
     * Acción que actualiza el campo 'apellidos' en el estado.
     * @function
     * @param {Object} state - Estado actual del slice.
     * @param {Object} action - Objeto de acción con el nuevo valor de 'apellidos'.
     */
    writeApellidos: (state, action) => {
      state.apellidos = action.payload;
    },

    /**
     * Acción que actualiza el campo 'fechaNacimiento' en el estado.
     * @function
     * @param {Object} state - Estado actual del slice.
     * @param {Object} action - Objeto de acción con el nuevo valor de 'fechaNacimiento'.
     */
    writeFechaNacimiento: (state, action) => {
      state.fechaNacimiento = action.payload;
    },

    /**
     * Acción que actualiza el campo 'email' en el estado.
     * @function
     * @param {Object} state - Estado actual del slice.
     * @param {Object} action - Objeto de acción con el nuevo valor de 'email'.
     */
    writeEmail: (state, action) => {
      state.email = action.payload;
    },

    /**
     * Acción que actualiza el campo 'rol' en el estado.
     * @function
     * @param {Object} state - Estado actual del slice.
     * @param {Object} action - Objeto de acción con el nuevo valor de 'rol'.
     */
    writeRol: (state, action) => {
      state.rol = action.payload;
    },

    /**
     * Acción que limpia todos los campos de usuario en el estado.
     * @function
     * @param {Object} state - Estado actual del slice.
     */
    cleanUser: (state) => {
      state.cedula = "";
      state.nombre = "";
      state.apellidos = "";
      state.fechaNacimiento = "";
      state.password = "";
      state.email = "";
      state.rol = "";

      state.cedulaDisabled = false;
      state.nombreDisabled = false;
      state.apellidosDisabled = false;
      state.fechaNacimientoDisabled = false;
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
