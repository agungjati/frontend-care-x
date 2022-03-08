import { API } from './api.middleware'

export const registerAPI = async (data) => {
    return await API({
        url : 'auth/register' ,
        method : 'POST',
        data
    }).then( res => res.data )
}

export const loginAPI = async (data) => {
    return await API({
        url : 'auth/login' ,
        method : 'POST',
        data
    }).then( res => res.data )
}
