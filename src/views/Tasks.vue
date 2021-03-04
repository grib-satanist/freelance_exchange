<template>
  <template v-if="$store.getters.tasks.length">
      <h3 class="text-white">Всего активных задач: {{$store.getters.activeTask}}</h3>
    <task-card
      v-for="task in $store.getters.tasks" 
      :key="task.id"
      :task="task"
    ></task-card>
  </template>
  

  <template v-else>
    <h1 class="text-white center">Задач пока нет</h1>
  </template>
</template>


<script>
import TaskCard from '../components/TaskCard.vue'
import {onMounted} from 'vue'
import {useStore} from 'vuex'


export default {
  setup() {
    const store = useStore()
    onMounted(() => {
      store.commit('loadTasks')
      store.commit('countActiveTask')
    })
  
    return
  },
  components: { TaskCard }
}
</script>

<style scoped>
  span {
    color: aliceblue;
  }
</style>>
  
