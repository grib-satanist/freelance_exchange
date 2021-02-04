<template>
  <form class="card">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model="task.titleValue">
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" id="date" v-model="task.dateValue">
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model="task.textValue"></textarea>
    </div>

    <button class="btn primary" @click.prevent="test" :disabled="!formValid">Создать</button>
  </form>
</template>


<script>
import {computed, reactive} from 'vue'

export default {
  setup() {
    const task = reactive({
      titleValue: '',
      dateValue: '',
      textValue: ''
    })

    const formValid = computed(() => {
      let isValid = true

      for (let key in task) {
        if (task[key] === '') {
          isValid = false
        }
      }
      return isValid
    })

    
    return {
      formValid,
      task
    }
  }
}

</script>