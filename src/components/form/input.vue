<template>
  <input class="input" :type="type" v-model="modelValue" />
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  type: {
    type: String,
    required: true
  },
  modelValue: {
    type: String,
    required: true
  }
})

const inputField = ref(null)
</script>

<style scoped></style>
