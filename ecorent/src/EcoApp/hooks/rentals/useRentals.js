import { backendApi } from "../../../api/backend-api";
import Swal from "sweetalert2";

export const userRentals = () => {
  /**
   * Muestra una notificación de éxito utilizando SweetAlert2.
   * @param {string} accion - Acción realizada (insertado, actualizado, eliminado, etc.).
   */
  const notifySuccess = (accion) => {
    Swal.fire({
      title: "¡Éxito!",
      text: `Renta ${accion} correctamente`,
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
      text: `No se pudo ${accion} la renta`,
      icon: "error",
      confirmButtonText: "Aceptar",
    });
  };

  const getRentals = async () => {
    try {
      const { data } = await backendApi.get("/rentas.php");
      if (data.msg === "No hay registros") {
        return [];
      }
      return data;
    } catch (error) {
      // Manejo de errores
      console.error("Error al obtener rentas:", error);
      //   throw error;
      return [];
    }
  };

  const insertRent = async (rent) => {
    try {
      const { data } = await backendApi.post("/rentas.php", rent);

      if (data.success) {
        notifySuccess("insertada");
      } else {
        notifyError("insertar");
      }

      return data;
    } catch (error) {
      // Manejo de errores
      console.error("Error al insertar renta:", error);
      //   throw error;
    }
  };

  const updateRent = async (rent) => {
    try {
      const { data } = await backendApi.put("/rentas.php", rent);

      if (data.success) {
        notifySuccess("actualizada");
      } else {
        notifyError("actualizar");
      }
      return data;
    } catch (error) {
      // Manejo de errores
      console.error("Error al actualizar renta:", error);
      //   throw error;
    }
  };

  const deleteRent = async ({ idRenta }) => {
    try {
      const { data } = await backendApi.delete(
        `/rentas.php?idRenta=${idRenta}`
      );

      if (data.success) {
        notifySuccess("eliminada");
      } else {
        notifyError("eliminar");
      }
      return data;
    } catch (error) {
      // Manejo de errores
      console.error("Error al eliminar renta:", error);
      //   throw error;
    }
  };

  return {
    getRentals,
    insertRent,
    updateRent,
    deleteRent,
  };
};
