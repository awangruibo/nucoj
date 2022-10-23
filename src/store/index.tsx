import {configureStore} from '@reduxjs/toolkit'
import reducer from "../reducer/index";
import {persistStore} from "redux-persist";
import reactThunk from 'redux-thunk'

const Store = configureStore({
    reducer,
    middleware: [reactThunk],//中间件，用来处理异步请求
})

const persist = persistStore(Store)//可持久化

export {Store, persist}