<template>
  <div class="card" v-if="openTask">
    <h2>{{openTask.name}}</h2>
    <p><strong>Статус</strong>: <AppStatus :type="'done'" :status="openTask.status"/></p>
    <p><strong>Дэдлайн</strong>: {{ openTask.date }}</p>
    <p><strong>Описание</strong>: {{ openTask.text }}</p>
    <div>
      <button class="btn" @click="updateStatus('pending')">Взять в работу</button>
      <button class="btn primary" @click="updateStatus('done')">Завершить</button>
      <button class="btn danger" @click="updateStatus('cancelled')">Отменить</button>
    </div>
  </div>
  <h3 class="text-white center" v-else>
    Задачи с id = <strong>{{$route.params.taskId}}</strong> нет.
  </h3>
</template>

<script>
import AppStatus from '../components/AppStatus'
import {computed, onMounted} from 'vue'
import {useStore} from 'vuex'
import {useRoute} from 'vue-router'

export default {

  components: {AppStatus},
  setup() {
    const store = useStore()
    const route = useRoute()

    onMounted(() => {
      store.commit('loadTasks')
    })

    const openTask = computed(() => {
      return store.getters.tasks.find(e => e.id == route.params.taskId)
    })

    const updateStatus = (status) => {
      store.commit('updateStatus', {
        status,
        taskId: route.params.taskId
      })
    }

    return {
      openTask,
      updateStatus
    }
  }
}
</script>

<style scoped>

</style>