<template>
  <div id="app">
    <router-view class="view one" v-bind:todos="todos"></router-view>
    <router-view class="view two" name="createtodo" v-on:add-todo="addTodo"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      todos: [{
        title: 'Todo A',
        project: 'Project A',
        done: false,
      }, {
        title: 'Todo B',
        project: 'Project B',
        done: true,
      }, {
        title: 'Todo C',
        project: 'Project C',
        done: false,
      }, {
        title: 'Todo D',
        project: 'Project D',
        done: false,
      }],
    };
  },
  methods: {
    addTodo(newTodo) {
      this.todos.push(newTodo);
    },
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
