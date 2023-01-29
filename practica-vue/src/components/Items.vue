<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="items">
        <div class="box">
            <div class="card">
            <img :src="product.images[0]" class="" :alt="product.title">
            <div class="body">
                <h5 class="title">{{ product.id }}. {{ product.title }}</h5>
                <p class="price">Price: {{ product.price }}$</p>
                <a class="link"  @click="$emit('goDetail', product)">See more</a>
            </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Product } from '../models/Product'
export default defineComponent({
    props: {
        product:{
            type: Object as PropType<Product>,
            required: true,
        }
    },
})
</script>

<style scoped>
    .items{
        display: flex;
        width: 250px;
        margin-top: 15px;
        margin-left: 15px;
    }
</style>