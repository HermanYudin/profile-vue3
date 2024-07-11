<template>
  <div class="add-news">
    <h1 class="add-news_title">{{ addNewsTitle }}</h1>
    <formMain />
  </div>
</template>

<script setup>
let addNewsTitle = ref('Добавить запись')
</script>

<style lang="scss" scoped></style>
