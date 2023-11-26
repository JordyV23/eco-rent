import { useDispatch, useSelector } from "react-redux";
import {
  startInsertUser,
  startUpdateUser,
  startDeleteUser,
} from "../store/userThunks";

export const useCrudUsers = () => {
  const dispatch = useDispatch();
  const { cedula, nombre, apellidos, fechaNacimiento, email, rol, password } =
    useSelector((state) => state.usuarios);

  const insertar = () => {
    dispatch(
      startInsertUser({
        cedula,
        nombre,
        apellidos,
        fechaNacimiento,
        email,
        rol,
      })
    );
  };

  const actualizar = () => {
    dispatch(startUpdateUser({ cedula, password, email, rol }));
  };

  const eliminar = () => {
    dispatch(startDeleteUser({ cedula }));
  };

  return {
    insertar,
    actualizar,
    eliminar,
  };
};
