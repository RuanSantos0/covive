<template>
  <section>
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
                <h1 class="display-3  text-white">Formulário Customizado</h1>
                <p class="lead  text-white">
                  <input
                    placeholder="Nome do Formulário"
                    class="input-transparent"
                    v-model="formulario.nome"
                  />
                  <!-- *algo aqui* -->
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- 1st Hero Variation -->
      <section class="section container section-lg pt-lg-0 mt--200 px-0 ">
        
        <!-- <div v-for="(question, index) in questions" :key="index" class="page-cards col-md-4 col-sm-12 col-12">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img :src="require(`../assets/img/${item.src}`)" />
          </a>
          <h3>{{question.descricao}}</h3>
          <p class="text-center">{{item.description}}</p>
        </div> -->


        <div v-for="(question, index) in questions" :key="index" class="row row-grid mb-2">
          <div class="col-12">
            <base-question v-model="questions[index]"></base-question>
          </div>
        </div>
                <div class="row row-grid">
          <div class="col-12">
            <base-button type="primary" @click="modal.isOpen = true">
              Nova Pergunta
            </base-button>
          </div>
        </div>
      </section>
    </div>
    <!--  -->
    <div class="col-md-6 col-sm-12 col-12">
      <modal :show.sync="modal.isOpen" body-classes="p-0" modal-classes="modal-dialog-centered modal-sm" >
        <card type="secondary" shadow header-classes="bg-white pb-5" body-classes="px-lg-5 py-lg-5" class="border-0" >
          <div>
            <div class="text-left mb-3">
              <h5>Nova Pergunta</h5>
            </div>
          </div>
          <template>
            <form role="form">
              <!-- <base-input alternative placeholder="Nome" v-model="form.nome"></base-input> -->
              <base-input
                alternative
                placeholder="Descrição da Pergunta"
                v-model="currentQuestion.descricao"
              ></base-input>
              <select v-if="!currentQuestion.descricao" disabled="disabled" class="form-control custom-select without-border">
                <option disabled selected>Tipo da Pergunta</option>
              </select>
              <select v-else v-model="currentQuestion.tipo" placeholder="Asdasd" class="form-control custom-select without-border custom-margin">
                <option disabled selected>Tipo da Pergunta</option>
                <option value="texto">Texto</option>
                <option value="opcao">Multipla escolha</option>
              </select>
            </form>
            <base-button type="danger" class="my-4" @click="cancel" >Cancelar</base-button>
            <base-button type="primary" class="my-4" @click="newQuestion">Salvar</base-button>
          </template>
        </card>
      </modal>
    </div>
  </section>
</template>

<script>
import Modal from "@/components/Modal.vue";
import BaseQuestion from "./components/BaseQuestion.vue"
import axios from "axios"

export default {
  components: {
    Modal,
    BaseQuestion
  },
  data () {
    return {
      modal: {
        isOpen: false,
        options: [],
        option: '',
        newOption: ''
      },
      formulario: {
        nome: ""
      },
      currentQuestion: {
        descricao: '',
        tipo: '',
        opcao: '',
        valor: '',
        formulario_id: 1
      },
      questions: []
    }
  },
  mounted () {
    console.log("Params", this.$route.params);
    const form_id = "e4f9002e-b15b-4245-9f4f-5a7ef4b7d2f1"

    // axios.get('https://covive-api.herokuapp.com/formularios/id/perguntas', { headers: { "formulario_id": "e4f9002e-b15b-4245-9f4f-5a7ef4b7d2f1" } }).then(
    //   res => {
    //     this.questions = res.data
    //     console.log(res.data)
    //   }
    // )
  },

  methods: {
    addNewOption () {
      if ( this.modal.newOption ) {
        this.modal.options.push(this.modal.newOption)
        this.modal.newOption = ''
      }
    },
    newQuestion () {
      this.questions.push({...this.currentQuestion})
      this.cancel()
      console.log(this.questions);
    },
    cancel () {
      this.modal = { isOpen: false, options: [], option: '', newOption: '' },
      this.currentQuestion = { descricao: '', tipo: '', opcao: '', valor: '', formulario_id: 1 }
    }
  }
}
</script>

<style lang="scss" scoped>
.without-border {
  border: none;
  // border-radius: 0px;
  box-shadow: 0 1px 3px rgba(50, 50, 93, 0.15), 0 1px 0 rgba(0, 0, 0, 0.02);
  padding:  0.625rem 0.75rem
}

.custom-margin {
  margin-bottom: 0.75rem;
}

.input-transparent {
  background: transparent !important;
  border: none;
  color: white;

  &:focus {
    border-bottom: solid thin white;
  }
}
.bg-white {
  .form-control {
    background-color: white !important;
  }
}

::-webkit-input-placeholder {
   color: white;
}
 
:-moz-placeholder { /* Firefox 18- */
   color: white;  
}
 
::-moz-placeholder {  /* Firefox 19+ */
   color: white;  
}
 
:-ms-input-placeholder {  
   color: white;  
}
</style>