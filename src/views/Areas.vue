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
                <h1 class="display-3  text-white">Áreas</h1>
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
        <div class="col-lg-4 pb-4" v-for="(card, index) in cards" :key="index">
          <div class="card border-0 card-lift--hover shadow">
            <div class="card-body py-5">
              <div
                :class="
                  `icon icon-shape mb-4 icon-shape-${card.color} rounded-circle`
                "
              >
                <icon :name="`fa fa-${card.icon}`"> </icon>
              </div>
              <h6 class="text-primary text-uppercase">{{ card.title }}</h6>
              <p class="description mt-3">{{ card.description }}</p>
              <router-link
                slot="brand"
                :class="`btn mt-4 btn-${card.color}`"
                :to="`${card.href}/${card.id}`"
              >
                Entrar
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-12 col-12">
          <base-button type="primary" @click="modals.modal = true"
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
                  <base-input alternative placeholder="Nome" v-model="form.nome"> </base-input>
                  <base-input alternative placeholder="Descrição" v-model="form.descricao"> </base-input>
                  <div class="text-center">
                    <base-button
                      type="danger"
                      class="my-4"
                      @click="modals.modal = false"
                      >Fechar</base-button
                    >
                    <base-button type="primary" class="my-4"
                      >Salvar</base-button
                    >
                  </div>
                </form>
              </template>
            </card>
          </modal>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue";
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
      form:{
        nome: "",
        descricao: ""
      },
      cards: [
        {
          id: 1,
          icon: "heartbeat",
          title: "SAÚDE",
          description: "teste",
          href: "/subarea",
          color: "primary",
        },
        {
          id: 2,
          icon: "home",
          title: "ASSISTÊNCIA SOCIAL",
          description: "teste",
          href: "/subarea",
          color: "primary",
        },
        {
          id: 3,
          icon: "briefcase",
          title: "PREVIDÊNCIA SOCIAL E QUESTÕES TRABALHISTAS",
          description: "teste",
          href: "/subarea",
          color: "primary",
        },
        {
          id: 4,
          icon: "gavel",
          title: "SOCIOJURÍDICO",
          description: "teste",
          href: "/subarea",
          color: "primary",
        },
        {
          id: 5,
          icon: "info-circle",
          title: "NORMATIVAS/ORIENTAÇÕES",
          description: "teste",
          href: "/subarea",
          color: "primary",
        },
        {
          id: 6,
          icon: "users",
          title: "COLABORADORE(A)S",
          description: "teste",
          href: "/subareacolaboradores",
          color: "primary",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.card-body {
  min-height: 330px;
}
</style>
