<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<template>
    <div>
        <Links/>
        <div v-if="!isLoading" class="AboutView">
            <Cards>
                <template v-slot:image>
                    <div v-if="!activePhoto" class="User">
                        <div class="image"><img :src="product.images[0]" class="" alt=""></div>
                    </div>
                    <div v-else>
                        <div class="image"><img :src="activePhoto" class="" alt=""></div>
                    </div> 
                    <div class="photos">
                        <div v-for="(image, index) in product.images" :key="index">
                                <img :src=image class="" @click="changeactivePhoto(index)">
                        </div>
                    </div>
                </template>
                <template v-slot:header>
                    <h2 class="title">{{ product.id }} - {{ product.title }}</h2>
                </template>
                <template v-slot:body>
                    <p class="card-data">{{ product.description }}</p>
                </template>
                <template v-slot:footer>
                    <h2>Price: € {{ product.price }}</h2>
                </template>
            </Cards>
        </div>
        <div v-else>Almost there...</div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, onMounted, ref } from "vue";
import useProducts from "../Composables/useProducts";
import Links from "../components/Links.vue";
import Cards from "../components/Cards.vue";
export default defineComponent({
    name: "DetailView",
    components: {
        Links,
        Cards,
    },
    props: {
        id: {
            type: Number,
            required: true
        }
    },
    setup(props) {
        const {product, fetchProductById, isLoading} = useProducts();
        fetchProductById(props.id);
        let activePhoto = ref();   
        const changeactivePhoto = (index: number) => {
            activePhoto.value = product.value.images[index];
        }
        return {
            product,
            isLoading,
            activePhoto,
            changeactivePhoto
        }
    }
})
</script>

<style scoped>
.detailView {
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
}
.photos {
    width: 900px;
    display:flex;
    
}
.photos img {
    width: 150px;
    margin:5px;
    border-radius: 8px;
    justify-content: center;
    display: flex;
}
</style>