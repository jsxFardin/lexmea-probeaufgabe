<template>
    <div>
      <span v-for="n in totalStars" :key="n" class="cursor-pointer">
        <font-awesome-icon :icon="faStar" :class="{ 'text-yellow-500': n <= value, 'text-gray-300': n > value }"/>
      </span>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';

library.add(faStar)

defineProps({
  value: {
    type: Number,
    default: 0
  }
})
const totalStars = ref(5);

</script>