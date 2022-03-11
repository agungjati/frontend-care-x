import Navbar from "../navbar/Navbar"
import { getAllSalesDeliveryAPI, getAllSalesAssuranceAPI, downloadSalesDeliveryAPI, downloadSalesAssuranceAPI } from "../../redux/api/api.after-sales";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import "./aftersales.scss";
import { getAllCustomerAPI } from "../../redux/api/api.customer";

const AfterSales = () => {

    const stateAuth = useSelector(state => state.auth)
    const [delivery, setDelivery] = useState([])
    const [assurance, setAssurance] = useState([])
    const [customer, setCustomer] = useState([])
    const [deliveryFilter, setDeliveryFilter] = useState('')
    const [assuranceFilter, setAssuranceFilter] = useState('')

    useEffect(() => {
        getAllSalesDelivery()
        getAllSalesAssurance()
        getAllCustomer()
    }, [])


    const getAllSalesDelivery = () => {
        getAllSalesDeliveryAPI(stateAuth.token)
        .then(res => {
            setDelivery(res.data)
        })
        .catch(err => {
            console.log('[getAllSalesDeliveryAPI]', err)
            alert('Error : '+ err?.response?.data?.message || err.message)
        })
    }

    const getAllSalesAssurance = () => {
        getAllSalesAssuranceAPI(stateAuth.token)
        .then(res => {
            setAssurance(res.data)
        })
        .catch(err => {
            console.log('[getAllSalesAssuranceAPI]', err)
            alert('Error : '+ err?.response?.data?.message || err.message)
        })
    }

    const getAllCustomer = () => {
        getAllCustomerAPI(stateAuth.token)
        .then(res => {
            setCustomer(res.data)
        })
        .catch(err => {
            console.log('[getAllCustomerAPI]', err)
            alert('Error : '+ err?.response?.data?.message || err.message)
        })
    }

    const downloadDelivery = () => {
        downloadSalesDeliveryAPI(stateAuth.token)
        .then(res => {
            const url = window.URL.createObjectURL(new Blob([res]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'sales-delivery.xlsx');
            document.body.appendChild(link);
            link.click();
        })
    }

    const downloadAssurance = () => {
        downloadSalesAssuranceAPI(stateAuth.token)
        .then(res => {
            const url = window.URL.createObjectURL(new Blob([res]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'sales-assurance.xlsx');
            document.body.appendChild(link);
            link.click();
        })
    }   

    return (<div className='bg-light' >
        <Navbar />
        <div className='bg-white' >
            <div id='after-sales' className='container mb-4' >
                <div className='row' >
                    <div className='mt-4 col-12' >
                        <h3 >After Sales</h3>
                    </div>
                    <div className='mt-4 mb-2 col-12 d-flex align-items-center justify-content-between' >
                        <span>Delivery</span>
                        <div>
                            <select onChange={e => setDeliveryFilter(e.target.value)} className='form-select border-0 text-last-center fw-bold shadow' >
                                <option value='' >Pilih Perusahaan</option>
                                {
                                    customer.map((cs, key) => (
                                        <option key={key} value={cs.company_id}>{cs.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                    <div className='col-12' >
                        <div className='d-inline-block' >
                            <table cellSpacing='0' cellPadding='0' >
                                <thead>
                                    <tr>
                                        <th width='200' >
                                            <span className='d-block border-end' >Order ID</span>
                                        </th>
                                        <th width='200'>
                                            <span className='d-block border-end' >Company Name</span>
                                        </th>
                                        <th width='200'>
                                            <span className='d-block border-end' >Product</span>
                                        </th>
                                        <th width='200'>
                                            Caps
                                    </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        (deliveryFilter === '' ? delivery : delivery.filter(x => String(x.company_id) === deliveryFilter ))
                                            .map((deliver, key) => (
                                        <tr key={key} >
                                            <td className='ps-3'>
                                                <div className='h-100 px-2 py-2 border-bottom' >{deliver.order_id}</div>
                                            </td>
                                            <td>
                                                <div className='h-100 px-2 py-2 border-bottom' >{deliver.name}</div>
                                            </td>
                                            <td>
                                                <div className='h-100 px-2 py-2 border-bottom' >{deliver.product_name}</div>
                                            </td>
                                            <td className='pe-3'>
                                                <div className='h-100 px-2 py-2 border-bottom' >{deliver.product_volume}</div>
                                            </td>
                                        </tr>
                                        ))
                                    }
                                                                        
                                </tbody>
                            </table>
                            <div className='d-flex justify-content-end mt-2' >
                                <button id='download-xls' className='btn btn-sm btn-primary ms-lg-4 d-flex align-items-center fw-bold' onClick={downloadDelivery} >
                                    <span className="material-icons-outlined">file_download</span> Download xls
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4 mb-2 col-12 d-flex align-items-center justify-content-between' >
                        <span>Assurance</span>
                        <div>
                            <select onChange={e => setAssuranceFilter(e.target.value)} className='form-select border-0 text-last-center fw-bold shadow' >
                                <option value=''>Pilih Perusahaan</option>
                                {
                                    customer.map((cs, key) => (
                                        <option key={key} value={cs.company_id}>{cs.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                    <div className='col-12' >
                        <div className='d-inline-block'>
                            <table cellSpacing='0' cellPadding='0' >
                                <thead>
                                    <tr>
                                        <th width='200' >
                                            <span className='d-block border-end' >Order ID</span>
                                        </th>
                                        <th width='200'>
                                            <span className='d-block border-end' >Company Name</span>
                                        </th>
                                        <th width='200'>
                                            <span className='d-block border-end' >Product</span>
                                        </th>
                                        <th width='200'>
                                            Caps
                                    </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        (assuranceFilter === '' ? assurance : assurance.filter(x => String(x.company_id) === assuranceFilter ))
                                            .map((deliver, key) => (
                                            <tr key={key} >
                                                <td className='ps-3'>
                                                    <div className='h-100 px-2 py-2 border-bottom' >{deliver.order_id}</div>
                                                </td>
                                                <td>
                                                    <div className='h-100 px-2 py-2 border-bottom' >{deliver.name}</div>
                                                </td>
                                                <td>
                                                    <div className='h-100 px-2 py-2 border-bottom' >{deliver.product_name}</div>
                                                </td>
                                                <td className='pe-3'>
                                                    <div className='h-100 px-2 py-2 border-bottom' >{deliver.product_volume}</div>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                    
                                </tbody>
                            </table>
                            <div className='d-flex justify-content-end mt-2' >
                                <button id='download-xls' className='btn btn-sm btn-primary ms-lg-4 d-flex align-items-center fw-bold' onClick={downloadAssurance} >
                                    <span className="material-icons-outlined">file_download</span> Download xls
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>)
}

export default AfterSales