<template >
  <div class="card">
    <h2 class="card-title">
      Название задачи
      <AppStatus :type="'done'" />
    </h2>
    <p>
      <strong>
        <small>
          {{new Date().toLocaleDateString()}}
        </small>
      </strong>
    </p>
    <button class="btn primary">Посмотреть</button>
  </div>
</template>


<script>
import AppStatus from '../components/AppStatus'

export default {
  components: {AppStatus}
}
</script>