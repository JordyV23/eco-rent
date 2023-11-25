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
            throw error;
        }
    };

    return {
        getUsers
    };
};
