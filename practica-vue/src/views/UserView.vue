<template>
    <div>
        <Links/>
        <div v-if="!isLoading" class="userView">
        <Cards>
            <template v-slot:image>
                <div><img src="authUser.avatar" alt=""></div>
            </template>
            <template v-slot:header>
            <h2 class="user-name">{{ authUser.name }}</h2>
            </template>
            <template v-slot:body>
            <p class="user-mail">{{ authUser.email }}</p>
            </template>
            <template v-slot:footer>
            <h2>Role: {{ authUser.role }}</h2>
            </template>
        </Cards>
        </div>
        <div v-else>
        Loading
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Links from "../components/Links.vue";
import Cards from "../components/Cards.vue";
import useAuthUser from '../Composables/useAuthUser';
export default defineComponent({
  name: 'ProfileView',
  components: {
        Links,
        Cards
  },
  setup() {
    
    const {authUser, isLoading, fetchAuthUser } = useAuthUser();
    fetchAuthUser();
    return{
      authUser, 
      isLoading, 
      fetchAuthUser
    }
  },
})
</script>

<style scoped>
.userView{
    display: flex;
    justify-content: center;
    margin: 20px;
}

</style>