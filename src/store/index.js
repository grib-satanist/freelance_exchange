import { createStore } from 'vuex'

const saveToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data))
}

export default createStore({
  state() {
    return {
      tasks: [],
      activeTask: 0
    }
  },
  getters: {
    activeTask(state) {
      return state.activeTask
    },
    tasks(state) {
      return state.tasks
    }
  },
  mutations: {
    loadTasks(getters) {
      if (localStorage.getItem('tasks') !== null) {
        const data = JSON.parse(localStorage.getItem('tasks'))
        getters.tasks = Object.keys(data).map( key => {
          return {
            ...data[key]
          }
        })
      }
    },
    addTask(getters, payload) {
      getters.tasks.push(payload)
      saveToLocalStorage('tasks', getters.tasks)
    },
    countActiveTask(getters) {
      getters.activeTask = getters.tasks.filter(a => a.status ==='active').length
    },
    updateStatus(getters, arg) {
      const task = getters.tasks.find(e => e.id == arg.taskId)
      task.status = arg.status
      saveToLocalStorage('tasks', getters.tasks)
    }
  },
  actions: {
  },
  modules: {
  }
})