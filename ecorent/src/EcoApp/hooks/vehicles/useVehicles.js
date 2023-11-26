import { backendApi } from "../../../api/backend-api";
import Swal from "sweetalert2";

export const useVehicles = () => {
  /**
   * Muestra una notificación de éxito utilizando SweetAlert2.
   * @param {string} accion - Acción realizada (insertado, actualizado, eliminado, etc.).
   */
  const notifySuccess = (accion) => {
    Swal.fire({
      title: "¡Éxito!",
      text: `Vehiculo ${accion} correctamente`,
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
      text: `No se pudo ${accion} el vehiculo`,
      icon: "error",
      confirmButtonText: "Aceptar",
    });
  };

  const getVehicles = async () => {
    try {
      const { data } = await backendApi.get("/vehiculos.php");
      return data;
    } catch (error) {
      // Manejo de errores
      console.error("Error al obtener vehiculos:", error);
      //   throw error;
    }
  };

  const insertVehicle = async (vehicle) => {
    try {
      const { data } = await backendApi.post("/vehiculos.php", vehicle);

      if (data.success) {
        notifySuccess("insertado");
      } else {
        notifyError("insertar");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateVehicle = async (vehicle) => {
    try {
      const { data } = await backendApi.put("/vehiculos.php", vehicle);
      if (data.success) {
        notifySuccess("actualizado");
      } else {
        notifyError("actualizar");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteVehicle = async ({ placa }) => {
    try {
      const { data } = await backendApi.delete(`/vehiculos.php?placa=${placa}`);

      if (data.success) {
        notifySuccess("eliminado");
      } else {
        notifyError("eliminar");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    getVehicles,
    insertVehicle,
    updateVehicle,
    deleteVehicle,
  };
};
