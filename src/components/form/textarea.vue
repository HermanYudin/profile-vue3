<template>
  <textarea v-model="modelValue" class="textarea"></textarea>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    required: true
  }
})
</script>

<style scoped></style>
