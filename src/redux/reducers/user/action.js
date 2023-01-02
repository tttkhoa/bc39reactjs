import { DELETE_USER } from "./constants";
import { EDIT_USER } from "./constants";
import { KEYWORD } from "./constants";
import { SUBMIT } from "./constants";

export const actDeleteUser = (userId) => { 
  return {
    type: DELETE_USER,
    payload: userId,
  };
};

export const actEditUser = (user) => {
  return {
    type:EDIT_USER,
    payload:user,
  }
}

export const actSubmitUser = (user) => {
  return {
    type: SUBMIT,
    payload: user,
  }
}

export const actSearch = (keyword) => {
  return {
    type:KEYWORD,
    payload:keyword,
  }
}
