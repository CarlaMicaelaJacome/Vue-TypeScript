<template>
    <div class="login">
        <h1 class="title">Nice to see you here!</h1>
        <form class="form" @submit.prevent="getToken">
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">E-mail</label>
            <input v-model.lazy="email" type="email" class="log-form" id="exampleInputEmail1" aria-describedby="emailHelp" required>
            <div id="emailHelp" class="form-text"></div>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input v-model.lazy="password" type="password" class="log-form" id="exampleInputPassword1" required>
        </div>
        <button type="submit" class="btn">Submit</button>
        </form>
    </div>
</template>
  
  <script lang="ts">
  import { defineComponent, ref } from "vue";
  import useAuthUser from "../Composables/useAuthUser";
  export default defineComponent ({
    setup() {
        const { fetchToken } = useAuthUser();
        let email = ref("");
        let password = ref("");
        const getToken = () => {
            fetchToken({email: email.value, password: password.value});
        }
        return{
            email,
            password,
            getToken
        }
    }
  });
  </script>
  
  <style scoped>
  .title{
    margin: 20px;
    text-align: center;
    background-color: #ffebcd;
  }
  .form{
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 25px;
    width: 33%;
  }
  </style>