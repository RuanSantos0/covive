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
                <h1 class="display-3  text-white">{{this.areaAtual.nome}}</h1>
                <p class="lead  text-white">
                  {{this.areaAtual.descricao}}
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
        <div
          class="col-lg-4 pb-4"
          v-for="(card, index) in subareas"
          :key="index"
        >
          <div class="card border-0 card-lift--hover shadow">
            <div class="card-body py-5">
              <h6 class="text-primary text-uppercase">{{ card.nome }}</h6>
              <p class="description mt-3">{{ card.descricao }}</p>
              <a type="" :class="`btn mt-4 btn-primary`" href="/subsubareas">
                Entrar
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-sm-12 col-12">
          <base-button type="primary" @click="modals.modal = true"
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
                  <base-input
                    alternative
                    placeholder="Nome"
                    v-model="form.nome"
                  >
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
      form: {
        nome: "",
        descricao: "",
      },
    };
  },
  methods: {
    getAreaAtual(){
      const request = axios.create();
      const baseUrl = "http://localhost:3333";
      request
        .get(`${baseUrl}/areas/id`, {
          headers: { area_id: this.$route.params.id },
        })
        .then( res => {
          this.areaAtual = res.data;
          console.log(this.areaAtual);
        }).catch(err => {
          console.log("error");
        });
    },
    getSubareas() {
      const request = axios.create();
      const baseUrl = "http://localhost:3333";
      request
        .get(`${baseUrl}/areas/id/subareas`, {
          headers: { area_id: this.$route.params.id },
        })
        .then( res => {
          this.subareas = res.data;
        }).catch(err => {
          console.log("error");
        });

      // const resp = await request.getByParams({}, "areas/id/subareas", {
      //   headers: { area_id: this.$route.params.id },
      // });
      // if (resp) {
      //   this.subareas = resp;
      //   console.log(resp);
      // }
    },

    createArea() {
      const request = axios.create();
      const baseUrl = "http://localhost:3333";
      request
        .post(`${baseUrl}/areas/id/subareas`, this.form,{
          headers: { area_id: this.$route.params.id },
        })
        .then( res => {
          this.modals.modal = false;
        }).catch(err => {
          console.log("error");
        });


      console.log(this.form);
      // const response = await request.create(this.form, "subareas");
      // this.modals.modal = false;
    },
  },
  created() {
    this.getSubareas();
    this.getAreaAtual();
    console.log(this.$route.params.id);
  },
};
</script>
<style lang="scss" scoped>
.card-body {
  min-height: 330px;
}
</style>
