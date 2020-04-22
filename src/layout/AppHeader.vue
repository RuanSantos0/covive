<template>
  <header class="header-global">
    <base-nav class="navbar-main" transparent type="" effect="light" expand="false">
      <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
        <img src="../assets/img/covive.svg" alt="" />
      </router-link>
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
};
</script>
<style lang="scss" scoped>
#header {
  display: flex;
}

.navbar-fixed-top {
  overflow: hidden;
  background-color: #5e72e470;
  position: fixed;
  top: 0;
  width: 100%;
}
</style>
