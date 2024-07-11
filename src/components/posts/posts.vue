<template>
  <div v-if="posts.length > 0" class="posts">
    <div class="post" v-for="post in posts" :key="post.id">
      <span class="post_id">{{ post.id }}</span>
      <div class="post_main-container">
        <h3 class="post_title" @click="openPost(post.id)">{{ post.title }}</h3>
        <span class="post_user">id автора: {{ post.userId }}</span>
        <p
          class="post_body"
          :class="{ 'animate-open': openBody[post.id] }"
          v-if="openBody[post.id]"
        >
          {{ post.body }}
        </p>
      </div>
      <span class="post_delete" @click="deletePost(post.id)">Удалить</span>
    </div>
  </div>
  <div class="preloader-container" v-else>
    <p class="preloader-text">Пожалуйста, подождите немного, новости скоро появятся...</p>
    <preloader />
  </div>
</template>

<script setup>
import axios from 'axios'

let posts = ref([])
let openBody = ref({})

let openPost = (postId) => {
  if (openBody.value[postId]) {
    openBody.value[postId] = false
  } else {
    openBody.value[postId] = true
  }
}

let deletePost = (postId) => {
  if (confirm(`Вы действительно хотите удалить новость ${postId}?`)) {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(() => {
        posts.value = posts.value.filter((post) => post.id !== postId)
      })
      .catch((error) => {
        console.error(error)
      })
  }
}

onMounted(() => {
  setTimeout(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        posts.value = response.data
      })
      .catch((error) => {
        console.error(error)
      })
  }, 3000)
})
</script>

<style lang="scss" scoped>
.posts {
  background-color: white;
  margin-right: 50px;
  padding: 30px 10px;
}

.post {
  display: flex;
  align-items: center;
  border-bottom: 1px solid lightgray;
  margin: 0px 30px;
  padding-bottom: 10px;

  &_id {
    color: lightgray;
    font-size: 60px;
    width: 15%;
    text-align: center;
  }

  &_title {
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: #8094ee;
    }
  }

  &_main-container {
    width: 70%;
  }

  &_delete {
    width: 10%;
    text-align: center;
    padding: 5px;
    color: #750808;
    cursor: pointer;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: lightgray;
    }
  }

  .animate-open {
    animation: open 0.5s ease;
  }

  @keyframes open {
    0% {
      max-height: 0;
      opacity: 0;
    }
    100% {
      max-height: 100px;
      opacity: 1;
    }
  }
}
</style>
