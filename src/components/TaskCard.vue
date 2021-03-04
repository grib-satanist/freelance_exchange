<template >
  <div class="card">
    <h2 class="card-title">
      {{task.name}}
      <AppStatus :type="'done'" :status="task.status"/>
    </h2>
    <p>
      <strong>
        <small>
          {{task.date}}
        </small>
      </strong>
    </p>
    <router-link :to="'/task/' + task.id">
      <button class="btn primary">Посмотреть</button>
    </router-link>
  </div>
</template>


<script>
import AppStatus from '../components/AppStatus'

export default {
  components: {AppStatus},
  props: ['task']
}
</script>