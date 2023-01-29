<!-- eslint-disable vue/no-unused-components -->
<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<script lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { defineComponent, ref } from "vue";
import  NavBar  from "./components/Navigation.vue";
export default defineComponent({
  name: "AppComponent",
  components: {
      // eslint-disable-next-line vue/no-unused-components
      NavBar,
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #162b21;
}
</style>
