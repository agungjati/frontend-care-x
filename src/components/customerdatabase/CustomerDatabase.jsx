import Navbar from "../navbar/Navbar"
import "./customerDatabase.scss"
import { useState } from "react"
import { Link, NavLink } from "react-router-dom"

const _customerData = [
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

const CustomerDatabase = () => {

    const [ search, setSearch] = useState('')
    const [ isSearched, setSearched] = useState(false)
    const [ customerData, setCustomer ]     = useState(_customerData)


    const onSearch = (e) => {
        e.preventDefault()

        if(search) {
            setCustomer(_customerData.filter(cs => cs.name.includes(search) ))
            setSearched(true)
        }else{
            setCustomer(_customerData)
            setSearched(false)
        }
    }

    return (<div className='bg-light' >
        <Navbar />
        <div className='bg-white' >
            <div className='container' >
                <div className='row' >
                    <div className='mt-4 col-12' >
                        <h3 >CUSTOMER DATABASE</h3>
                    </div>
                    <div className='mt-4 col-12 d-flex' >
                        <form className='position-relative' id='form-search' onSubmit={onSearch} >
                            <span className="icon material-icons-outlined">search</span>
                            <input className='form-control' type='search' name='search' placeholder='search customer' onChange={e => setSearch(e.target.value) } />
                            <button className='btn btn-warning' type='submit' >search</button>
                        </form>
                        <div className='d-flex align-items-center' >
                            <button id='download-xls' className='btn btn-primary ms-lg-4 d-flex align-items-center fw-bold' >
                                <span className="material-icons-outlined">file_download</span> Download xls
                            </button>
                        </div>
                    </div>
                    <div className='mt-4 col-12' >
                        <div id='customer' >
                            <hr className='bg-light' style={{ opacity: '1', height: '2px' }} />
                            { isSearched ? <p className='text-muted' >
                                <i>Search Result</i>
                            </p> :  '' }                        
                            { customerData.map((cData, key) => (
                                <NavLink to={`/1/customerdatabase/${cData.name}`} >
                                    <div key={key} className={`card-customer d-inline-flex align-items-center justify-content-center ${key % 6 === 0 ? 'ms-0' : '' }`}
                                        style={{ background: `url('${cData.logo}') no-repeat center #F7F7F7` }} >
                                    </div>
                                </NavLink>
                            )) }
                        </div>
                    </div>
                    <div className='my-4 col-12' >
                        <div id='customer' className='d-flex align-items-center justify-content-center' >
                            <span className="arrow-page material-icons-outlined">keyboard_arrow_left</span>
                            <span className='number-page' >1</span>
                            <span className='number-page'>2</span>
                            <span className='number-page'>3</span>
                            <span className='number-page'>4</span>
                            <span className="arrow-page material-icons-outlined">keyboard_arrow_right</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default CustomerDatabase