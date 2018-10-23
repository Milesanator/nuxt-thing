import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      todos: [
      ]
    }),
    mutations: {
      init(state, todos) {
        state.todos = todos
      },
      add(state, todo) {
        state.todos = [...state.todos, todo]
      },

      remove(state, todo) {
        state.todos = state.todos.filter((t) => t.id !== todo.id)
      },

      toggle(state, todo) {
        state.todos = state.todos.map((t) => t.id === todo.id ? todo : t)
      }
    },
    actions: {
      async add({commit}, task) {
        const res = await axios.post('https://todos-pyrnmiaohu.now.sh/todos', { text: task, complete: false })
        commit('add', res.data)
      },
      async remove({commit}, todo) {
        await axios.delete(`https://todos-pyrnmiaohu.now.sh/todos/${todo.id}`)
        commit('remove', todo)
      },
      async toggle({commit}, todo) {
        const res = await axios.patch(`https://todos-pyrnmiaohu.now.sh/todos/${todo.id}`, { complete: !todo.complete })

        commit('toggle', res.data)
      }
    }
  })
}

export default createStore