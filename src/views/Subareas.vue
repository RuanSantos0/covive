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
                <h1 class="display-3  text-white">{{ this.areaAtual.nome }}</h1>
                <p class="lead  text-white">
                  {{ this.areaAtual.descricao }}
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
          <base-input v-model="search.busca" placeholder="Busca..."></base-input>
        </div>
        <div class="col-md-4">
          <base-button @click="busca()" type="Secondary">Buscar</base-button>
        </div>
      </div>
      <div class="row row-grid tp-space">
        <div
          class="col-lg-4 pb-4"
          v-for="(card, index) in subareas"
          :key="index"
        >
          <div class="card border-0 card-lift--hover shadow">
            <div class="card-body py-5">
              <h6 class="text-primary text-uppercase">{{ card.nome }}</h6>
              <p class="description mt-3">{{ card.descricao }}</p>
              <button
                slot="brand"
                class="btn mt-4 btn-primary"
                @click="goToSubsubareas(card)"
              >
                Entrar
              </button>
              <base-button
                v-show="showButtonSave"
                @click="deleteSubarea(card.id)"
                type="danger"
                class="btn mt-4 btn-primary"
              >
                Excluir
              </base-button>
              <!-- <a type="" :class="`btn mt-4 btn-primary`" href="/subsubareas">
                Entrar
              </a> -->
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-sm-12 col-12">
        <base-button
          v-show="showButtonSave"
          type="primary"
          @click="modals.modal = true"
          >Nova Subárea</base-button
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
                <small>Nova Subárea</small>
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
                    @click="createSubarea()"
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
import Service from "@/services/ApiServices.js";
import axios from "axios";
export default {
  name: "Subareas",
  components: {
    Modal,
  },
  data() {
    return {
      modals: {
        modal: false,
      },
      subareas: [],
      areaAtual: [],
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
  methods: {
    busca() {
      if(this.search.busca === ""){
        this.getSubareas();
      }else{
        const request = axios.create();
      const baseUrl = "https://covive-api.herokuapp.com";
      request
        .get(`${baseUrl}/areas/id/subareas/customSearch`, {
          headers: { area_id: this.$route.params.id , busca: this.search.busca },
        })
        .then((res) => {
          this.subareas = res.data;
          console.log("areas:", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      }
    },
    goToSubsubareas(card) {
      this.$router.push({
        name: "subsubareas",
        params: {
          area: this.$route.params.id,
          id: card.id,
        },
      });
    },
    getAreaAtual() {
      const request = axios.create();
      const baseUrl = "https://covive-api.herokuapp.com";
      request
        .get(`${baseUrl}/areas/id`, {
          headers: { area_id: this.$route.params.id },
        })
        .then((res) => {
          this.areaAtual = res.data;
          console.log("Area", this.areaAtual);
        })
        .catch((err) => {
          console.log("error");
        });
    },
    getSubareas() {
      const request = axios.create();
      const baseUrl = "https://covive-api.herokuapp.com";
      request
        .get(`${baseUrl}/areas/id/subareas`, {
          headers: { area_id: this.$route.params.id },
        })
        .then((res) => {
          this.subareas = res.data;
          console.log(this.subareas);
        })
        .catch((err) => {
          console.log("error");
        });
    },

    createSubarea() {
      const request = axios.create();
      const baseUrl = "https://covive-api.herokuapp.com";
      request
        .post(`${baseUrl}/areas/id/subareas`, this.form, {
          headers: {
            area_id: this.$route.params.id,
            Authorization: "Bearer " + localStorage.getItem("user-token"),
          },
        })
        .then((res) => {
          this.modals.modal = false;
          this.getSubareas();
        })
        .catch((err) => {
          console.log("error");
        });

      console.log(this.form);
    },
    deleteSubarea(id) {
      const request = axios.create();
      const baseUrl = "https://covive-api.herokuapp.com";
      request
        .delete(`${baseUrl}/areas/id/subareas/id`, {
          headers: {
            area_id: this.$route.params.id,
            subarea_id: id,
            Authorization: "Bearer " + localStorage.getItem("user-token"),
          },
        })
        .then((res) => {
          this.getSubareas();
        })
        .catch((err) => {
          console.log("error", err);
        });

      console.log(this.form);
    },
  },
  created() {
    this.getSubareas();
    this.getAreaAtual();
  },
  mounted() {
    console.log(this.$route.params);
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
