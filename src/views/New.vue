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

    <button class="btn primary" :disabled="!formValid">Создать</button>
  </form>
</template>


<script>
import {computed, reactive} from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'

export default {
  setup() {
    const store = useStore()
    const router = useRouter()

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
      const statusTask = (Date.parse(task.dateValue) >= Date.now()) ? 'active' : 'cancelled'
      store.commit('addTask', {
        name: task.titleValue,
        date: task.dateValue,
        text: task.textValue,
        status: statusTask,
        id: Date.now()
      })

      for (let key in task) {
        task[key] = ''
      }
      router.push('/')
    }

    return {
      formValid,
      task,
      submit
    }
  }
}

</script>