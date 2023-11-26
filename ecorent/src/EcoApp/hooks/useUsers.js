import { backendApi } from "../../api/backend-api";
import Swal from "sweetalert2";

/**
 * Hook personalizado para gestionar operaciones relacionadas con usuarios.
 * Utiliza la instancia de backendApi para realizar solicitudes a la API.
 * @function
 * @example
 * // Ejemplo de uso del hook en un componente funcional.
 * const { getUsers, insertUser, updateUser, deleteUser } = useUsers();
 * useEffect(() => {
 *   const fetchData = async () => {
 *     const users = await getUsers();
 *     console.log(users);
 *   };
 *   fetchData();
 * }, []);
 */
export const useUsers = () => {
  /**
   * Muestra una notificación de éxito utilizando SweetAlert2.
   * @param {string} accion - Acción realizada (insertado, actualizado, eliminado, etc.).
   */
  const notifySuccess = (accion) => {
    Swal.fire({
      title: "¡Éxito!",
      text: `Usuario ${accion} correctamente`,
      icon: "success",
      confirmButtonText: "Aceptar",
    });
  };

  /**
   * Muestra una notificación de error utilizando SweetAlert2.
   * @param {string} accion - Acción que no se pudo realizar (insertar, actualizar, eliminar, etc.).
   */
  const notifyError = (accion) => {
    Swal.fire({
      title: "¡Error!",
      text: `No se pudo ${accion} el usuario`,
      icon: "error",
      confirmButtonText: "Aceptar",
    });
  };

  /**
   * Obtiene de forma asincrónica la lista de usuarios desde la API.
   * @async
   * @function
   * @returns {Promise} Resuelve con los datos de usuarios obtenidos de la API.
   */
  const getUsers = async () => {
    try {
      const { data } = await backendApi.get("/usuarios.php");
      return data;
    } catch (error) {
      // Manejo de errores
      console.error("Error al obtener usuarios:", error);
      //   throw error;
    }
  };

  /**
   * Inserta un nuevo usuario de forma asincrónica mediante la API.
   * @async
   * @function
   * @param {Object} usuario - Datos del usuario a ser insertado.
   * @returns {Promise} Resuelve con la respuesta de la API después de la inserción.
   */
  const insertUser = async (usuario) => {
    try {
      const { data } = await backendApi.post("/usuarios.php", usuario);

      if (data.success) {
        notifySuccess("insertado");
      } else {
        notifyError("insertar");
      }

      return data;
    } catch (error) {
      // Manejo de errores
      console.error("Error al insertar:", error);
      // throw error;
    }
  };

  /**
   * Actualiza un usuario existente de forma asincrónica mediante la API.
   * @async
   * @function
   * @param {Object} usuario - Datos del usuario a ser actualizado.
   * @returns {Promise} Resuelve con la respuesta de la API después de la actualización.
   */
  const updateUser = async (usuario) => {
    try {
      const { data } = await backendApi.put("/usuarios.php", usuario);

      if (data.success) {
        notifySuccess("actualizado");
      } else {
        notifyError("actualizar");
      }

      return data;
    } catch (error) {
      // Manejo de errores
      console.error("Error al actualizar:", error);
      // throw error;
    }
  };

  /**
   * Elimina un usuario de forma asincrónica mediante la API.
   * @async
   * @function
   * @param {Object} usuario - Datos del usuario a ser eliminado (se utiliza la cédula como identificador).
   * @returns {Promise} Resuelve con la respuesta de la API después de la eliminación.
   */
  const deleteUser = async ({ cedula }) => {
    try {
      const { data } = await backendApi.delete(
        `/usuarios.php?cedula=${cedula}`
      );

      if (data.success) {
        notifySuccess("eliminado");
      } else {
        notifyError("eliminar");
      }

      return data;
    } catch (error) {
      // Manejo de errores
      console.error("Error al eliminar:", error);
      // throw error;
    }
  };

  return {
    getUsers,
    insertUser,
    updateUser,
    deleteUser,
  };
};
