<template>
  <template v-if="$store.state.tasks.length">
      <h3 class="text-white">Всего активных задач: 0</h3>
    <task-card
      v-for="task in $store.state.tasks" 
      :key="task.id"
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
  
