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
                <h1 class="display-3  text-white">Titúlo</h1>
                <p class="lead  text-white">
                  ---
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
              <a
                type=""
                :class="`btn mt-4 btn-${card.color}`"
                :href="card.href"
              >
                Ver Mais
              </a>
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
          icon: "heartbeat",
          title: "SAÚDE",
          description: "teste",
          href: "/subarea",
          color: "primary",
        },
        {
          icon: "home",
          title: "ASSISTÊNCIA SOCIAL",
          description: "teste",
          href: "#",
          color: "primary",
        },
        {
          icon: "briefcase",
          title: "PREVIDÊNCIA SOCIAL E QUESTÕES TRABALHISTAS",
          description: "teste",
          href: "#",
          color: "primary",
        },
        // {
        //   icon: "gavel",
        //   title: "SOCIOJURÍDICO",
        //   description: "teste",
        //   href: "#",
        //   color: "primary",
        // },
        // {
        //   icon: "info-circle",
        //   title: "NORMATIVAS/ORIENTAÇÕES",
        //   description: "teste",
        //   href: "#",
        //   color: "primary",
        // },
        // {
        //   icon: "users",
        //   title: "COLABORADORE(A)S",
        //   description: "teste",
        //   href: "#",
        //   color: "primary",
        // },
      ],
    };
  },
  created(){
    
    // console.log(this.$route.params.id)
  }
};
</script>
<style lang="scss" scoped>
.card-body {
  min-height: 330px;
}
</style>
