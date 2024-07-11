<template>
  <img class="profile-img" :src="profileImg" alt="profile" />
</template>

<script setup>
const profileImg = 'https://picsum.photos/200'
</script>

<style lang="scss" scoped>
.profile-img {
  border-radius: 50%;
  max-width: 100px;
}
</style>
