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
                  {{ subAreaAtual.nome }}
                </h1>
                <p class="lead  text-white">
                  {{ subAreaAtual.descricao }}
                </p>
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
      <div v-show="subsubareas.length > 0" class="row row-grid tp-space">
        <div
          class="col-lg-4 pb-4"
          v-for="(card, index) in subsubareas"
          :key="index"
        >
          <div class="card border-0 card-lift--hover shadow">
            <div class="card-body py-5">
              <h6 class="text-primary text-uppercase">{{ card.nome }}</h6>
              <p class="description mt-3">{{ card.descricao }}</p>
              <button
                slot="brand"
                class="btn mt-4 btn-primary"
                @click="goToFormularios(card)"
              >
                Entrar
              </button>
              <base-button
                v-show="showButtonSave"
                @click="deleteSubsubarea(card.id)"
                type="danger"
                class="btn mt-4 btn-primary"
              >
                Excluir
              </base-button>
            </div>
          </div>
        </div>
      </div>
      <!-- <div v-show="!(subsubareas.length > 0)" class="d-flex justify-content-center align-items-center flex-column text-center">
          <img class="img-search" src="../assets/img/search.svg" alt="">
          <h1>Nenhum resultado encontrado</h1>
          <h3>
Parece que não conseguimos encontrar nenhum resultado com base na sua pesquisa.</h3>
      </div> -->
      <div class="col-md-4 col-sm-12 col-12">
        <base-button
          v-show="showButtonSave"
          type="primary"
          @click="modals.modal = true"
          >Nova Subsubárea</base-button
        >
        <modal
          :show.sync="modals.modal"
          body-classes="p-0"
          modal-classes="modal-dialog-centered modal-sm"
        >
          <card
            type="secondary"
            shadow
            header-classes="bg-white pb-5"
            body-classes="px-lg-5 py-lg-5"
            class="border-0"
          >
            <template>
              <div class="text-muted text-center mb-3">
                <small>Nova Subsubárea</small>
              </div>
            </template>
            <template>
              <form role="form">
                <base-input alternative placeholder="Nome" v-model="form.nome">
                </base-input>
                <base-input
                  alternative
                  placeholder="Descrição"
                  v-model="form.descricao"
                >
                </base-input>
                <div class="text-center">
                  <base-button
                    type="danger"
                    class="my-4"
                    @click="modals.modal = false"
                    >Fechar</base-button
                  >
                  <base-button
                    type="primary"
                    class="my-4"
                    @click="createSubsubArea()"
                    >Salvar</base-button
                  >
                </div>
              </form>
            </template>
          </card>
        </modal>
      </div>
    </section>
  </div>
</template>
<script>
import Modal from "@/components/Modal.vue";
import axios from "axios";
export default {
  name: "formSubareas",
  components: {
    Modal,
  },
  data() {
    return {
      modals: {
        modal: false,
      },
      subsubareas: [],
      subAreaAtual: [{ nome: "", descricao: "" }],
      search: {
        busca: "",
      },
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
    console.log("nome:", this.subAreaAtual.nome);
    console.log("nome:", this.subAreaAtual.descricao);
  },
  methods: {
    busca() {
      if (this.search.busca === "") {
        this.getSubsubareas();
      } else {
        const request = axios.create();
        const baseUrl = "https://covive-api.herokuapp.com";
        request
          .get(`${baseUrl}/subareas/id/subsubareas/customSearch`, {
            headers: {
              subarea_id: this.$route.params.id,
              busca: this.search.busca,
            },
          })
          .then((res) => {
            this.subsubareas = res.data;
            console.log("areas:", res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    goToFormularios(card) {
      this.$router.push({
        name: "formularios",
        params: {
          subarea: this.$route.params.id,
          id: card.id,
        },
      });
    },
    getSubAreaAtual() {
      const request = axios.create();
      const baseUrl = "https://covive-api.herokuapp.com";
      request
        .get(`${baseUrl}/areas/id/subareas/id`, {
          headers: {
            area_id: this.$route.params.area,
            subarea_id: this.$route.params.id,
          },
        })
        .then((res) => {
          this.subAreaAtual = res.data;
          console.log("Subarea", this.subAreaAtual);
        })
        .catch((err) => {
          console.log(err, "error");
        });
    },
    getSubsubareas() {
      const request = axios.create();
      const baseUrl = "https://covive-api.herokuapp.com";
      request
        .get(`${baseUrl}/subareas/id/subsubareas`, {
          headers: { subarea_id: this.$route.params.id },
        })
        .then((res) => {
          this.subsubareas = res.data;
          console.log(this.subsubareas);
        })
        .catch((err) => {
          console.log("error");
        });
    },

    createSubsubArea() {
      const request = axios.create();
      const baseUrl = "https://covive-api.herokuapp.com";
      request
        .post(`${baseUrl}/subareas/id/subsubareas`, this.form, {
          headers: {
            subarea_id: this.$route.params.id,
            Authorization: "Bearer " + localStorage.getItem("user-token"),
          },
        })
        .then((res) => {
          this.modals.modal = false;
          this.getSubsubareas();
        })
        .catch((err) => {
          console.log("error");
        });

      console.log(this.form);
    },
    deleteSubsubarea(id) {
      const request = axios.create();
      const baseUrl = "https://covive-api.herokuapp.com";
      request
        .delete(`${baseUrl}/subareas/id/subsubareas/id`, {
          headers: {
            subarea_id: this.$route.params.id,
            subsubarea_id: id,
            Authorization: "Bearer " + localStorage.getItem("user-token"),
          },
        })
        .then((res) => {
          this.getSubsubareas();
        })
        .catch((err) => {
          console.log("error", err);
        });

      console.log(this.form);
    },
  },
  mounted() {
    this.getSubAreaAtual();
    this.getSubsubareas();
    console.log("Params", this.$route.params);
  },
};
</script>
<style lang="scss" scoped>
.card-body {
  min-height: 330px;
}

.img-search {
  height: 200px;
  width: 200px;
}

.tp-space {
  margin-top: 50px;
}
</style>
