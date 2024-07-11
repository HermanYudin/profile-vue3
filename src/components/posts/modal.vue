<template>
  <div class="modal">
    <span class="modal_text">Вы действительно хотите удалить эту запись?</span>
    <div class="modal_btns">
      <btn label="Да" />
      <btn label="Нет" />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.modal {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  max-height: 200px;
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  position: fixed;
  top: 20%;
  left: 45%;
  z-index: 4;

  &_text {
    text-align: center;
    margin-bottom: 30px;
  }

  &_btns {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
}
</style>
