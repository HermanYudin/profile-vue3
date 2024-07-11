<template>
  <div class="radio">
    <input
      type="radio"
      :checked="modelValue === value"
      @input="$emit('update:modelValue', value)"
      class="radio_field"
    />
    <span class="radio_label" @click="$emit('update:modelValue', value)">{{ label }}</span>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  modelValue: {
    type: [String, Number],
    required: true
  },
  value: {
    type: [String, Number],
    required: true
  },
  label: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['update:modelValue'])
</script>

<style lang="scss" scoped>
.radio {
  display: flex;
  gap: 5px;
  cursor: pointer;

  &_field {
    cursor: pointer;
  }
}
</style>
