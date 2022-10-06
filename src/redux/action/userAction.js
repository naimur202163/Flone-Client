import { FETCH_USERS_SUCCESS } from "../constants/type";

export const setUsers = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};
