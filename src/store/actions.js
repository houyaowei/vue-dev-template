import * as api from "../api/ajaxService";
import { XAHC_LOGIN_MUTATION } from "./mutation-types";

export const loginAction = ({ commit }) => {
  api.login().then(messages => {
    commit(XAHC_LOGIN_MUTATION, messages);
  });
};
