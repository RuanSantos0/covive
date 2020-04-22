<template>
  <header class="header-global">
    <!-- <div id="header">
            <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
                <h1 class="display-3  text-white">COVIVE</h1>
            </router-link>
        </div> -->
    <base-nav class="navbar-main" transparent type="" effect="light" expand>
            <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
                <h4 class="display-3  text-white">COVIVE</h4>
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
</style>
