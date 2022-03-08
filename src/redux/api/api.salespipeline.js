import { API } from './api.middleware'

export const createSalesAPI = async (token, data) => {
    return await API({
        url : 'sales',
        method: 'POST',
        data,
        headers: {
            'x-access-token': token
        }
    }).then( res => res.data )
}

export const updateSalesAPI = async (token, id, data) => {
    return await API({
        url : 'sales/'+ id,
        method: 'PUT',
        data,
        headers: {
            'x-access-token': token
        }
    }).then( res => res.data )
}

export const getSalesAPI = async (token) => {
    return await API({
        url : 'sales',
        headers: {
            'x-access-token': token
        }
    }).then( res => res.data )
}

export const deleteSalesAPI = async (token, id) => {
    return await API({
        url : 'sales/'+ id,
        method: 'DELETE',
        headers: {
            'x-access-token': token
        }
    }).then( res => res.data )
}
