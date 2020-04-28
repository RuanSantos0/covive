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
                    <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 py-lg-5"
                          class="border-0">
                        <template>
                            <div class="text-center text-muted mb-4">
                                <h5>Login</h5>
                            </div>
                            <small v-if="showMessage" class="infoError">Login e senha incorretos</small>
                            <form role="form">
                                <base-input 
                                    v-model="model.email"
                                    alternative
                                    class="mb-3"
                                    placeholder="Email"
                                    addon-left-icon="ni ni-email-83">
                                </base-input>
                                <base-input
                                    v-model="model.senha" 
                                    alternative
                                    type="password"
                                    placeholder="Password"
                                    addon-left-icon="ni ni-lock-circle-open">
                                </base-input>
                                <div class="text-center">
                                    <base-button @click.prevent="login" type="primary" class="my-4">Entrar</base-button>
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
import axios from 'axios'
export default {
    data(){
        return{
            showMessage:false,
            model: {email: '',senha:''}
        }
    },
    created(){
      
    },
    mounted(){},
    methods: {
        login(){
            this.showMessage = false;
                
            const request = axios.create({baseURL: 'http://localhost:3333'})
            request.post('/sessions', this.model).then(res => {
                localStorage.setItem("user-token", res.data.token)
                localStorage.setItem("user-data", JSON.stringify(res.data.user))
                this.$router.push('/')
            }).catch(e => {
                this.showMessage = true;
            })
                
            
        }
    }
};
</script>
<style>
.infoError{
    color: red;
    text-align:center
}
</style>
