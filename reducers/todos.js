import Actions from '../actions/'
import {handleActions} from 'redux-actions'

const todos = handleActions(
  {
    [Actions.todos.changetext] (state, action) {
      return Object.assign({}, state, action.payload)
    },
    [Actions.todos.addtodo] (state, action) {
      return Object.assign({}, state, action.payload)
    },
    [Actions.todos.storetodo] (state, action) {
      return state
    },
    [Actions.todos.loadtodo] (state, action) {
      return Object.assign({}, state, action.payload)
    },
    [Actions.todos.deletetodo] (state, action) {
      return Object.assign({}, state, action.payload)
    }
  },
  {todos: [], newTodo: "New Todo"}
)

export default todos
