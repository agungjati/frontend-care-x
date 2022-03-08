import Navbar from "../navbar/Navbar"
import "./customerDatabase.scss"
import { useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import { useMemo, useEffect, useState } from "react";
import { getDetailCustomerAPI } from "../../redux/api/api.customer";

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
                                        <li key={1} >Budi (Director)</li>
                                        <li key={2} >Email: budi@indosat.com</li>
                                        <li key={3} >No Telpon: 081291364407</li>
                                    </ul>
                                </div>
                                <div className='mb-1' >
                                    In Service
                                    <ul style={{ listStyle: 'none' }} >
                                        <li key={1} >Metro E: 1000 Mbps</li>
                                        <li key={2} >IPTX: 1000 Mbps</li>
                                        <li key={3} >CNDC: 1 Full Rack</li>
                                    </ul>
                                </div>
                                <p className='mb-1' >Account Manager: Ulfa Fitriyani (841235)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default CustomerDatabaseDetail