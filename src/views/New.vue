<template>
  <form class="card" @submit.prevent="submit">
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

    <router-link to="/">
      <button class="btn primary" :disabled="!formValid">Создать</button>
    </router-link>
  </form>
</template>


<script>
import {computed, reactive} from 'vue'
import {useStore} from 'vuex'

export default {
  setup() {
    const store = useStore()  

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

    const submit = () => {
      store.commit('addTask', {
        name: task.titleValue,
        date: task.dateValue,
        text: task.textValue,
        id: Date.now()
      })

      for (let key in task) {
        task[key] = ''
      }
    }

    return {
      formValid,
      task,
      submit
    }
  }
}

</script>