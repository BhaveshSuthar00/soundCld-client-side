import { combineReducers, applyMiddleware, legacy_createStore  } from 'redux'
import { loginReducer } from './Login/Reducer'
import reduxThunk from 'redux-thunk'
const rootReducer = combineReducers({
    login : loginReducer
})
export const store = legacy_createStore(
    rootReducer,
    applyMiddleware(reduxThunk)
)