import Navbar from "../navbar/Navbar"
import "./salesPortofolio.scss"
import { NavLink, useNavigate } from "react-router-dom"
import { getSalesAPI } from "../../redux/api/api.salespipeline"
import { useEffect } from "react"
import { useSelector } from "react-redux"


const customerData = [
    { name: 'Hypernet', logo: '/assets/img/hypernet.jpg' },
    { name: 'lintasart', logo: '/assets/img/lintasart.jpg' },
    { name: 'iconi', logo: '/assets/img/iconi.jpg' },
    { name: 'indosat', logo: '/assets/img/indosat.jpg' },
    { name: 'xl', logo: '/assets/img/xl.jpg' },
    { name: 'prisma', logo: '/assets/img/prisma.jpg' },

    { name: 'Logo Perusahaan', logo: '/assets/img/Logo Perusahaan.png' },
    { name: 'Logo Perusahaan', logo: '/assets/img/Logo Perusahaan.png' },
    { name: 'Logo Perusahaan', logo: '/assets/img/Logo Perusahaan.png' },
    { name: 'Logo Perusahaan', logo: '/assets/img/Logo Perusahaan.png' },
    { name: 'Logo Perusahaan', logo: '/assets/img/Logo Perusahaan.png' },
    { name: 'Logo Perusahaan', logo: '/assets/img/Logo Perusahaan.png' }
]


const SalesPortofolio = () => {
    const navigate = useNavigate();
    const stateAuth = useSelector(state => state.auth)

    useEffect(() => {
        getSales()
    }, [])


    const getSales = () => {
        getSalesAPI(stateAuth.token)
        .then(res => {
            // setCustomer(res.data)
        })
        .catch(err => {
            console.log('[getSalesAPI]', err)
            alert('Error : '+ err?.response?.data?.message || err.message)
        })
    }

    const renderPreSales = () => {
        return (<>
            <div className='bg-white rounded-8 d-flex align-items-center mb-2' >
                <div className='bg-white p-2 progress-dashboard flex-grow-1' >
                    <b>Indosat</b>
                    <div className='progress-container position-relative' >
                        <div className="progress">
                            <div className="progress-bar w-2 bg-lowgreen rounded" style={{ width: '50%' }} role="progressbar" aria-valuenow="2" aria-valuemin="0" aria-valuemax="10"></div>
                        </div>
                        <div className='progress-bar-start' >
                            <div className='dot' ></div>
                        </div>
                        <small className='label-start' >Lead Prospect</small>
                        <div className='progress-bar-end' style={{ left: '50%' }} >
                            <div className='dot' ></div>
                        </div>
                        <small className='label-end' style={{ left: 'calc(50% - 25px)' }} >OGP</small>
                        <div className='progress-bar-completed' >
                            <div className='dot' ></div>
                        </div>
                        <small className='label-completed' >Sirkulir Bakes</small>
                    </div>
                </div>
                <NavLink className='ms-auto mr-2' to='/1/salespipeline-add' >
                    <span className="material-icons-outlined text-primary">edit</span>
                </NavLink>
                <span className="material-icons me-2 me-lg-4 text-danger">delete</span>
            </div>

            <div className='bg-white rounded-8 d-flex align-items-center mb-2' >
                <div className='bg-white p-2 progress-dashboard mt-4 flex-grow-1' >
                    <b>Hypernet</b>
                    <div className='progress-container position-relative' >
                        <div className="progress">
                            <div className="progress-bar w-2 bg-lowgreen rounded" style={{ width: '50%' }} role="progressbar" aria-valuenow="2" aria-valuemin="0" aria-valuemax="10"></div>
                        </div>
                        <div className='progress-bar-start' >
                            <div className='dot' ></div>
                        </div>
                        <small className='label-start' >Lead Prospect</small>
                        <div className='progress-bar-end' style={{ left: '50%' }} >
                            <div className='dot' ></div>
                        </div>
                        <small className='label-end' style={{ left: 'calc(50% - 25px)' }} >OGP</small>
                        <div className='progress-bar-completed' >
                            <div className='dot' ></div>
                        </div>
                        <small className='label-completed' >Sirkulir Bakes</small>
                    </div>
                </div>
                <NavLink className='ms-auto mr-2' to='/1/salespipeline-add' >
                    <span className="material-icons-outlined text-primary">edit</span>
                </NavLink>
                <span className="material-icons me-2 me-lg-4 text-danger">delete</span>
            </div>
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
                                {customerData.map((cData, key) => (
                                    <NavLink to={`/1/customerdatabase/${cData.name}`} >
                                        <div key={key} className={`card-customer-sales d-inline-flex align-items-center justify-content-center ${key === 0 ? 'ms-1' : ''} `}
                                            style={{ background: `url('${cData.logo}') no-repeat center #F7F7F7` }} >
                                        </div>
                                    </NavLink>
                                ))}
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
                                <button onClick={() => navigate('/1/salespipeline-add') } className='btn btn-sm ms-auto d-flex align-items-center bg-lowgreen text-white rounded-8 my-2' >
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