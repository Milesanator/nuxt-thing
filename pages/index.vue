<template>
  <div>
    <form class="pa4" @submit.prevent="add(task)">
      <input v-model="task" type="text" />
      <input type="submit" value="Add" />
    </form>
    <section class="container">
      <div class="ph4">
        <div class="title">Todo</div>
        <ul class="list pl0">
          <li v-for="(todo, index) in todos" :key="index" class="pv4 flex">
            <span v-bind:class="{strike: todo.complete}" class="flex-auto">{{ todo.text }}</span>
            <button @click="toggle(todo)"><img src="https://icon.now.sh/check" alt="Complete" /></button>
            <button @click="remove(todo)"><img src="https://icon.now.sh/trash" alt="Delete" /></button>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { init } from './shared'
 
export default {
  fetch: init,
  data() {
    return {
      task: ''
    }
  },
  computed: {
    ...mapState({
      todos: state => state.todos
    })
  },
  
  methods: {
    ...mapActions([
      'add',
      'remove',
      'toggle'
    ])
  }
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
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

li {
  font-size: 24px;
  text-align: left;
}
</style>

