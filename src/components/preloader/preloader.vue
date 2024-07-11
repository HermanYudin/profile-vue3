<template>
  <div class="preloader"></div>
</template>

<script setup></script>

<style lang="scss" scoped>
.preloader {
  -webkit-animation: spin 2s infinite linear;
  -moz-animation: spin 2s infinite linear;
  -o-animation: spin 2s infinite linear;
  animation: spin 2s infinite linear;

  width: 5em;
  height: 5em;
  border: 0.75em solid gray;
  border-left: 0.6em solid #eef5f5;
  border-radius: 50%;

  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

@-webkit-keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@-moz-keyframes spin {
  100% {
    -moz-transform: rotate(360deg);
  }
}

@-o-keyframes spin {
  100% {
    -o-transform: rotate(360deg);
  }
}
@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
</style>
