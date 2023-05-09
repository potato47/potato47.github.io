<script setup lang="ts">
import { ref } from 'vue';
const date = ref(new Date());
</script>

<template>
    <div class="container">
        <a-calendar v-model="date" />
    </div>
</template>

<style scoped>
.container {
    height: 100%;
    overflow: auto;
}
</style>
