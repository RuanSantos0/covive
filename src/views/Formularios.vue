<template>
  <div>
    <div class="position-relative">
      <!-- shape Hero -->
      <section class="section-shaped my-0">
        <div class="shape shape-style-1 shape-default shape-skew">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="container shape-container d-flex">
          <div class="col px-0">
            <div class="row">
              <div class="col-lg-6">
                <h1 class="display-3  text-white">Formulários</h1>
                <p class="lead  text-white">
                  --
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- 1st Hero Variation -->
    </div>
    <section class="section container section-lg pt-lg-0 mt--200">
      <div class="row row-grid">
        <div class="col-lg-4 pb-4" v-for="(item, index) in forms" :key="index">
          <div class="card border-0 card-lift--hover shadow">
            <div class="card-body py-5">
              <h6 class="text-primary text-uppercase">{{ item.nome }}</h6>
              <p class="description mt-3">{{ item.descricao }}</p>
              <router-link slot="brand" class="btn mt-4 btn-primary" to="/">
                Entrar
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-sm-12 col-12">
        <router-link v-show="showButtonSave" slot="brand" class="btn mt-4 btn-primary" to="/customform">
          Novo Formulário
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue";
import Service from "@/services/ApiServices.js";
export default {
  name: "Forms",
  components: {
    Modal,
  },
  data() {
    return {
      modals: {
        modal: false,
      },
      forms: [],
      form: {
        nome: "",
        descricao: "",
      },
    };
  },
  computed:{
      showButtonSave() {
      let res = localStorage.getItem("user-token");
      return !!res;
    },
  },
  methods: {
    goToCustomform() {
      this.$router.push({
        name: "customform",
        params: {
          area: this.$route.params.id,
          id: card.id,
        },
      });
    },
    setHref(cards = []) {
      for (let item of cards) {
        if (item.nome === "COLABORADORE(A)S") item.href = "/colaboradores";
        else item.href = `/subarea/${item.id}`;
      }
    },
    async getAreas() {
      const request = new Service();
      const resp = await request.getByParams({}, "areas");
      if (resp) {
        this.areas = resp;
        this.setHref(this.areas);
      }
    },
    async createArea() {
      const request = new Service();
      console.log(this.form);
      const response = await request.create(this.form, "areas");
      this.modals.modal = false;
      this.getAreas();
    },
  },
  created() {
    this.getAreas();
    console.log("Params", this.$route.params);
  },
};
</script>
<style lang="scss" scoped>
.card-body {
  min-height: 330px;
}
</style>
