<template>
  <section>
    <!-- <base-input
      v-if="model.tipo == 'texto'"
      :label="model.descricao"
      v-model="model.valor"
    /> -->
    <card type="secondary" shadow header-classes="bg-white mb-5" body-classes="px-lg-5 py-lg-5" class="border-green" >
      <template>
        <div v-if="model.tipo == 'texto'">
          <h3 for="">{{ model.descricao }}</h3>
          <input type="text" class="form-control" v-model="model.valor" />
        </div>
        <div v-else-if="model.tipo == 'opcoes'" >
          <h3>{{ model.descricao }}</h3>
          <div class="input-group">
            <div class="custom-control custom-radio mr-3">
              <input
                :checked="model.valor == 'sim'"
                name="custom-radio-1"
                class="custom-control-input"
                id="customRadio1"
                type="radio"
                @click="model.valor = 'sim'"
              >
              <label class="custom-control-label" for="customRadio1">Sim</label>
            </div>

            <div class="custom-control custom-radio mx-3">
              <input
                :checked="model.valor == 'nao'"
                name="custom-radio-1"
                class="custom-control-input"
                id="customRadio2"
                type="radio"
                @click="model.valor = 'nao'"
              >
              <label class="custom-control-label" for="customRadio2">Não</label>
            </div>
          </div>
        </div>
      </template>
    </card>
    
  </section>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  watch: {
    'model.valor' () {
      this.$emit('input', this.model)
    }
  },
  data () {
    return {
      model: {
        descricao: '',
        tipo: '',
        opcao: '',
        valor: '',
      }
    }
  },
  mounted () {
    Object.assign(this.model, this.value)
  }
}
</script>

<style lang="scss" scoped >
.border-green {
  border-left: solid #6874e6 thick;
}
</style>