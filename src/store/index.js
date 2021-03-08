import { createStore } from 'vuex'

const saveToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data))
}

export default createStore({
  state() {
    return {
      tasks: []
    }
  },
  getters: {
    activeTask(state) {
      return state.activeTask
    },
    tasks(state) {
      return state.tasks
    },
    countActiveTask(getters) {
      return getters.tasks.filter(a => a.status ==='active').length
    },
  },
  mutations: {
    addTask(getters, payload) {
      getters.tasks.push(payload)
      saveToLocalStorage('tasks', getters.tasks)
    },
    updateStatus(getters, arg) {
      const task = getters.tasks.find(e => e.id == arg.taskId)
      task.status = arg.status
      saveToLocalStorage('tasks', getters.tasks)
    }
  },
  actions: {
    loadTasks(context) {
      if (localStorage.getItem('tasks') !== null) {
        const data = JSON.parse(localStorage.getItem('tasks'))
        context.state.tasks = Object.keys(data).map( key => {
          return {
            ...data[key]
          }
        })
      }
    }
  },
  modules: {
  }
})