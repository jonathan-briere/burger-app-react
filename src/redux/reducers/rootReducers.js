import { combineReducers } from 'redux'
import burgerReducers from './burgerReducers'

const rootReducers = combineReducers({
  burger: burgerReducers
})

export default rootReducers
