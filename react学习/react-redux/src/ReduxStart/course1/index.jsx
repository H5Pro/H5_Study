/*Created by fjl on 2018/1/25*/

/*!// 1. Store 就是保存数据的地方，你可以把它看成一个容器。整个应用只能有一个 Store
const store = createStore(fn);
// 2. Store对象包含所有数据。如果想得到某个时点的数据，就要对 Store 生成快照。这种时点的数据集合，就叫做 State。
// 当前时刻的 State，可以通过store.getState()拿到。
// Redux 规定， 一个 State 对应一个 View。只要 State 相同，View 就相同。你知道 State，就知道 View 是什么样，反之亦然。
const state = store.getState();
// 3. State 的变化，会导致 View 的变化。但是，用户接触不到 State，只能接触到 View。所以，State 的变化必须是 View 导致的。Action 就是 View 发出的通知，表示 State 应该要发生变化了
// Action 是一个对象。其中的type属性是必须的，表示 Action 的名称。其他属性可以自由设置，社区有一个规范可以参考。
const action = {
  type: 'ADD_TODO',
  payload: 'Learn Redux'
};
// 4. View 要发送多少种消息，就会有多少种 Action。如果都手写，会很麻烦。可以定义一个函数来生成 Action，这个函数就叫 Action Creator。
const ADD_TODO = '添加 TODO';
function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}
const action1 = addTodo('Learn Redux');
// 5. store.dispatch()是 View 发出 Action
store.dispatch({
  type: 'ADD_TADO',
  pyaload: 'Learn Redux'
})
// 6. Store 收到 Action 以后，必须给出一个新的 State，这样 View 才会发生变化。这种 State 的计算过程就叫做 Reducer。
const defaultState = 0;
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD':
      return state + action.payload;
    default:
      return state;
  }
  const store = createStore(reducer);
};*/



import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './components/counter'
import reducers from './reducers'

const store = createStore(reducers)
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
        <Counter
                value={store.getState()}
                onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
                onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
        />,
        rootEl
)

render()
store.subscribe(render)
