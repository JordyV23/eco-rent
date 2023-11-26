import { useUsers } from "../hooks/useUsers";
import { setUsers } from "./usersSlice";

const { getUsers, insertUser } = useUsers();

export const startLoadingUsers = () => {
  return async (dispatch) => {
    const users = await getUsers();
    dispatch(setUsers(users));
  };
};

export const loadUser = (user) => {
  return async (dispatch) => {
    const users = await insertUser(user);
    dispatch(setUsers(users));
    dispatch(startLoadingUsers());
  };
};
