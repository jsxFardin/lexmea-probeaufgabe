<template>
  <div class="container max-w-sm px-2 flex-1">
    <header class="flex flex-col py-2">
      <h1 class="text-xl text-center p-3 bg-blue-700 text-white">
        AppTitle...
      </h1>
    </header>
     <main class="p-2">
        <div class="cradWrapper flex flex-col mb-2">
          <div class="flex flex-col rounded-lg px-2 py-2">
            <div class="flex justify-center space-x-4">
              <img
                :src="productDetails && productDetails.imageURL"
                alt="Product"
                class="h-2/3 w-1/4 mt-1"
              />
              <div class="flex flex-col w-full">
                <p class="text-gray-700 text-xl font-bold mb-2">{{ productDetails && productDetails.name }}</p>
                <p class="text-gray-700 text-base mb-1">
                  <span class="font-bold">Price</span>: {{ productDetails && productDetails.price && productDetails.price.value }} {{ productDetails && productDetails.price && productDetails.price.currency }}
                </p>
                <div class="flex justify-between items-center">
                  <rating :value="productDetails && productDetails.rating" />
                  <p class="text-gray-500 text-sm">{{ formattedDate(productDetails && productDetails.releaseDate) }}</p>
                </div>
              </div>
            </div>
          </div>
          <p class="text-gray-700 text-base">
            {{ productDetails && productDetails.description }}
          </p>
        </div>

        <button
          class="text-xl w-full text-center p-2 bg-blue-700 text-white mb-4"
        >
          Remember
        </button>

        <p class="text-gray-700 text-xl font-bold">{{ productDetails && productDetails.name }}</p>
        <p class="text-gray-400 text-xl mb-10 leading-tight tracking-tight">
          {{ productDetails && productDetails.longDescription }}
        </p>

        <p class="text-gray-400 font-bold tracking-tighter">Footer text..</p>
    </main>
  </div>
</template>
<script setup lang="ts">
import {computed} from "vue";
import Rating from '@/components/Rating.vue';
import { useStore } from 'vuex';
import {useRoute } from 'vue-router';
import moment from 'moment';
const store = useStore();
const formattedDate = (date) => moment.unix(date).format('DD.MM.YYYY');


const productDetails = computed(() => {
  const productId = useRoute().params.id;
  if(productId){
    return store.getters['product/getProductById'](useRoute().params.id);
  }
  return {};
});
</script>