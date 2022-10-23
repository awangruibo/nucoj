import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

//可持久化配置
const persistConfig = {
    key: 'root',
    storage,
}

const reducer = (prevstate = {

},action:any) => {
    switch (action.type)
    {
        default:
            return prevstate
    }
}

//可持久化操作
const persistedReducer = persistReducer(persistConfig,reducer);

export default persistedReducer