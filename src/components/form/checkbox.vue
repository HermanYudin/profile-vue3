<template>
  <div class="checkbox_container">
    <input
      type="checkbox"
      :checked="modelValue"
      @input="$emit('update:modelValue', $event.target.checked)"
      class="checkbox"
    />
    <span class="checkbox_label" @click="$emit('update:modelValue', !modelValue)">{{ label }}</span>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
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
.checkbox {
  margin-right: 5px;
  cursor: pointer;

  &_container {
    cursor: pointer;
  }
}
</style>
