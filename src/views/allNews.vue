<template>
  <div class="news">
    <h1 class="news_title">{{ newsTitle }}</h1>
    <div class="posts">
      <posts />
    </div>
  </div>
</template>

<script setup>
let newsTitle = ref('Все новости')
</script>

<style lang="scss" scoped></style>
