import { useDispatch, useSelector } from "react-redux";
import {
  startInsertVehicle,
  startUpdateVehicle,
  startDeleteVehicle,
} from "../../store/vehicles/vehicleThunks";

export const useCrudVehicles = () => {
  const dispatch = useDispatch();

  const { placa, marca, detalle, color, disponible } = useSelector(
    (state) => state.vehiculos
  );

  const insertar = () => {
    dispatch(startInsertVehicle({ placa, marca, detalle, color, disponible }));
  };

  const actualizar = () => {
    dispatch(startUpdateVehicle({ placa, marca, detalle, color, disponible }));
  };

  const eliminar = () => {
    dispatch(startDeleteVehicle({ placa, marca, detalle, color, disponible }));
  };

  return { insertar, actualizar, eliminar };
};
