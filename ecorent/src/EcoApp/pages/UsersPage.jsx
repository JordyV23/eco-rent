import {
  NavbarApp,
  UserOptions,
  GeneralTable,
  CrudForm,
  CrudBtsn,
} from "../components/";
import { userFields, usersHeaders } from "../utils";
import { useEffect, useState } from "react";
import { startLoadingUsers } from "../store/userThunks"

import { useDispatch, useSelector } from "react-redux";

export const UsersPage = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("useEffect");
    dispatch(startLoadingUsers());
  }, []);


  return (
    <>
      <NavbarApp />
      <UserOptions />
      <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 ">
        <div className="col-span-full sm:col-span-4">
          <CrudForm fields={userFields} />
        </div>
        <div className="col-span-full sm:col-span-2">
          <CrudBtsn />
        </div>
      </div>

      <GeneralTable headers={usersHeaders} storeName={"usuarios"} />
    </>
  );
};
