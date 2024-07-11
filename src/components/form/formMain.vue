<template>
  <div class="form_container">
    <form class="form" @submit.prevent="handleSubmit">
      <input
        class="input"
        v-model="formData.name"
        type="text"
        label="Name"
        placeholder="Ваше имя"
      />
      <input class="input" v-model="formData.email" type="text" label="Name" placeholder="Email" />
      <div class="radios">
        <radio class="radio" v-model="formData.gender" label="Мужской" value="Мужской" />
        <radio class="radio" v-model="formData.gender" label="Женский" value="Женский" />
      </div>
      <div class="textarea_container">
        <span class="symbols">Символов: {{ formData.description.length }}</span>
        <textarea
          class="textarea"
          v-model="formData.description"
          label="Description"
          placeholder="Сообщение"
          :maxlength="200"
        />
      </div>
      <div class="checkbox-container">
        <checkbox v-model="formData.agree" label="Согласен на обработку персональных данных" />
      </div>
      <span class="validation" v-if="validation">Пожалуйста, заполните форму полностью</span>
      <btn label="Отправить" />
    </form>
    <div class="form_result" v-if="showResult">
      <span class="result name">Имя: {{ resName }}</span>
      <span class="result email">Email: {{ resEmail }}</span>
      <span class="result gender">Пол: {{ resGender }}</span>
      <span class="result description">Сообщение: {{ resDesc }}</span>
      <span class="result agree">Согласие на обработку персональных данных: {{ resAgree }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  description: '',
  agree: false,
  gender: ''
})

let resName = ''
let resEmail = ''
let resDesc = ''
let resGender = ''
let resAgree = false

const validation = ref(false)

const showResult = ref(false)

const handleSubmit = () => {
  if (
    !formData.value.name ||
    !formData.value.email ||
    !formData.value.description ||
    !formData.value.gender ||
    !formData.value.agree
  ) {
    validation.value = true
    return
  } else {
    validation.value = false
    resName = formData.value.name
    resEmail = formData.value.email
    resDesc = formData.value.description
    resGender = formData.value.gender
    resAgree = formData.value.agree
    showResult.value = true
    formData.value.name = ''
    formData.value.email = ''
    formData.value.description = ''
    formData.value.gender = ''
    formData.value.agree = false
  }
}
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 30px;
  background-color: white;

  &_container {
    display: flex;
    gap: 50px;
  }

  &_result {
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 50%;
    margin-right: 50px;
    gap: 20px;
    padding: 30px;
  }
}

.input {
  padding-left: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  min-height: 35px;
  margin-bottom: 15px;
  outline-color: #8094ee;
}

.radios {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.textarea {
  min-height: 100px;
  outline-color: #8094ee;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  font-size: 15px;

  &_container {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }
}

.symbols {
  text-align: end;
  margin-bottom: 5px;
}

.checkbox-container {
  display: flex;
  margin-bottom: 30px;
}

.validation {
  text-align: center;
  color: red;
  margin-bottom: 20px;
}
</style>
