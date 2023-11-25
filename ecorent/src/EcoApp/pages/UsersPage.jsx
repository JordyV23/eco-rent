import {
  NavbarApp,
  UserOptions,
  GeneralTable,
  CrudForm,
  CrudBtsn,
} from "../components/";
import { userFields, usersHeaders } from "../utils";
import { useUsers } from "../hooks/useUsers";
import { useEffect, useState } from "react";

export const UsersPage = () => {
  const { getUsers } = useUsers();
  const [users, setUsers] = useState([]);

  const getData = async () => {
    const fetchedUsers = await getUsers();
    setUsers(fetchedUsers);
  };

  useEffect(() => {
    getData();
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

      <GeneralTable headers={usersHeaders} data={users} />
    </>
  );
};
