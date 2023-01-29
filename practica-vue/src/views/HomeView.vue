<!-- eslint-disable vue/no-unused-components -->
<!-- eslint-disable vue/no-unused-components -->
<template>
  <div>
    <Links @showAll="showAllProducts"/>
    <form @submit.prevent="validateInput">
      <div class="input">
        <input v-model.lazy="inputFilter" type="text" class="log-form" placeholder="Search by name..." aria-label="Recipient's username" aria-describedby="button-addon2" minlength="3">
        <button class="" type="submit" id="button">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
        </button>
      </div>
    </form>
    <Buttons @previous="showPrevious" @next="showNext"/>
    <div class="home">
      <div v-if="isLoading"> Loading... </div>
      <div class="items" v-else>
        <Products v-for="product in productsFiltered" :key="product.id" :product="product" @goDetail="goDetail"/>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue';
import Items from '../components/Items.vue';
import useProducts from '../Composables/useProducts';
import Buttons from '../components/Buttons.vue';
import { Product } from '../models/Product';
import { useRouter } from 'vue-router';
import Links from "../components/Links.vue";
import Products from '@/store/Products';
export default defineComponent({
  name: 'HomeView',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Items,
    // eslint-disable-next-line vue/no-unused-components
    Links,
    Buttons,
  },
  setup(){
    const {products, productsFiltered, isLoading, productsLength, fetchProducts, fetchProductByTitle, fetchProductByPagination } = useProducts();
    const router = useRouter();
    let inputFilter = ref(""); 
    const limitShow = 20;
    const showAllProducts = () => {
      fetchProductByPagination({offset: 0, limit: limitShow});
    }
    fetchProductByPagination({offset: 0, limit: limitShow}); 
    const validateInput = () => {
      const filter = inputFilter.value.toLowerCase();
      
      for(let i = 0; i < productsLength.value; i++){
        if (products.value[i].title.toLowerCase().includes(filter)){    
          const titleArray = products.value[i].title.split(" ");
          for(let j = 0; j < titleArray.length; j++){
            if(titleArray[j].toLowerCase().includes(filter)){
              fetchProductByTitle(titleArray[j]);
            }
          }
        }
      }
    }
    

    let offset = 0;
    const showPrevious = () =>{
      if (offset == 0){
        alert('oops!')
      }else{
        offset = offset - 20;
        fetchProductByPagination({offset: offset, limit: limitShow});
      }
    }
  
    
    const showNext = () =>{
      if (offset >= productsLength.value){
        alert('Nothing else to show')
      }else{
        offset = offset + 20;
        fetchProductByPagination({offset: offset, limit: limitShow});
      }
    }
    return {
      products,
      productsFiltered, 
      isLoading,
      goDetail: (product: Product)=> router.push({name: 'detail', params: {id: product.id}}),
      inputFilter,
      validateInput,
      showAllProducts,
      showPrevious,
      showNext
    }
  }
});
</script>

<style scoped>
.input{
  height: 25px;
  font-size: 16px;
  color: #000000;
}

.log-form{
  position: relative;
}

.items{
  display: flex;
  justify-content: space-between;
  width: 100%;
}
</style>

