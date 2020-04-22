<template>
  <div>
    <div class="position-relative">
      <!-- shape Hero -->
      <section class="section-shaped my-0">
        <div class="shape shape-style-1 shape-default shape-skew">
          <!-- <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span> -->
        </div>
        <div class="container shape-container d-flex">
          <div class="col px-0">
            <div class="row">
              <div class="col-lg-6">
                <h1 class="display-3  text-white">A beautiful Design System</h1>
                <p class="lead  text-white">
                  The design system comes with four pre-built pages to help you
                  get started faster. You can change the text and images and
                  you're good to go.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- 1st Hero Variation -->
    </div>
    <section class="section section-lg pt-lg-0 mt--200">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="cards">
              <card
                class="border-0"
                hover
                shadow
                body-classes="py-5"
                v-for="(card, index) in cards"
                :key="index"
              >
                <icon
                  :name="`fa fa-${card.icon}`"
                  type="primary"
                  rounded
                  class="mb-4"
                >
                </icon>
                <h6 class="text-primary text-uppercase">{{card.title}}</h6>
                <p class="description mt-3">{{card.description}}</p>
                <base-button tag="a" :href="card.href" type="primary" class="mt-4">
                  Learn more
                </base-button>
              </card>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "home",
  components: {},
  data() {
    return {
      cards: [
        {
          icon: "home",
          title: "SAÚDE",
          description: "teste",
          href: "",
        },
        {
          icon: "heartbeat",
          title: "ASSISTÊNCIA SOCIAL",
          description: "teste",
          href: "",
        },
        {
          icon: "",
          title: "PREVIDÊNCIA SOCIAL E QUESTÕES TRABALHISTAS",
          description: "teste",
          href: "",
        },
        {
          icon: "",
          title: "SOCIOJURÍDICO",
          description: "teste",
          href: "",
        },
        {
          icon: "",
          title: "NORMATIVAS/ORIENTAÇÕES",
          description: "teste",
          href: "",
        },
        {
          icon: "",
          title: "COLABORADORE(A)S",
          description: "teste",
          href: "",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.cards {
  gap: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>
