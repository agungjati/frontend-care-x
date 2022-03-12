import Navbar from "../navbar/Navbar"
import { useState, useEffect } from "react"
import { getAllCustomerAPI } from "../../redux/api/api.customer"
import { useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { createSalesAPI, updateSalesAPI } from "../../redux/api/api.salespipeline"
import Swal from "sweetalert2"


const Checkbox = ({ children, name, value, onChange, isChecked }) => {
   
    return (
        <div className={`form-check ${isChecked ? 'bg-lowgreen text-white fw-bold' : 'bg-white'}  d-block rounded-8 mb-2`}>
            <label className="form-check-label p-2 px-md-3 d-block" htmlFor={'select' + name}>
                <input className="form-check-input rounded-8 border-0" type="checkbox" value={value} id={'select' + name} name={name} onChange={onChange} checked={isChecked} />
                {children}
            </label>
        </div>
    )
}


const SalesPipeline = () => {

    const [formState, setformState] = useState({
        company_id: null,
        service_prospect: [],
        status: 1,
        minutes_of_meeting: "",
        status_after_sales: 0,
        user_id: null,
        pic_name: "",
        pic_phone: "",
        pic_email: ""
    })
    const [customerState, setCustomer ] = useState([])
    const stateAuth = useSelector(state => state.auth)
    const location = useLocation()
    
    const navigate = useNavigate();


    const onChange = (e) => {
        setformState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        getAllCustomer()
        .then(() => {
            if(location.state) {
                const _customer = location.state.customer
                const _sales = location.state._sales
                setformState({
                    ...formState,
                    company_id: _customer.company_id,
                    service_prospect: Object.keys(_sales.service_prospect),
                    status: _sales.status,
                    minutes_of_meeting: _sales.minutes_of_meeting,
                    status_after_sales: _sales.status_after_sales,
                    pic_name: _customer.pic_name,
                    pic_phone: _customer.pic_phone,
                    pic_email: _customer.pic_email,
                    user_id: stateAuth.user.nik,
                })
            }else {
                setformState({
                    ...formState,
                    user_id: stateAuth.user.nik,
                })
            }
        })
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []) 

    const getAllCustomer = () => {
        return getAllCustomerAPI(stateAuth.token)
        .then(res => {
            setCustomer(res.data)
        })
        .catch(err => {
            console.log('[getAllCustomerAPI]', err)
            alert('Error : '+ err?.response?.data?.message || err.message)
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if(location.state) {
            updateSales()
        }else{
            createSales()
        }
    }

    const createSales = () => {
        createSalesAPI(stateAuth.token, formState)
        .then(() => {
            navigate(`/${stateAuth.user.nik}/salesportofolio`) 
        })
        .catch(err => {
            console.log('[createSalesAPI]', err)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: err?.response?.data?.message || err.message
              })     
        })
    }

    const updateSales = () => {
        updateSalesAPI(stateAuth.token, location.state._sales.order_id, formState)
        .then(() => {
            navigate(`/${stateAuth.user.nik}/salesportofolio`) 
        })
        .catch(err => {
            console.log('[createSalesAPI]', err)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: err?.response?.data?.message || err.message
              })  
        })
    }

    const serviceProspectChange = (e) => {
        const prospect = formState.service_prospect.slice()
        if(e.target.checked) {
            prospect.push(e.target.value)
        }else{
            prospect.splice(prospect.indexOf(e.target.value), 1)
        }

        setformState({
            ...formState,
            service_prospect: prospect
        })
    }

    const whenChangeCompany = (e) => {
        const customer = customerState.find(x => String(x.company_id) === e.target.value ) || {}
        setformState({
            ...formState,
            company_id: e.target.value,
            pic_name: customer.pic_name,
            pic_phone: customer.pic_phone,
            pic_email: customer.pic_email
        })        
       
    }

    return (
        <div className='bg-light' >
            <Navbar />
            <div className='bg-white' >
                <form className='container' onSubmit={onSubmit} >
                    <div className='row mb-4' >
                        <div className='mt-4 mb-2 col-12 d-md-flex align-items-center justify-content-between' >
                            <h3 >SALES PIPELINE FORM - { location.state ? 'EDIT' : 'TAMBAH' }</h3>
                        </div>
                        <div className='col-md-6' >
                            <div className='p-2 px-md-5 pt-md-4 bg-light rounded-8' >
                                <div className='row' >
                                    <div className='col-md-6'>
                                        <label>Nama Customer</label>
                                    </div>
                                    <div className='col-md-6 mb-3'>
                                        <select name='company_id' onChange={whenChangeCompany} className='form-select border-0 text-last-center fw-bold' value={formState.company_id || ''} required >
                                            <option>Pilih Perusahaan</option>
                                            {
                                                customerState.map((cs, key) => (
                                                    <option key={key} value={cs.company_id}>{cs.name}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className='row' >
                                    <div className='col-md-6'>
                                        <label>PIC</label>
                                    </div>
                                    <div className='col-md-6 mb-3'>
                                        <b>{formState.pic_name || '-'}</b>
                                    </div>
                                </div>
                                <div className='row' >
                                    <div className='col-md-6'>
                                        <label>Nomor Telp</label>
                                    </div>
                                    <div className='col-md-6 mb-3'>
                                    <b>{formState.pic_phone || '-'}</b>
                                    </div>
                                </div>
                                <div className='row' >
                                    <div className='col-md-6'>
                                        <label>Email</label>
                                    </div>
                                    <div className='col-md-6 mb-3'>
                                    <b>{formState.pic_email || '-'}</b>
                                    </div>
                                </div>
                                <div className='row' >
                                    <div className='col-md-6'>
                                        <label>Prospect Layanan</label>
                                    </div>
                                    <div className='col-md-6 mb-3'>
                                        <Checkbox name='metro' value='Metro' onChange={serviceProspectChange} isChecked={formState.service_prospect.includes('Metro')} >
                                            <span className='d-block text-center me-2' >Metro</span>
                                        </Checkbox>
                                        <Checkbox name='iptx' value='IPTX' onChange={serviceProspectChange} isChecked={formState.service_prospect.includes('IPTX')} >
                                            <span className='d-block text-center me-2' >IPTX</span>
                                        </Checkbox>
                                        <Checkbox name='cndc' value='CNDC' onChange={serviceProspectChange} isChecked={formState.service_prospect.includes('CNDC')} >
                                            <span className='d-block text-center me-2' >CNDC</span>
                                        </Checkbox>
                                        <Checkbox name='lainnya' value='Lainnya' onChange={serviceProspectChange} isChecked={formState.service_prospect.includes('Lainnya')} >
                                            <span className='d-block text-center me-2' >Lainnya</span>
                                        </Checkbox>
                                    </div>
                                </div>
                                <div className='row' >
                                    <div className='col-md-6'>
                                        <label>Status</label>
                                    </div>
                                    <div className='col-md-6 mb-3'>
                                        <select name='status' className='form-select border-0 text-last-center fw-bold' onChange={onChange} value={formState.status} >
                                            <option value='1' >Lead Prospect</option>
                                            <option value='2' >OGP</option>
                                            <option value='3' >Sirkulir Bakes</option>
                                        </select>
                                    </div>
                                </div>
                                { location.state ? 
                                <div className='row' >
                                    <div className='col-md-6'>
                                        <label>Status After Sales</label>
                                    </div>
                                    <div className='col-md-6 mb-3'>
                                        <div className="form-check">
                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                <input className="form-check-input" type="radio" value='0' name="flexRadioDefault" id="flexRadioDefault1" checked={formState.status_after_sales === 0}
                                                    onChange={e => e.target.checked ? setformState({ ...formState, status_after_sales: 0  }) : ''  } />
                                                <span>Pre-sales</span>
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                <input className="form-check-input" type="radio" value='1' name="flexRadioDefault" id="flexRadioDefault2" checked={formState.status_after_sales === 1}
                                                onChange={e => e.target.checked ? setformState({ ...formState, status_after_sales: 1  }) : ''  } />
                                                <span>Delivery</span>
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <label className="form-check-label" htmlFor="flexRadioDefault3">
                                                <input className="form-check-input" type="radio" value='2' name="flexRadioDefault" id="flexRadioDefault3" checked={formState.status_after_sales === 2}
                                                onChange={e => e.target.checked ? setformState({ ...formState, status_after_sales: 2  }) : ''  } />
                                                <span>Assurance</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                : '' }                                
                                
                            </div> 
                        </div>
                        <div className='col-md-6 mt-2 mt-md-0' >
                            <div className='p-2 px-md-5 pt-md-4 bg-light rounded-8 h-100' >
                                <label className='mb-3' htmlFor='minutes-meeting' >Minutes of Meeting</label>
                            <textarea id='minutes-meeting' name='minutes_of_meeting' required onChange={onChange} className='form-control rounded-8 border-0' placeholder='Input Text' style={{ height: '181px' }} value={formState.minutes_of_meeting || ''} ></textarea>
                            </div>
                        </div>
                    </div>
                    <div className='row mb-4' >
                        <div className='col' >
                            <button className='btn bg-lowgreen d-block fw-bold ms-auto text-white px-5 py-2 rounded-8' >Simpan</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SalesPipeline


// status after sales : muncul saat edit