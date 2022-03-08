import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import * as types from '../types/type.auth'

const initialState = {
    user: '',
    token: null,
}

const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token', 'user' ]
}

export default persistReducer(persistConfig, (state = initialState, { type, payload }) => {
    switch (type) {
        case types.LOGIN_SUCCESS : return{
            ...state,
            token: payload.token,
            user: payload.user
        }

        default:
            return state
    }
})