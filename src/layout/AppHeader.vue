<template>
  <!-- <header class="header-global">
    <base-nav class="navbar-main" transparent type="" effect="light" expand="false">
      <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
        <img src="../assets/img/covive.svg" alt="" />
      </router-link>
    </base-nav>
  </header> -->
  <header>
    <nav
      class="navbar navbar-main navbar-expand-lg navbar-light navbar-transparent"
    >
      <div class="container">
        <a href="#/" class="navbar-brand mr-lg-5 active router-link-active"
          ><img src="../assets/img/covive.svg" alt="logo"/></a
        ><button
          type="button"
          data-toggle="collapse"
          data-target="0.8469629394377158"
          aria-controls="0.8469629394377158"
          aria-label="Toggle navigation"
          class="navbar-toggler"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div id="0.8469629394377158" class="collapse navbar-collapse">
          <div class="navbar-collapse-header">
            <div class="row">
              <div class="col-6 collapse-brand">
                <a
                  href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
                  ><img src="../assets/img/covive.svg"
                /></a>
              </div>
              <div class="col-6 collapse-close">
                <button
                  type="button"
                  data-toggle="collapse"
                  data-target="#undefined"
                  aria-label="Toggle navigation"
                  class="navbar-toggler"
                >
                  <span></span><span></span>
                </button>
              </div>
            </div>
          </div>
          <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
            <li aria-haspopup="true" class="dropdown nav-item dropdown">
              <a href="#" data-toggle="dropdown" role="button" class="nav-link"
                ><i class="ni ni-ui-04 d-lg-none"></i
                ><span class="nav-link-inner--text">Components</span></a
              >
              <ul class="dropdown-menu dropdown-menu-xl">
                <div class="dropdown-menu-inner">
                  <a
                    href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
                    class="media d-flex align-items-center"
                    ><div
                      class="icon icon-shape bg-gradient-primary rounded-circle text-white"
                    >
                      <i class="ni ni-spaceship"></i>
                    </div>
                    <div class="media-body ml-3">
                      <h6 class="heading text-primary mb-md-1">
                        Getting started
                      </h6>
                      <p class="description d-none d-md-inline-block mb-0">
                        Get started with Bootstrap, the world's most popular
                        framework for building responsive sites.
                      </p>
                    </div></a
                  ><a
                    href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
                    class="media d-flex align-items-center"
                    ><div
                      class="icon icon-shape bg-gradient-warning rounded-circle text-white"
                    >
                      <i class="ni ni-ui-04"></i>
                    </div>
                    <div class="media-body ml-3">
                      <h5 class="heading text-warning mb-md-1">Components</h5>
                      <p class="description d-none d-md-inline-block mb-0">
                        Learn how to use Argon compiling Scss, change brand
                        colors and more.
                      </p>
                    </div></a
                  >
                </div>
              </ul>
            </li>
            <li aria-haspopup="true" class="dropdown nav-item dropdown">
              <a href="#" data-toggle="dropdown" role="button" class="nav-link"
                ><i class="ni ni-collection d-lg-none"></i
                ><span class="nav-link-inner--text">Examples</span></a
              >
              <ul class="dropdown-menu">
                <a href="#/landing" class="dropdown-item">Landing</a
                ><a href="#/profile" class="dropdown-item">Profile</a
                ><a href="#/login" class="dropdown-item">Login</a
                ><a href="#/register" class="dropdown-item">Register</a>
              </ul>
            </li>
          </ul>
          <ul class="navbar-nav align-items-lg-center ml-lg-auto">
            <li class="nav-item">
              <a
                href="https://www.facebook.com/creativetim"
                target="_blank"
                rel="noopener"
                data-toggle="tooltip"
                title="Like us on Facebook"
                class="nav-link nav-link-icon"
                ><i class="fa fa-facebook-square"></i
                ><span class="nav-link-inner--text d-lg-none">Facebook</span></a
              >
            </li>
            <li class="nav-item">
              <a
                href="https://www.instagram.com/creativetimofficial"
                target="_blank"
                rel="noopener"
                data-toggle="tooltip"
                title="Follow us on Instagram"
                class="nav-link nav-link-icon"
                ><i class="fa fa-instagram"></i
                ><span class="nav-link-inner--text d-lg-none"
                  >Instagram</span
                ></a
              >
            </li>
            <li class="nav-item">
              <a
                href="https://twitter.com/creativetim"
                target="_blank"
                rel="noopener"
                data-toggle="tooltip"
                title="Follow us on Twitter"
                class="nav-link nav-link-icon"
                ><i class="fa fa-twitter-square"></i
                ><span class="nav-link-inner--text d-lg-none">Twitter</span></a
              >
            </li>
            <li class="nav-item">
              <a
                href="https://github.com/creativetimofficial/vue-argon-design-system"
                target="_blank"
                rel="noopener"
                data-toggle="tooltip"
                title="Star us on Github"
                class="nav-link nav-link-icon"
                ><i class="fa fa-github"></i
                ><span class="nav-link-inner--text d-lg-none">Github</span></a
              >
            </li>
            <li class="nav-item d-none d-lg-block ml-lg-4">
              <a
                href="https://www.creative-tim.com/product/vue-argon-design-system"
                target="_blank"
                rel="noopener"
                class="btn btn-neutral btn-icon"
                ><span class="btn-inner--icon"
                  ><i class="fa fa-cloud-download mr-2"></i></span
                ><span class="nav-link-inner--text">Download</span></a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
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
