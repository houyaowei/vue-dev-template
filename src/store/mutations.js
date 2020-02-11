import Vue from "vue";

import { XAHC_LOGIN_MUTATION } from "./mutation-types";

export default {
  [XAHC_LOGIN_MUTATION](state, data) {
	 console.log("mutation")
    state.show = data.res;
  }
};
