import { useDispatch, useSelector } from "react-redux";
import {
  startInsertVehicle,
  startUpdateVehicle,
  startDeleteVehicle,
} from "../../store/vehicles/vehicleThunks";

export const useCrudVehicles = () => {
  const dispatch = useDispatch();

  let { placa, marca, detalle, color, disponible } = useSelector(
    (state) => state.vehiculos
  );

  // disponible = parseInt(disponible);

  const insertar = () => {
    const dis = parseInt(disponible)
    dispatch(startInsertVehicle({ placa, marca, detalle, color, dis  }));
  };

  const actualizar = () => {
    const dis = parseInt(disponible)
    dispatch(startUpdateVehicle({ placa, marca, detalle, color, dis }));
  };

  const eliminar = () => {
    dispatch(startDeleteVehicle({ placa}));
  };

  return { insertar, actualizar, eliminar };
};
