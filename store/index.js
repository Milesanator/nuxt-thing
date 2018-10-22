import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      todos: [
        { task: 'eat'},
        { task: 'sleep'},
        { task: 'live'}
      ]
    }),
    mutations: {

    }
  })
}

export default createStore