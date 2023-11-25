import { useUsers } from "../hooks/useUsers";
import { setUsers } from "./usersSlice";

const { getUsers } = useUsers();

export const startLoadingUsers = () => {
  return async (dispatch) => {
    const users = await getUsers();
    dispatch(setUsers(users));
  };
};
