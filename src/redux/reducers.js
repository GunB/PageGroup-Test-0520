import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import sample from './sample/reducers'

export default history =>
  combineReducers({
    router: connectRouter(history),
    sample
  })
