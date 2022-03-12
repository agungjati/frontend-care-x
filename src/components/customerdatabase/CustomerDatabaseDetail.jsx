import Navbar from "../navbar/Navbar"
import "./customerDatabase.scss"
import { useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import { useMemo, useEffect, useState } from "react";
import { getDetailCustomerAPI } from "../../redux/api/api.customer";
import React from 'react'

function useQuery() {
    const { search } = useLocation();
  
    return useMemo(() => new URLSearchParams(search), [search]);
}

const CustomerDatabaseDetail = () => {
    const query = useQuery()
    const stateAuth = useSelector(state => state.auth)
    const [customer, setCustomer] = useState({})

    useEffect(() => {
        getDetailCustomer()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getDetailCustomer = () => {
        getDetailCustomerAPI(stateAuth.token, query.get('id'))
        .then(res => {
            setCustomer(res.data)
        })
        .catch(err => {
            console.log('[getAllCustomerAPI]', err)
            alert('Error : '+ err?.response?.data?.message || err.message)
        })
    }

    return (<div className='bg-light' >
        <Navbar />
        <div className='bg-white' >
            <div className='container' >
                <div className='row' >
                    <div className='mt-4 col-12' >
                        <div id='customer' >
                            <div className={`card-customer d-inline-flex align-items-center justify-content-center ms-0`}
                                style={{ 
                                    backgroundImage: `url('${customer.image}')`,
                                    backgroundRepeat: 'no-repeat', 
                                    backgroundColor: '#F7F7F7', 
                                    backgroundSize: 'cover', 
                                    backgroundPosition: 'center' 
                                }} >
                            </div>
                            <br />
                            <h4>{customer.name}</h4>
                            <div className='my-4 py-2 px-3  bg-light' style={{ maxWidth: '363px', borderRadius: '8px' }} >
                                <p className='mb-1' >Segment : {customer.segment}</p>
                                <p className='mb-1' >Address: {customer.address}</p>
                                <div className='mb-1' >
                                    Contact Person
                                    <ul style={{ listStyle: 'none' }} >
                                        <li key={1} >{customer.pic_name}</li>
                                        <li key={2} >Email: {customer.pic_email}</li>
                                        <li key={3} >No Telpon: {customer.pic_phone}</li>
                                    </ul>
                                </div>
                                <div className='mb-1' >                                    
                                    {
                                        customer.sales_pipeline && customer.sales_pipeline.map((_sales, key) => {
                                            const dataProspect = Object.entries(_sales.service_prospect || {})                                     
                                            return(<React.Fragment key={key} >
                                            { dataProspect.length ? <span>{key+1}. In Service</span> : '' }
                                            <ul className='mb-2' style={{ listStyle: 'none' }} >
                                                {dataProspect.map((prospect, _key) => {
                                                    return(<li key={_key} >{prospect[0]}: {prospect[1]}</li>) 
                                                })}                                                
                                            </ul>
                                            </React.Fragment>)
                                        })
                                    }
                                    
                                </div>
                                {/* <p className='mb-1' >Account Manager: Ulfa Fitriyani (841235)</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default CustomerDatabaseDetail