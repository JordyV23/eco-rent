import { backendApi } from "../../api/backend-api";

/**
 * Hook personalizado para manejar operaciones relacionadas con usuarios.
 * Utiliza la instancia de backendApi para realizar solicitudes a la API.
 * @function
 * @example
 * // Ejemplo de uso del hook en un componente funcional.
 * const { getUsers } = useUsers();
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
   * Función asincrónica que obtiene la lista de usuarios desde la API.
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

  const insertUser = async (usuario) => {
    try {
      // console.log(usuario);
      // return
      const { data } = await backendApi.post("/usuarios.php", usuario);
      return data;
    } catch (error) {
      // Manejo de errores
      console.error("Error al insertar:", error);
      // throw error;
    }
  };

  const updateUser = async (usuario) => {
    try {
      const { data } = await backendApi.put("/usuarios.php", usuario);
      return data;
    } catch (error) {
      // Manejo de errores
      console.error("Error al actualizar:", error);
      // throw error;
    }
  };

  const deleteUser = async ({ cedula }) => {
    try {
      const { data } = await backendApi.delete(
        `/usuarios.php?cedula=${cedula}`
      );
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
