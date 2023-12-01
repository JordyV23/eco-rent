import { backendApi } from "../../../api/backend-api";
import Swal from "sweetalert2";

/**
 * Hook personalizado para manejar operaciones relacionadas con vehículos.
 * @function
 * @returns {Object} Objeto que contiene funciones para obtener, insertar, actualizar y eliminar vehículos.
 */
export const useVehicles = () => {
  /**
   * Muestra una notificación de éxito utilizando SweetAlert2.
   * @param {string} accion - Acción realizada (insertado, actualizado, eliminado, etc.).
   */
  const notifySuccess = (accion) => {
    Swal.fire({
      title: "¡Éxito!",
      text: `Vehículo ${accion} correctamente`,
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
      text: `No se pudo ${accion} el vehículo`,
      icon: "error",
      confirmButtonText: "Aceptar",
    });
  };

  const validarNulos = (vehicle) => {
    if (
      vehicle.placa == "" ||
      vehicle.marca == "" ||
      vehicle.detalle == "" ||
      vehicle.color == "" ||
      vehicle.disponible == ""
    ) {
      notifyError("insertar");
      return true;
    }
    return false;
  };

  /**
   * Función asincrónica que obtiene la lista de vehículos desde la API.
   * @async
   * @function
   * @returns {Promise} Resuelve con los datos de vehículos obtenidos de la API.
   */
  const getVehicles = async () => {
    try {
      const { data } = await backendApi.get(import.meta.env.VITE_VEHICLES);
      if (data.msg === "No hay registros") {
        return [];
      }
      return data;
    } catch (error) {
      // Manejo de errores
      console.error("Error al obtener vehículos:", error);
    }
  };

  /**
   * Función asincrónica que inserta un nuevo vehículo utilizando la API.
   * @async
   * @function
   * @param {Object} vehicle - Objeto que representa los datos del nuevo vehículo.
   */
  const insertVehicle = async (vehicle) => {
    try {
      if (validarNulos(vehicle)) {
        return;
      }

      const { data } = await backendApi.post(
        import.meta.env.VITE_VEHICLES,
        vehicle
      );

      if (data.success) {
        notifySuccess("insertado");
      } else {
        notifyError("insertar");
      }
    } catch (error) {
      console.error("Error al insertar vehículo:", error);
    }
  };

  /**
   * Función asincrónica que actualiza un vehículo existente utilizando la API.
   * @async
   * @function
   * @param {Object} vehicle - Objeto que representa los datos del vehículo a actualizar.
   */
  const updateVehicle = async (vehicle) => {
    try {
      if (validarNulos(vehicle)) {
        return;
      }

      const { data } = await backendApi.put(
        import.meta.env.VITE_VEHICLES,
        vehicle
      );

      if (data.success) {
        notifySuccess("actualizado");
      } else {
        notifyError("actualizar");
      }
    } catch (error) {
      console.error("Error al actualizar vehículo:", error);
    }
  };

  /**
   * Función asincrónica que elimina un vehículo utilizando la API.
   * @async
   * @function
   * @param {Object} params - Objeto que contiene los parámetros para la eliminación del vehículo.
   */
  const deleteVehicle = async ({ placa }) => {
    try {
      const { data } = await backendApi.delete(`/vehiculos.php?placa=${placa}`);

      if (data.success) {
        notifySuccess("eliminado");
      } else {
        notifyError("eliminar");
      }
    } catch (error) {
      console.error("Error al eliminar vehículo:", error);
    }
  };

  return {
    getVehicles,
    insertVehicle,
    updateVehicle,
    deleteVehicle,
  };
};
