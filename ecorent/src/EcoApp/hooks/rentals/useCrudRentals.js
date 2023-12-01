import { useDispatch, useSelector } from "react-redux";
import { startInsertRent, startUpdateRent, startDeleteRent } from "../../store";
import Swal from "sweetalert2";

/**
 * Hook personalizado para gestionar operaciones CRUD relacionadas con alquileres.
 * @returns {object} Objeto con funciones para insertar, actualizar y eliminar alquileres.
 */
export const useCrudRentals = () => {
  const dispatch = useDispatch();
  const {
    idRenta,
    fechaRenta,
    fechaDevolucion,
    fechaVencimiento,
    cedula,
    placa,
    rentas
  } = useSelector((state) => state.rentas);

  /**
   * Inicia el proceso de inserción de un nuevo alquiler.
   */
  const insertar = () => {

    if( rentas.find((renta) => renta.idRenta === idRenta) ){
      Swal.fire({
        title: "¡Error!",
        text: `La renta ${idRenta} ya existe`,
        icon: "error",
        confirmButtonText: "Aceptar",
      });
      return;
    }

    dispatch(
      startInsertRent({
        fechaRenta,
        fechaDevolucion,
        fechaVencimiento,
        cedula,
        placa,
      })
    );
  };

  /**
   * Inicia el proceso de actualización de un alquiler existente.
   */
  const actualizar = () => {
    dispatch(
      startUpdateRent({
        idRenta,
        fechaRenta,
        fechaDevolucion,
        fechaVencimiento,
        cedula,
        placa,
      })
    );
  };

  /**
   * Inicia el proceso de eliminación de un alquiler existente.
   */
  const eliminar = () => {
    dispatch(startDeleteRent({ idRenta }));
  };

  return {
    insertar,
    actualizar,
    eliminar,
  };
};
