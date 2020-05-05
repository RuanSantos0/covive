<template>
  <header class="header-global">
    <base-nav class="navbar-main" transparent type="" effect="light" expand>
      <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
        <img src="../assets/img/covive.svg" alt="logo" />
      </router-link>

      <div class="row" slot="content-header" slot-scope="{ closeMenu }">
        <div class="col-6 collapse-brand">
          <router-link to="/">
            <img src="../assets/img/covive2.svg" />
          </router-link>
        </div>
        <div class="col-6 collapse-close">
          <close-button @click="closeMenu"></close-button>
        </div>
      </div>
      <div>
        <router-link to="/login">
          <base-button type="white" v-show="showbtn && !verificaToken">
            <span id="btn">Login</span>
          </base-button>
        </router-link>
        <router-link to="/">
          <base-button
            @click="clearAll"
            type="white"
            v-show="showbtn && verificaToken"
          >
            <span id="btn">Logout</span>
          </base-button>
        </router-link>
      </div>
    </base-nav>
  </header>
</template>

<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown,
  },
  data() {
    return {
      logado: null,
    };
  },
  mounted() {
    this.logado = localStorage.getItem("user-token");
  },
  updated() {
    this.logado = localStorage.getItem("user-token");
  },
  methods: {
    clearAll() {
      localStorage.clear();
      this.logado = localStorage.getItem("user-token");
    },
  },
  computed: {
    verificaToken() {
      return this.logado || false;
    },
    showbtn() {
      const rota = this.$route.name;
      if (rota === "login") {
        return false;
      }
      return true;
    },
  },
};
</script>
<style lang="scss" scoped>
#header {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.navbar-fixed-top {
  overflow: hidden;
  background-color: #5e72e470;
  position: fixed;
  top: 0;
  width: 100%;
}

#btn:hover {
  color: blue;
}
#btn {
  color: blue;
  font-size: 12px;
}
</style>
