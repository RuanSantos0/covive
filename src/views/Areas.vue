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
                <h1 class="display-3  text-white">Áreas Teste alguma coisa</h1>
                <p class="lead  text-white">
                  CATÁLOGO DE SERVIÇOS DA REDE SOCIOASSISTENCIAL E DE SAÚDE
DO CEARÁ EM TEMPOS DE COVID-19
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
        <div class="col-lg-4 pb-4" v-for="(card, index) in areas" :key="index">
          <div class="card border-0 card-lift--hover shadow">
            <div class="card-body py-5">
              <h6 class="text-primary text-uppercase">{{ card.nome }}</h6>
              <p class="description mt-3">{{ card.descricao }}</p>
              <router-link
                slot="brand"
                class="btn mt-4 btn-primary"
                :to="card.href"
              >
                Entrar
              </router-link>
              <base-button v-show="showButtonSave" @click="deleteArea(card.id)" type="danger" class="btn mt-4 btn-primary">
                Excluir
              </base-button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-sm-12 col-12">
        <base-button
          v-show="showButtonSave"
          type="primary"
          @click="modals.modal = true"
          >Nova Área</base-button
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
                <small>Nova Área</small>
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
                  <base-button type="primary" class="my-4" @click="createArea()"
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
  name: "home",
  components: {
    Modal,
  },
  data() {
    return {
      modals: {
        modal: false,
      },
      areas: [],
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
    createArea() {
      const request = axios.create();
      const baseUrl = "https://covive-api.herokuapp.com";
      request
        .post(`${baseUrl}/areas`, this.form, {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("user-token"),
          },
        })
        .then((res) => {
          this.modals.modal = false;
          this.getAreas();
        })
        .catch((err) => {
          console.log("error");
        });

      console.log(this.form);
    },
    deleteArea(id){
      const request = axios.create();
      const baseUrl = "https://covive-api.herokuapp.com";
      request
        .delete(`${baseUrl}/areas/id`, {
          headers: {
            area_id: id, 'Authorization': 'Bearer ' + localStorage.getItem("user-token"),
          },
        })
        .then((res) => {
          this.getAreas();
        })
        .catch((err) => {
          console.log("error");
        });

      console.log(this.form);
    }
  },
  created() {
    this.getAreas();
  },
};
</script>
<style lang="scss" scoped>
.card-body {
  min-height: 330px;
}
</style>
