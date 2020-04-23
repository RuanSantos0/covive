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
                <h1 class="display-3  text-white">Colaboradores</h1>
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
    <section class="container mt--200">
      <div class="row">
        <div v-for="(item,index) in data" :key="index" class="page-cards col-md-4 col-sm-12 col-12">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img :src="require(`../assets/img/${item.src}`)" />
          </a>
          <h3>{{item.title}}</h3>
          <p class="text-center">{{item.description}}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "colaboradores",
  data() {
    return {
      data: [
        {
          src: "ms-logo.png",
          title: "MS",
          description: "Ministério da Saúde",
          url: "#"
        },
        {
          src: "ifce-logo.png",
          title: "IFCE",
          description:
            "Instituto Federal de Educação, Ciência e Tecnologia do Ceará",
          url: "#"
            
        },
        {
          src: "ifce-logo.png",
          title: "IFCE",
          description:
            "Instituto Federal de Educação, Ciência e Tecnologia do Ceará",
           url: "#"
        
        },
      ],
      year: new Date().getFullYear(),
    };
  },
};
</script>
<style>
img {
  width: 100px;
  height: 100px;
  margin-bottom: 1rem;
}

.page-cards {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
}

.page-cards h3 {
  font-size: 1.35rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
}
</style>
