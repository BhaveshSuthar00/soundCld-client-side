import { createStore, combineReducers, applyMiddleware  } from 'redux'
import { loginReducer } from './Login/Reducer'
import reduxThunk from 'redux-thunk'
const rootReducer = combineReducers({
    login : loginReducer
})
export const store = createStore(
    rootReducer,
    applyMiddleware(reduxThunk)
)