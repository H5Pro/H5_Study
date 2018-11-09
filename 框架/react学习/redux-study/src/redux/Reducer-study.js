/**
 * Created by fjl on 2018/7/10
 */
import {combineReducers} from 'redux'
const ADD_TODO = 'ADD_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
const SHOW_ALL = true
// 初始数据
const initialState = {
  visibilityFilter: false,
  todos: []
}
/************** 处理多个action *************/
function todoApp (state = [1, 2], action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      })
    case ADD_TODO: {
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            text: action.text,
            complted: false
          }
        ]
      })
    }
    case TOGGLE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.map((todo, index) => {
          if (index === action.index) {
            return Object.assign({}, todo, {
              completed: !todo.completed
            })
          }
          return todo
        })
      })
    default:
      return state
  }
}

/************** 拆分Reducer *************/
function todos (state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return { ...todo, completed: !todo.completed }
        }
        return todo
      })
    default:
      return state
  }
}

function visibilityFilter (state = SHOW_ALL, action) {
  switch (action.type)  {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function todoApp (state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return {
        ...state,
        visibilityFilter: visibilityFilter(state.visibilityFilter, action)
      }
    case ADD_TODO:
      return {
        ...state,
        todos: todos(state.todos, action)
      }
    case TOGGLE_TODO:
      return {
        ...state,
        todos: todos(state.todos, action)
      }
    default:
      return state
  }
}

/************** 融合reducer *************/
function todoApp (state = {}, action) {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    todos: todos(state.todos, action)
  }
}
/************** redux 提供 combineReducers() *************/
const todoApp = combineReducers({
  visibilityFilter,
  todos
})

const reducer = combineReducers({
  a: doSomethingWithA,
  b: processB,
  c: c
})
// 等价于
function reducer (state = {}, action) {
  return {
    a: doSomethingWithA(state.a, action),
    b: processB(state.b, action),
    c: c(state.c, action)
  }
}

combineReducers = (option) => {
  return function (state = {}, action) {
    let reducers = {}
    for (var o in option) {
      reducers.o = option[o](state[o], action)
    }
    return reducers
  }
}