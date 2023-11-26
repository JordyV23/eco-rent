import { useUsers } from "../../hooks/users/useUsers";
import { cleanUser, setUsers } from "./usersSlice";

const { getUsers, insertUser, updateUser, deleteUser } = useUsers();

/**
 * Acción asincrónica que carga los usuarios y actualiza el estado.
 * @function
 * @returns {Function} Función que realiza la carga de usuarios y actualiza el estado.
 */
export const startLoadingUsers = () => {
  return async (dispatch) => {
    const users = await getUsers();
    dispatch(setUsers(users));
  };
};

/**
 * Acción asincrónica que inserta un nuevo usuario y actualiza el estado.
 * @function
 * @param {Object} user - Objeto que representa los datos del nuevo usuario.
 * @returns {Function} Función que realiza la inserción del usuario, carga los usuarios actualizados y limpia los campos de usuario en el estado.
 */
export const startInsertUser = (user) => {
  return async (dispatch) => {
    await insertUser(user);
    dispatch(startLoadingUsers());
    dispatch(cleanUser());
  };
};

/**
 * Acción asincrónica que actualiza un usuario existente y actualiza el estado.
 * @function
 * @param {Object} user - Objeto que representa los datos del usuario a actualizar.
 * @returns {Function} Función que realiza la actualización del usuario, carga los usuarios actualizados y limpia los campos de usuario en el estado.
 */
export const startUpdateUser = (user) => {
  return async (dispatch) => {
    await updateUser(user);
    dispatch(startLoadingUsers());
    dispatch(cleanUser());
  };
};

/**
 * Acción asincrónica que elimina un usuario y actualiza el estado.
 * @function
 * @param {Object} user - Objeto que representa el usuario a eliminar.
 * @returns {Function} Función que realiza la eliminación del usuario, carga los usuarios actualizados y limpia los campos de usuario en el estado.
 */
export const startDeleteUser = (user) => {
  return async (dispatch) => {
    await deleteUser(user);
    dispatch(startLoadingUsers());
    dispatch(cleanUser());
  };
};
