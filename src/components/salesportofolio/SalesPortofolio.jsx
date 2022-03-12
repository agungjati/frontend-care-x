import Navbar from "../navbar/Navbar"
import "./salesPortofolio.scss"
import { NavLink, useNavigate } from "react-router-dom"
import { getSalesAPI, deleteSalesAPI } from "../../redux/api/api.salespipeline"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import Swal from "sweetalert2"
import { getAllCustomerAPI } from "../../redux/api/api.customer"



const SalesPortofolio = () => {
    const navigate = useNavigate();
    const stateAuth = useSelector(state => state.auth)
    const [ salesPipeline, setSalesPipeline ] = useState([])
    const [ customerData, setCustomer ]  = useState([])

    useEffect(() => {
        getSales()
        getAllCustomer()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []) 

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

    const getSales = () => {
        getSalesAPI(stateAuth.token)
        .then(res => {
            setSalesPipeline(res.data)
        })
        .catch(err => {
            console.log('[getSalesAPI]', err)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: err?.response?.data?.message || err.message
              })  
        })
    }

    const deleteSalespipeline = (order_id) => {
        
        Swal.fire({
            title: 'Are you sure to delete ?',
            showDenyButton: true,
            confirmButtonText: 'Yes',
            denyButtonText: 'No',
            icon: 'question'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteSalesAPI(stateAuth.token, order_id)
                .then(res => {
                    getSales()
                })
                .catch(err => {
                    console.log('[deleteSalespipeline]', err)
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: err?.response?.data?.message || err.message
                      })  
                })
            }
          })

      
    }

    const renderPreSales = () => {
        return (<>
        { salesPipeline.map((_salesPipeline, key) => (
            _salesPipeline.sales_pipeline.map((_sales, key) => {
                const percent = _sales.status === 1 ? '0' : _sales.status === 2 ? '50%' : '100%'
            return(
            <div key={key} className='bg-white rounded-8 d-flex align-items-center m-2' >                
                <div className='bg-white p-2 progress-dashboard flex-grow-1' >
                    <b>{key === 0 ? _salesPipeline.name : '' }</b>                    
                            <div className='progress-container position-relative mt-2' >
                                <div className="progress">
                                    <div className="progress-bar w-2 bg-lowgreen rounded" style={{ width: percent }} role="progressbar" aria-valuenow="2" aria-valuemin="0" aria-valuemax="10"></div>
                                </div>
                                <div className='progress-bar-start' >
                                    <div className='dot' ></div>
                                </div>
                                <small className='label-start' >Lead Prospect</small>
                                <div className='progress-bar-end' style={{ left: percent, zIndex: 9 }} >
                                    <div className='dot' ></div>
                                </div>
                                <small className='label-end' style={{ left: `calc(50%)` }} >OGP</small>
                                <div className='progress-bar-completed' style={{ left: '100%'}} >
                                    <div className='dot' ></div>
                                </div>
                                <small className='label-completed' >Sirkulir Bakes</small>
                            </div>                                            
                    
                </div>
                <NavLink className='ms-auto mr-2' to={`/${stateAuth.user.nik}/salespipeline-edit`} state={{ _sales, customer: _salesPipeline }} >
                    <span className="material-icons-outlined text-primary">edit</span>
                </NavLink>
                <a href='#a' className='mr-2'  onClick={() => deleteSalespipeline(_sales.order_id)} >
                    <span className="material-icons me-2 me-lg-4 text-danger">delete</span>
                </a>
            </div>
            ) })
        ))
        }
        </>)
    }

    return (<div className='bg-light' >
        <Navbar />
        <div className='bg-white' >
            <div className='container' >
                <div className='row' >
                    <div className='mt-4 col-12' >
                        <h3 >SALES PORTOFOLIO</h3>
                    </div>
                    <div className='mt-2 col-12 position-relative' >
                        <div className='w-810' >
                            <hr className='bg-light w-100' style={{ opacity: '1', height: '2px' }} />
                            <h6 className='mb-4'>SALES PORTOFOLIO</h6>
                        </div>
                        <div className='position-relative' style={{ maxWidth: '830px' }} >
                            <div id='sales-portofolio' >
                            { customerData.map((cData, key) => (
                                <NavLink key={key} to={`/${stateAuth.user.nik}/customerdatabase/${cData.name}?id=${cData.company_id}`} >
                                    <div  className={`card-customer d-inline-flex align-items-center justify-content-center ${key % 6 === 0 ? 'ms-0' : '' }`}
                                        style={{ 
                                            backgroundImage: `url('${cData.image}')`, 
                                            backgroundRepeat: 'no-repeat', 
                                            backgroundColor: '#F7F7F7', 
                                            backgroundSize: 'contain', 
                                            backgroundPosition: 'center' 
                                    }} >
                                    </div>
                                </NavLink>
                            )) }
                            </div>
                            <span className="arrow-right-sales material-icons-outlined position-absolute">navigate_next</span>
                        </div>
                        <h6 className='my-4'>Progress Commitment</h6>
                        <div id='sales-progress-commitment' className='w-180' >
                            <div className='card-dashboard bg-light d-inline-block me-4' >
                                <h6 className='text-danger text-center my-1' >METRO</h6>
                                <h2 className='text-center mb-0' >50/100</h2>
                                <h5 className='text-center mb-0' >Gbps</h5>
                                <div className='text-center'>
                                    <div className="progress">
                                        <div className="progress-bar w-50 bg-success rounded" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>

                            <div className='card-dashboard bg-light d-inline-block me-4' >
                                <h6 className='text-center text-purple my-1' >IPTX</h6>
                                <h2 className='text-center mb-0' >50/100</h2>
                                <h5 className='text-center mb-0' >Gbps</h5>
                                <div className='text-center'>
                                    <div className="progress">
                                        <div className="progress-bar w-50 bg-success rounded" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>

                            <div className='card-dashboard bg-light d-inline-block' >
                                <h6 className='text-center text-bluesea my-1' >CNDC</h6>
                                <h2 className='text-warning text-center mb-0' >2/10</h2>
                                <h5 className='text-center mb-0' >Gbps</h5>
                                <div className='text-center'>
                                    <div className="progress">
                                        <div className="progress-bar w-2 bg-warning rounded" style={{ width: (2 / 10 * 100) + 'px' }} role="progressbar" aria-valuenow="2" aria-valuemin="0" aria-valuemax="10"></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <h6 className='my-4'>Pre-Sales</h6>
                        <div id='sales-pre-sales' className='w-810 bg-light p-2 mb-4' >
                            {renderPreSales()}
                            <div>
                                <button onClick={() => navigate(`/${stateAuth.user.nik}/salespipeline-add`) } className='btn btn-sm ms-auto d-flex align-items-center bg-lowgreen text-white rounded-8 my-2' >
                                    <span className="material-icons-outlined">add_circle_outline</span>
                                    Tambah Sales Pipeline
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default SalesPortofolio