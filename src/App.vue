<template>
  <modal :class="{ 'modal-open': isOpen }" />
  <overlay :class="{ 'overlay-open': isOpen }" />
  <header class="header">
    <div class="container">
      <div class="profile-container">
        <profile />
        <nav class="nav">
          <div class="link_container" v-for="(png, index) in pngs" :key="index">
            <img class="link_png" :src="png" alt="home" />
            <RouterLink
              :class="{ focus: route.path === (index === 0 ? '/' : '/create') }"
              class="link"
              :to="index === 0 ? '/' : '/create'"
            >
              {{ index === 0 ? 'Все новости' : 'Добавить запись' }}
            </RouterLink>
          </div>
        </nav>
      </div>
      <RouterView class="router" />
    </div>
  </header>
</template>

<script setup>
import { useRoute } from 'vue-router'

const pngs = ['../public/png/home.png', '../public/png/pencil.png']
const route = useRoute()
</script>

<style lang="scss" scoped>
.container {
  display: flex;
}

.router {
  width: 100%;
  padding-left: 50px;
  background-color: #eef5f5;
}

.profile-container {
  max-width: 500px;
  min-height: 100vh;
  border-right: 1px solid lightgray;
  padding-top: 30px;
  padding-left: 20px;
  box-shadow: 5px 0 7px rgba(0, 0, 0, 0.2);
  z-index: 2;
}

.nav {
  display: flex;
  flex-direction: column;
  text-decoration: none;
}

.link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000000;
  padding: 10px 0px;
  padding-right: 30px;
  transition: all 0.3s ease-in-out;

  &_container {
    display: flex;
    align-items: center;
    border-bottom: 1px solid lightgray;
  }

  &:hover {
    color: #8094ee;
  }

  &_png {
    content: ' ';
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
}

.focus {
  color: #8094ee;
}
</style>
