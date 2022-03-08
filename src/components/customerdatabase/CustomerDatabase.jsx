import Navbar from "../navbar/Navbar"
import "./customerDatabase.scss"
import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import { getAllCustomerAPI, searchCustomerAPI, downloadCustomerAPI } from "../../redux/api/api.customer"
import { useSelector } from "react-redux"

const CustomerDatabase = () => {

    const [ search, setSearch] = useState('')
    const [ isSearched, setSearched] = useState(false)
    const [ customerData, setCustomer ]  = useState([])
    const stateAuth = useSelector(state => state.auth)

    useEffect(() => {
        getAllCustomer()
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

    const onSearch = (e) => {
        e.preventDefault()

        if(search) {            
            setSearched(true)
            searchCustomerAPI(stateAuth.token, search)
            .then(res => {
                setCustomer(res.data)
            })
            .catch(err => {
                console.log('[searchCustomerAPI]', err)
                alert('Error : '+ err?.response?.data?.message || err.message)
            })
        }else{            
            setSearched(false)
            getAllCustomer()
        }
    }

    const donwload = () => {
        downloadCustomerAPI(stateAuth.token)
        .then(res => {
            const url = window.URL.createObjectURL(new Blob([res]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'customer.xlsx');
            document.body.appendChild(link);
            link.click();
        })
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
                            <button onClick={donwload} id='download-xls' className='btn btn-primary ms-lg-4 d-flex align-items-center fw-bold' >
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
                                <NavLink key={key} to={`/1/customerdatabase/${cData.name}?id=${cData.company_id}`} >
                                    <div  className={`card-customer d-inline-flex align-items-center justify-content-center ${key % 6 === 0 ? 'ms-0' : '' }`}
                                        style={{ 
                                            backgroundImage: `url('${cData.image}')`, 
                                            backgroundRepeat: 'no-repeat', 
                                            backgroundColor: '#F7F7F7', 
                                            backgroundSize: 'cover', 
                                            backgroundPosition: 'center' 
                                    }} >
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