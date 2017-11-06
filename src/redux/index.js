import { combineReducers } from 'redux'
import yo from './yo'

const reducers = combineReducers({ yo })

const rootReducer = (state, action) => reducers(state, action)

export default rootReducer
