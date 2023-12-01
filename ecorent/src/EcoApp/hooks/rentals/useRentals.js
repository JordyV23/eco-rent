import { backendApi } from "../../../api/backend-api";
import Swal from "sweetalert2";

/**
 * Hook que proporciona funciones relacionadas con la gestión de rentas del usuario.
 * @returns {object} Objeto con funciones para obtener, insertar, actualizar y eliminar rentas.
 */
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

  const validarNulos = (rent) => {
    if (
      rent.cedula == "" ||
      rent.fechaRenta == "" ||
      rent.fechaVencimiento == "" ||
      rent.placa == ""
    ) {
      notifyError("insertar");
      return true;
    }
    return false
  };

  /**
   * Obtiene la lista de rentas del usuario.
   * @returns {Promise<Array>} Promesa que resuelve con la lista de rentas o un array vacío si no hay registros.
   */
  const getRentals = async () => {
    try {
      const { data } = await backendApi.get(import.meta.env.VITE_RENTS);
      if (data.msg === "No hay registros") {
        return [];
      }
      return data;
    } catch (error) {
      console.error("Error al obtener rentas:", error);
      return [];
    }
  };

  /**
   * Inserta una nueva renta.
   * @param {object} rent - Objeto que representa la renta a insertar.
   * @returns {Promise<object>} Promesa que resuelve con la respuesta del servidor.
   */
  const insertRent = async (rent) => {
    try {
      if (validarNulos(rent)) {
        return;
      }

      const { data } = await backendApi.post(import.meta.env.VITE_RENTS, rent);

      if (data.success) {
        notifySuccess("insertada");
      } else {
        notifyError("insertar");
      }

      return data;
    } catch (error) {
      console.error("Error al insertar renta:", error);
    }
  };

  /**
   * Actualiza una renta existente.
   * @param {object} rent - Objeto que representa la renta a actualizar.
   * @returns {Promise<object>} Promesa que resuelve con la respuesta del servidor.
   */
  const updateRent = async (rent) => {
    try {
      if (validarNulos(rent)) {
        return;
      }

      const { data } = await backendApi.put(import.meta.env.VITE_RENTS, rent);

      if (data.success) {
        notifySuccess("actualizada");
      } else {
        notifyError("actualizar");
      }
      return data;
    } catch (error) {
      console.error("Error al actualizar renta:", error);
    }
  };

  /**
   * Elimina una renta existente.
   * @param {object} rent - Objeto que representa la renta a eliminar.
   * @returns {Promise<object>} Promesa que resuelve con la respuesta del servidor.
   */
  const deleteRent = async ({ idRenta }) => {
    try {
      const { data } = await backendApi.delete(
        `${import.meta.env.VITE_RENTS}?idRenta=${idRenta}`
      );

      if (data.success) {
        notifySuccess("eliminada");
      } else {
        notifyError("eliminar");
      }
      return data;
    } catch (error) {
      console.error("Error al eliminar renta:", error);
    }
  };

  return {
    getRentals,
    insertRent,
    updateRent,
    deleteRent,
  };
};
