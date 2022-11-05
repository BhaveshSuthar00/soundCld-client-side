import { configureStore } from '@reduxjs/toolkit'
import Login from './Login/Login'

export const store = configureStore({
    reducer: {
        login : Login
    },
})