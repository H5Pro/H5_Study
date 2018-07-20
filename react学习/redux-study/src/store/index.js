/**
 * Created by fjl on 2018/7/10
 */
import { createStore } from 'redux'
import todoApp from './reducers'

const store = createStore(todoApp)
store.subscribe(() => {
  console.log(store.getState())
})
export default store