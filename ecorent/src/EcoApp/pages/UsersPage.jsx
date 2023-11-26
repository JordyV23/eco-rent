import {
  NavbarApp,
  UserOptions,
  GeneralTable,
  CrudForm,
  CrudBtsn,
} from "../components/";
import { userFields, usersHeaders, userSliceFunctions } from "../utils";
import { useEffect } from "react";
import { startLoadingUsers, selectUser } from "../store";
import { useCrudUsers } from "../hooks/useCrudUsers";
import { useDispatch, useSelector } from "react-redux";

export const UsersPage = () => {
  const dispatch = useDispatch();
  const { usuarios } = useSelector((state) => state.usuarios);
  const { insertar, actualizar, eliminar } = useCrudUsers();

  useEffect(() => {
    dispatch(startLoadingUsers());
  }, []);

  const setSelectedUser = (cedula) => {
    const user = usuarios.find((user) => user.cedula === cedula);
    dispatch(selectUser(user));
  };

  return (
    <>
      <NavbarApp />
      <UserOptions />
      <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 ">
        <div className="col-span-full sm:col-span-4">
          <CrudForm fields={userFields} slices={userSliceFunctions} />
        </div>
        <div className="col-span-full sm:col-span-2">
          <CrudBtsn
            insertar={insertar}
            actualizar={actualizar}
            eliminar={eliminar}
            buscar={() => {
              console.log("buscar");
            }}
          />
        </div>
      </div>

      <GeneralTable
        headers={usersHeaders}
        storeName={"usuarios"}
        event={setSelectedUser}
        keyField={"cedula"}
      />
    </>
  );
};
