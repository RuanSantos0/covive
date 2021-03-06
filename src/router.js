import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Components.vue";
import Areas from "./views/Areas.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Profile from "./views/Profile.vue";
import Subareas from "./views/Subareas.vue";
import SubSubareas from "./views/SubSubareas.vue"
import Colaboradores from "./views/Colaboradores.vue";
import Formularios from "./views/Formularios.vue"
import CustomForm from "./views/CustomForm.vue"
import ExibeForm from "./views/ExibeForm.vue"

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "areas",
      components: {
        header: AppHeader,
        default: Areas,
        footer: AppFooter,
      },
    },
    {
      path: "/components",
      name: "components",
      components: {
        header: AppHeader,
        default: Components,
        footer: AppFooter,
      },
    },
    {
      path: "/login",
      name: "login",
      components: {
        header: AppHeader,
        default: Login,
        footer: AppFooter,
      },
    },
    {
      path: "/register",
      name: "register",
      components: {
        header: AppHeader,
        default: Register,
        footer: AppFooter,
      },
    },
    {
      path: "/profile",
      name: "profile",
      components: {
        header: AppHeader,
        default: Profile,
        footer: AppFooter,
      },
    },
    {
      path: "/subarea/:id",
      name: "subarea",
      components: {
        header: AppHeader,
        default: Subareas,
        footer: AppFooter,
      },
    },
    {
      path: "/subsubareas/:id/:area",
      name: "subsubareas",
      components: {
        header: AppHeader,
        default: SubSubareas,
        footer: AppFooter,
      },
    },
    {
      path: "/formularios/:id/:area/:subarea",
      name: "formularios",
      components: {
        header: AppHeader,
        default: Formularios,
        footer: AppFooter,
      },
    },
    {
      path: "/colaboradores",
      name: "colaboradores",
      components: {
        header: AppHeader,
        default: Colaboradores,
        footer: AppFooter,
      },
    },
    {
      path: '/customform/:id/:area',
      name: 'customform',
      components: {
        header: AppHeader,
        default: CustomForm,
        footer: AppFooter
      }
    },
    {
      path: '/exibeformulario/:id/:area',
      name: 'exibeformulario',
      components: {
        header: AppHeader,
        default: ExibeForm,
        footer: AppFooter
      }
    }
  ],
  scrollBehavior: (to) => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
});
