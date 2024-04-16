<template>
     <div
          class="flex justify-between items-center space-x-2 bg-gray-200 py-2 px-3 text-xl">
        <button class="px-2 py-1 font-bold text-gray-500 hover:text-gray-700"
            v-for="(filter, key) in filters" :key="key">
            {{ filter }}
        </button>
    </div>
</template>

<script setup lang="ts">
    import { computed } from 'vue';
    import { useStore } from 'vuex';
    const store = useStore();

    const filters = computed(() => {
        return store.getters['product/getFilters'];
    });

</script>