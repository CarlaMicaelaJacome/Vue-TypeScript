<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <header class="Title">
        <div>
        <img src="../assets/logo.png" alt="logo" width="250px" height="250px">
        </div>
    </header>
</template>

<script lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { defineComponent, ref } from "vue";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface NavBarProps {
  title: string,
}
export default defineComponent({
    name: "NavBar",
    props: {
        title: {
            type: String,
            required: true,
            default: "Super shop"
        },
    }
})
</script>

<style scoped>
    nav{
        background-color: #faebd7;
        color: #000000;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 150px;
        font-weight: bolder;
    }
</style>
