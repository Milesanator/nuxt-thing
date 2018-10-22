<template>
  <section class="container">
    <div class="pv4">
      <ul class="list pl0">
        <li v-for="(todo, index) in todos" :key="index">
          {{ todo.task }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      todos: state => state.todos
    })
  },
}
</script>

<style>
.container {
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
}

.title {
  color: #35495e;
  cursor: pointer;
  display: block;
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  font-size: 100px;  
  font-weight: 300;
  letter-spacing: 1px;
}
</style>

