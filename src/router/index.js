import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import TodoList from '@/components/TodoList'
import CreateTodo from '@/components/CreateTodo'

Vue.use(Router)

export default new Router({
  routes: [
    {
    	path: '/',
      	name: 'app',
      	components: {
        	default: TodoList,
        	createtodo: CreateTodo
      	}
    }
  ]
})
