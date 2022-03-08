import { API } from './api.middleware'

export const getAllCustomerAPI = async (token) => {
    return await API({
        url : 'customer',
        headers: {
            'x-access-token': token
        }
    }).then( res => res.data )
}

export const searchCustomerAPI = async (token, search) => {
    return await API({
        url : `customer/search?customer=${search}` ,
        headers: {
            'x-access-token': token
        }
    }).then( res => res.data )
}

export const getDetailCustomerAPI = async (token, company_id) => {
    return await API({
        url : `customer/${company_id}` ,
        headers: {
            'x-access-token': token
        }
    }).then( res => res.data )
}

export const downloadCustomerAPI = async (token, customer_name) => {
    let url = `customer/download`
    if(customer_name) {
        url = url + '?customer='+ customer_name
    }
    
    return await API({
        url,
        responseType: 'blob',
        headers: {
            'x-access-token': token
        }
    }).then( res => res.data )
}
