<template>
  <button class="btn" @click="$emit('submit')">
    {{ label }}
  </button>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  label: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['submit'])
</script>

<style lang="scss" scoped>
.btn {
  width: 150px;
  padding: 10px;
  border: 1px solid #8094ee;
  color: #8094ee;
  background-color: white;
  border-radius: 5px;
  margin-left: auto;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #8094ee;
    border: 1px solid white;
    color: white;
  }
}
</style>
