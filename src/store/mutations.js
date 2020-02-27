import Vue from "vue";

import { XAHC_LOGIN_MUTATION } from "./mutation-types";

export default {
  [XAHC_LOGIN_MUTATION](state, data) {
	 console.log("mutation");
	 if(data.language == "GraphQL"){
		 state.show = true;
	 }
	 else {
		 state.show = false;
	 }
  }
};
