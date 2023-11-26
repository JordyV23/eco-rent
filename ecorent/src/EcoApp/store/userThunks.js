import { useUsers } from "../hooks/useUsers";
import { cleanUser, setUsers } from "./usersSlice";

const { getUsers, insertUser, updateUser, deleteUser } = useUsers();

export const startLoadingUsers = () => {
  return async (dispatch) => {
    const users = await getUsers();
    dispatch(setUsers(users));
  };
};

export const startInsertUser = (user) => {
  return async (dispatch) => {
    await insertUser(user);
    // dispatch(setUsers(users));
    dispatch(startLoadingUsers());
    dispatch(cleanUser())
  };
};

export const startUpdateUser = (user) => {
  return async (dispatch) => {
    await updateUser(user);
    // dispatch(setUsers(users));
    dispatch(startLoadingUsers());
    dispatch(cleanUser())
  };
};

export const startDeleteUser = (user) => {
  return async (dispatch) => {
    await deleteUser(user);
    // dispatch(setUsers(users));
    dispatch(startLoadingUsers());
    dispatch(cleanUser())
  };
};
