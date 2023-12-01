import { useDispatch, useSelector } from "react-redux";
import {
  startInsertUser,
  startUpdateUser,
  startDeleteUser,
} from "../../store/users/userThunks";

/**
 * Hook personalizado que facilita la ejecución de operaciones CRUD (Crear, Leer, Actualizar, Eliminar)
 * relacionadas con usuarios utilizando Redux.
 * @function
 * @returns {Object} Objeto con funciones para insertar, actualizar y eliminar usuarios.
 * @example
 * // Ejemplo de uso del hook en un componente funcional.
 * const { insertar, actualizar, eliminar } = useCrudUsers();
 */
export const useCrudUsers = () => {
  const dispatch = useDispatch();
  const {
    cedula,
    nombre,
    apellidos,
    fechaNacimiento,
    email,
    rol,
    password,
    usuarios,
  } = useSelector((state) => state.usuarios);

  /**
   * Ejecuta la acción para insertar un nuevo usuario utilizando Redux Thunk.
   * Utiliza los datos actuales almacenados en el estado de Redux.
   * @function
   */
  const insertar = () => {
    if (usuarios.find((usuario) => usuario.cedula === cedula)) {
      Swal.fire({
        title: "¡Error!",
        text: `El usuario con cédula ${cedula} ya existe`,
        icon: "error",
        confirmButtonText: "Aceptar",
      });
      return;
    }

    dispatch(
      startInsertUser({
        cedula,
        nombre,
        apellidos,
        fechaNacimiento,
        email,
        rol,
      })
    );
  };

  /**
   * Ejecuta la acción para actualizar un usuario existente utilizando Redux Thunk.
   * Utiliza los datos actuales almacenados en el estado de Redux.
   * @function
   */
  const actualizar = () => {
    dispatch(startUpdateUser({ cedula, password, email, rol }));
  };

  /**
   * Ejecuta la acción para eliminar un usuario utilizando Redux Thunk.
   * Utiliza la cédula del usuario actual almacenada en el estado de Redux.
   * @function
   */
  const eliminar = () => {
    dispatch(startDeleteUser({ cedula }));
  };

  return {
    insertar,
    actualizar,
    eliminar,
  };
};
