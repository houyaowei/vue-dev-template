<template>
  <div class="hello">
    <div class="nav">
      <div><router-link to="/">主页</router-link></div>
      <div><router-link to="/demos">行业案例</router-link></div>
      <div><router-link to="/about">关于我们</router-link></div>
      <div><router-link to="/contact">联系我们</router-link></div>
      <div>
        <input v-model="userName"><button @click="userLogin">login</button>
        <span v-if="this.$store.state.show">已登录</span>
        <span> {{status}} </span>
      </div>
    </div>
    <div class="detail-left">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    
  </div>
  
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import { XAHC_LOGIN_ACTION } from "../store/mutation-types";

export default {
  name: "Header",
  data() {
    return {
      userName: ""
    };
  },
  computed: mapGetters({
    status: "getStatus"
  }),
  methods: mapActions({
    userLogin(dispatch) {
		console.log("action")
      const { userName } = this;
      if (userName.trim()) {
        dispatch(XAHC_LOGIN_ACTION, {
          userName
        });
        // this.userName = "";
      }
    }
  })
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav {
  display: flex;
  flex-wrap: no-wrap;
  justify-content: center;
  background-color: #363636;
  color: #fff;
}
.nav > div {
  width: 100px;
  height: 50px;
  line-height: 50px;
}
a {
  color: #fff;
  text-decoration: none;
}
.detail-left {
  background-color: #ccc;
  height: 600px;
}
.app-foot {
  text-align: center;
  height: 80px;
  width: 100%;
  line-height: 80px;
  background: #e3e4e8;
}
</style>