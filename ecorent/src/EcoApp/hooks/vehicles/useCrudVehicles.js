import { useDispatch, useSelector } from "react-redux";
import {
  startInsertVehicle,
  startUpdateVehicle,
  startDeleteVehicle,
} from "../../store/vehicles/vehicleThunks";
import Swal from "sweetalert2";

/**
 * Hook personalizado para manejar operaciones relacionadas con vehículos.
 * @function
 * @returns {Object} Objeto que contiene funciones para insertar, actualizar y eliminar vehículos.
 */
export const useCrudVehicles = () => {
  const dispatch = useDispatch();

  // Obtener datos del estado
  const { placa, marca, detalle, color, disponible, vehiculos } = useSelector(
    (state) => state.vehiculos
  );

  /**
   * Función que realiza la inserción de un nuevo vehículo.
   * @function
   */
  const insertar = () => {
    if (vehiculos.find((vehiculo) => vehiculo.placa === placa)) {
      Swal.fire({
        title: "¡Error!",
        text: `El vehículo con placa ${placa} ya existe`,
        icon: "error",
        confirmButtonText: "Aceptar",
      });
      return;
    }

    const dis = parseInt(disponible);
    dispatch(
      startInsertVehicle({ placa, marca, detalle, color, disponible: dis })
    );
  };

  /**
   * Función que realiza la actualización de un vehículo existente.
   * @function
   */
  const actualizar = () => {
    const dis = parseInt(disponible);
    dispatch(
      startUpdateVehicle({ placa, marca, detalle, color, disponible: dis })
    );
  };

  /**
   * Función que realiza la eliminación de un vehículo.
   * @function
   */
  const eliminar = () => {
    dispatch(startDeleteVehicle({ placa }));
  };

  return { insertar, actualizar, eliminar };
};
