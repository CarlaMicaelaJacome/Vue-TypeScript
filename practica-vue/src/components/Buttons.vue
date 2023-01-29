<template>
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item"><a class="page-link" href="#" @click="$emit('previous')">See previous items</a></li>
        <li class="page-item"><a class="page-link" href="#" @click="$emit('next')">See next items</a></li>
      </ul>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'CustomCard',
})
</script>

<style>
a{
  width: 150px;
}
</style>