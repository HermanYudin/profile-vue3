<template>
  <div class="profile">
    <profileImg />
    <div class="profile_text">
      <profileName />
      <profileEmail />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.profile {
  display: flex;
  align-items: center;
  border-bottom: 1px solid lightgray;
  padding-bottom: 10px;
  padding-right: 30px;
  max-width: 500px;
}

.profile_text {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 10px;
}
</style>
