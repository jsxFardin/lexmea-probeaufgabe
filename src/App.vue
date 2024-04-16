<template>
  <div class="font-sans bg-gray-100 flex flex-col min-h-screen">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useStore } from 'vuex';

const store = useStore();

onMounted( async () => {
  await store.dispatch('product/fetchProducts');
})
</script>

<style>
#app {
  @apply antialiased flex flex-col items-center mt-4;
}
</style>
