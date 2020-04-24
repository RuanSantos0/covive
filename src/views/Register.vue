<template>
  <section class="section section-shaped section-lg my-0">
    <div class="shape shape-style-1 bg-gradient-default">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="container pt-lg-md">
      <div class="row justify-content-center">
        <div class="col-lg-5">
          <card
            type="secondary"
            shadow
            header-classes="bg-white pb-5"
            body-classes="px-lg-5 py-lg-5"
            class="border-0"
          >
            <template>
              <div class="text-center text-muted mb-4">
                Cadastro
              </div>
              <form role="form">
                <base-input
                  alternative
                  class="mb-3"
                  placeholder="Nome"
                  addon-left-icon="fa fa-user"
                >
                </base-input>
                <base-input
                  alternative
                  type="password"
                  placeholder="Senha"
                  addon-left-icon="ni ni-lock-circle-open"
                >
                </base-input>

                <base-checkbox class="mb-3" v-model="checkboxes.unchecked">
                  Eu sou um administrador.
                </base-checkbox>

                <div class="text-center">
                  <base-button type="primary" class="my-4"
                    >Criar conta</base-button
                  >
                </div>
              </form>
            </template>
          </card>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      checkboxes: {
            checked: false,
          }
    };
  },
};
</script>

<style lang="scss" scoped></style>
