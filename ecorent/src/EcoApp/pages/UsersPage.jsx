import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  NavbarApp,
  UserOptions,
  GeneralTable,
  CrudForm,
  CrudBtsn,
  Loader,
} from "../components/";
import { userFields, usersHeaders, userSliceFunctions } from "../utils";
import { startLoadingUsers, selectUser } from "../store";
import { useCrudUsers } from "../hooks/users/useCrudUsers";

/**
 * Página principal para la gestión de usuarios.
 * @component
 * @returns {JSX.Element} Elemento JSX que representa la página de gestión de usuarios.
 */
export const UsersPage = () => {
  const dispatch = useDispatch();
  const { usuarios, isLoading } = useSelector((state) => state.usuarios);
  const { insertar, actualizar, eliminar } = useCrudUsers();

  // Cargar usuarios al cargar la página
  useEffect(() => {
    dispatch(startLoadingUsers());
  }, [dispatch]);

  /**
   * Establece el usuario seleccionado al hacer clic en una fila de la tabla.
   * @function
   * @param {string} cedula - Cédula del usuario seleccionado.
   */
  const setSelectedUser = (cedula) => {
    const user = usuarios.find((user) => user.cedula === cedula);
    dispatch(selectUser(user));
  };

  return (
    <>
      {/* Barra de navegación */}
      <NavbarApp />

      {/* Opciones de usuario */}
      <UserOptions />

      {isLoading ? (
        <Loader />
      ) : (
        <>
          {/* Sección de formulario y botones de CRUD */}
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 ">
            {/* Formulario de CRUD */}
            <div className="col-span-full sm:col-span-4">
              <CrudForm
                stateName={"usuarios"}
                fields={userFields}
                slices={userSliceFunctions}
              />
            </div>

            {/* Botones de CRUD */}
            <div className="col-span-full sm:col-span-2">
              <CrudBtsn
                insertar={insertar}
                actualizar={actualizar}
                eliminar={eliminar}
                headers={usersHeaders}
                keyField={"cedula"}
                event={setSelectedUser}
                storeName={"usuarios"}
                filter1={"cedula"}
                filter2={"nombre"}
                placeholder={"Ingrese la cedula del usuario o su nombre"}
              />
            </div>
          </div>

          {/* Tabla general de usuarios */}
          <GeneralTable
            headers={usersHeaders}
            storeName={"usuarios"}
            event={setSelectedUser}
            keyField={"cedula"}
          />
        </>
      )}
    </>
  );
};
