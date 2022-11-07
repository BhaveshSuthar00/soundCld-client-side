import { configureStore } from '@reduxjs/toolkit'
import History from './History/History'
import Login from './Login/Login'
import Player from './Player/Player'

export const store = configureStore({
    reducer: {
        login : Login,
        history : History,
        player : Player
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck : false
    }),
})