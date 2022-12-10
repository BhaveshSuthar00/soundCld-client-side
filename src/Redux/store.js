import { configureStore } from '@reduxjs/toolkit'
import History from './History/History'
import Home from './Home/Home'
import LikedSong from './Liked/LikedSong'
import Login from './Login/Login'
import Player from './Player/Player'

export const store = configureStore({
    reducer: {
        login : Login,
        history : History,
        player : Player,
        liked : LikedSong,
        home : Home
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck : false
    }),
})