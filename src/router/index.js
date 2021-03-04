import { createRouter, createWebHistory } from 'vue-router'
import New from '../views/New.vue'
import Tasks from '../views/Tasks.vue'
import Task from '../views/Task.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Tasks
  },
  {
    path: '/new',
    name: 'New',
    component: New
  },
  {
    path: '/task',
    name: 'Tasks',
    component: Task,
    children: [
      { path: ':taskId?', component: Task, props: true }
    ]
  },
  {
    path: '/:notFound(.*)', component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

export default router
