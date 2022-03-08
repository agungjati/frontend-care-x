import { API } from './api.middleware'

export const getAllSalesDeliveryAPI = async (token) => {
    return await API({
        url : 'after_sales/delivery',
        headers: {
            'x-access-token': token
        }
    }).then( res => res.data )
}

export const getDetailSalesDeliveryAPI = async (token, sales_id) => {
    return await API({
        url : 'after_sales/delivery/'+ sales_id,
        headers: {
            'x-access-token': token
        }
    }).then( res => res.data )
}

export const getAllSalesAssuranceAPI = async (token) => {
    return await API({
        url : 'after_sales/assurance',
        headers: {
            'x-access-token': token
        }
    }).then( res => res.data )
}

export const getDetailSalesAssuranceAPI = async (token, sales_id) => {
    return await API({
        url : 'after_sales/assurance/'+ sales_id,
        headers: {
            'x-access-token': token
        }
    }).then( res => res.data )
}

export const downloadSalesAssuranceAPI = async (token, company_id) => {
    let url = `after_sales/assurance/download`
    if(company_id) {
        url = url + '?company_id='+ company_id
    }
    
    return await API({
        url,
        responseType: 'blob',
        headers: {
            'x-access-token': token
        }
    }).then( res => res.data )
}

export const downloadSalesDeliveryAPI = async (token, company_id) => {
    let url = `after_sales/delivery/download`
    if(company_id) {
        url = url + '?company_id='+ company_id
    }
    
    return await API({
        url,
        responseType: 'blob',
        headers: {
            'x-access-token': token
        }
    }).then( res => res.data )
}
