<template>
  <div class="container max-w-sm px-2 flex-1">
      <header class="flex flex-col py-2">
        <h1 class="text-xl text-center p-3 bg-blue-700 text-white">
          Probeaufgabe
        </h1>
        <product-filter />
      </header>

      <main class="p-2">
        <h2 class="text-xl font-bold">{{ header.headerTitle }}</h2>
        <p class="text-gray-500 text-xl mb-2">{{ header.headerDescription }}</p>

        <div class="cradWrapper flex flex-col gap-2">
          <div
            v-for="(item, key) in products" :key="key"
            class="flex flex-col border border-gray-300 rounded-lg px-4 py-4"
          >
            <div class="flex justify-center space-x-3">
              <img
                v-if="item.available"
                :src="item.imageURL"
                alt="Product"
                class="h-2/3 w-1/4 mt-1"
              />
              <div class="flex flex-col w-full">
                <div class="flex justify-between">
                  <router-link :to="'/product/' + item.id" class="text-gray-700 text-base font-bold">{{ item.name }}</router-link>
                  <p class="text-gray-500 text-sm">{{ formattedDate(item.releaseDate) }}</p>
                </div>
                <p class="text-gray-700 text-base">
                  {{ item.description }}
                </p>
                <div class="flex justify-between items-center">
                  <p class="text-gray-700 text-sm">
                    <span class="font-bold">Price</span>: {{ item.price.value }} {{ item.price.currency }}
                  </p>
                  <rating :value="item.rating" />
                </div>
              </div>
              <img
               v-if="!item.available"
               :src="item.imageURL"
                alt="Product"
                class="h-2/3 w-1/4 mt-1"
              />
            </div>
          </div>
        </div>

        <div class="flex flex-col justify-center items-center mt-5">
          <div class="h-2 w-2 bg-gray-600 rounded-full"></div>
          <div class="h-2 w-2 bg-gray-600 rounded-full mt-2"></div>
          <div class="h-2 w-2 bg-gray-600 rounded-full mt-2"></div>
        </div>

        <p class="text-gray-600">Footer text..</p>
      </main>
    </div>
    <footer class="bg-gray-200 px-3 py-2">
      <product-filter />
    </footer>
</template>
<script setup lang="ts">
import ProductFilter from '@/components/ProductFilter.vue';
import Rating from '@/components/Rating.vue';
import {computed} from "vue";
import { useStore } from 'vuex';
import moment from 'moment';

const store = useStore();

const products = computed(() => {
    return store.getters['product/getProduts'];
});

const header = computed(() => {
    return store.getters['product/getHeader'];
});

const formattedDate = (date) => moment.unix(date).format('DD.MM.YYYY');
</script>