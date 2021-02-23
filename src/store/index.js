import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      tasks: []
    }
  },
  mutations: {
    loadTasks(state) {
      if (localStorage.getItem('tasks') !== null) {
        const data = JSON.parse(localStorage.getItem('tasks'))
        state.tasks = Object.keys(data).map( key => {
          return {
            ...data[key]
          }
        })
      }
    },
    addTask(state, payload) {
      state.tasks.push(payload)
      console.log(payload)

      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    }
  },
  actions: {
  },
  modules: {
  }
})
