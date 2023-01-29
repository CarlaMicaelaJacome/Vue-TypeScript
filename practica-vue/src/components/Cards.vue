<template>
    <div class="Card">
        <slot name="img"></slot>
        <div class="Card-Desing">
            <slot name="Header"></slot>
            <slot name="Body"></slot>
            <slot name="Footer"></slot>
        </div>
        
    </div>
</template>

<script lang="ts">
  import { defineComponent } from "@vue/runtime-core";
  export default defineComponent({
      name: "Cards-",
  });
  </script>

  <style scoped>
 .Card{
    width: 300px;
    min-height: 150px;
    border: 2px solid #808000;
 }
  </style>