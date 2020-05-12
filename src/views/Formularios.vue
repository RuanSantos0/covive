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
                <h1 class="display-3  text-white">
                  Formulário {{ subsubAreaAtual.nome }}
                </h1>
                <p class="lead  text-white"></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- 1st Hero Variation -->
    </div>
    <section class="section container section-lg pt-lg-0 mt--200">
      <div class="row">
        <div class="col-md-8">
          <base-input
            v-model="search.busca"
            placeholder="Busca..."
          ></base-input>
        </div>
        <div class="col-md-4">
          <base-button @click="busca()" type="Secondary">Buscar</base-button>
        </div>
      </div>
      <div class="row row-grid tp-space">
        <div
          class="col-lg-4 pb-4"
          v-for="(card, index) in formulario"
          :key="index"
        >
          <div class="card border-0 card-lift--hover shadow">
            <div class="card-body py-5">
              <h6 class="text-primary text-uppercase">{{ card.nome }}</h6>
              <p class="description mt-3">{{ card.createdAt }}</p>
              <button
                slot="brand"
                class="btn mt-4 btn-primary"
                @click="goToExibeform(card)"
              >
                Entrar
              </button>
              <base-button
                v-show="showButtonSave"
                @click="deleteForm(card.id)"
                type="danger"
                class="btn mt-4 btn-primary"
              >
                Excluir
              </base-button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-sm-12 col-12">
        <base-button
          v-show="showButtonSave"
          @click="goToCustomform()"
          type="primary"
          class="btn mt-4 btn-primary"
        >
          Novo Formulário
        </base-button>
      </div>
    </section>
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue";
import Service from "@/services/ApiServices.js";
import axios from "axios";
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
      formulario: [],
      search: {
        busca: "",
      },
      subsubAreaAtual: [{ nome: "", descricao: "" }],
      forms: [],
      form: {
        nome: "",
        descricao: "",
      },
    };
  },
  computed: {
    showButtonSave() {
      let res = localStorage.getItem("user-token");
      return !!res;
    },
  },
  updated() {
    console.log("nome:", this.subsubAreaAtual.nome);
    console.log("Descrição:", this.subsubAreaAtual.descricao);
  },
  methods: {
    busca() {
      if (this.search.busca === "") {
        this.getFormularios();
      } else {
        const request = axios.create();
        const baseUrl = "https://covive-api.herokuapp.com";
        request
          .get(`${baseUrl}/subsubareas/id/formularios/customSearch`, {
            headers: {
              subsubarea_id: this.$route.params.id,
              busca: this.search.busca,
            },
          })
          .then((res) => {
            this.formulario = res.data;
            console.log("areas:", res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    goToExibeform(card) {
      this.$router.push({
        name: "exibeformulario",
        params: {
          subsubarea: this.$route.params.id,
          id: card.id,
        },
      });
    },
    goToCustomform() {
      this.$router.push({
        name: "customform",
        params: {
          subsubarea_id: this.$route.params.id,
          //id: card.id,
        },
      });
    },
    getSubsubAreaAtual() {
      const request = axios.create();
      const baseUrl = "https://covive-api.herokuapp.com";
      request
        .get(`${baseUrl}/subareas/id/subsubareas/id`, {
          headers: {
            subarea_id: this.$route.params.subarea,
            subsubarea_id: this.$route.params.id,
          },
        })
        .then((res) => {
          this.subsubAreaAtual = res.data;
          console.log("Subsubarea", this.subsubAreaAtual);
        })
        .catch((err) => {
          console.log(err, "error");
        });
    },
    getFormularios() {
      const request = axios.create();
      const baseUrl = "https://covive-api.herokuapp.com";
      request
        .get(`${baseUrl}/subsubareas/id/formularios`, {
          headers: { subsubarea_id: this.$route.params.id },
        })
        .then((res) => {
          this.formulario = res.data;
          console.log(this.formulario);
        })
        .catch((err) => {
          console.log("error");
        });
    },
    async createArea() {
      const request = new Service();
      console.log(this.form);
      const response = await request.create(this.form, "areas");
      this.modals.modal = false;
      this.getFormularios();
    },
    deleteForm(id) {
      const request = axios.create();
      const baseUrl = "https://covive-api.herokuapp.com";
      request
        .delete(`${baseUrl}/subsubareas/id/formularios/id`, {
          headers: {
            subsubarea_id: this.$route.params.id,
            formulario_id: id,
            Authorization: "Bearer " + localStorage.getItem("user-token"),
          },
        })
        .then((res) => {
          this.getFormularios();
        })
        .catch((err) => {
          console.log("error", err);
        });

      console.log(this.form);
      console.log("deletado");
    },
  },
  created() {
    this.getFormularios();
    this.getSubsubAreaAtual();
    console.log("Params", this.$route.params);
  },
};
</script>
<style lang="scss" scoped>
.card-body {
  min-height: 330px;
}

.tp-space {
  margin-top: 50px;
}
</style>
