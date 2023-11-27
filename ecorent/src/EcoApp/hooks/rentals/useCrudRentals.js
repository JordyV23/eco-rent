import { useDispatch, useSelector } from "react-redux";
import { startInsertRent, startUpdateRent, startDeletRent } from "../../store";

export const useCrudRentals = () => {
  const dispatch = useDispatch();
  const {
    idRenta,
    fechaRenta,
    fechaDevolucion,
    fechaVencimiento,
    cedula,
    placa,
  } = useSelector((state) => state.rentas);

  const insertar = () => {
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

  const eliminar = () => {
    dispatch(startDeletRent({ idRenta }));
  };

  return {
    insertar,
    actualizar,
    eliminar,
  };
};
