<template>
  <span :class="['badge', statusClass()]">{{statusName()}}</span>
</template>

<script>
export default {
  props: ['status'],
  setup(props) {

    const statuses = {
      active: {
        name: 'Активен',
        class: 'primary'
      },
      cancelled: {
        name: 'Отменен',
        class: 'danger'
      },
      pending: {
        name: 'Выполняется',
        class: 'warning'
      },
      done: {
        name: 'Завершен',
        class: 'primary'
      }
    }

    const statusName = () => {
      return statuses[props.status].name
    }

    const statusClass = () => {
      return statuses[props.status].class
    }

    return {
      statuses,
      statusName,
      statusClass
    }
  }
}
</script>