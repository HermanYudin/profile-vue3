<template>
  <a class="email" :href="`mailto:${email}`" target="_blank">{{ email }}</a>
</template>

<script setup>
let email = ref('test@yandex.ru')
</script>

<style lang="scss" scoped>
.email {
  color: gray;
  margin-top: 10px;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
}

.email:hover {
  color: #8094ee;
}
</style>
