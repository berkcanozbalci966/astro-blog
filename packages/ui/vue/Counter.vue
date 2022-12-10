<script setup lang="ts">
import { ref } from "vue";
const count = ref(0);
</script>
<template>
  <h1 className="text-3xl">{{ count }}</h1>
  <button className="btn" @click="count++">+</button>
  <button className="btn" @click="count--">-</button>
</template>

<style lang="scss" scoped></style>
