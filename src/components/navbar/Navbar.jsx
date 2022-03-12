import logo from '../../assets/logo.svg'
import { NavLink, useNavigate } from 'react-router-dom'

import "./navbar.scss"
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

const Navbar = () => {
    const stateAuth = useSelector(state => state.auth)
    const navigate = useNavigate()

    useEffect(() => {
        if (!stateAuth.user || !stateAuth.token) {
            navigate('/login')
        }  
        // eslint-disable-next-line react-hooks/exhaustive-deps  
    }, []) 

    const logout = () => {
        localStorage.clear()
        window.location.reload()
        navigate('/login')
    }



    return (<nav id="navbar-user" className="navbar navbar-expand-lg  navbar-light bg-light">
        <div className="container-fluid">
            <NavLink className="navbar-brand d-flex align-items-center" to="/">
                <img src={logo} alt="logo" className="d-inline-block align-text-top" />
                <h4 className='text-warning mb-0 ms-4 navbar-brand' >CARE-X</h4>
            </NavLink>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mb-2 mb-lg-0 me-lg-4">
                    <li className="nav-item">
                        <NavLink to={`/${stateAuth.user.nik}/home`} className='nav-link' >Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={`/${stateAuth.user.nik}/customerdatabase`} className='nav-link' >Customer Database</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={`/${stateAuth.user.nik}/salesportofolio`} className='nav-link' >Sales Portofolio</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={`/${stateAuth.user.nik}/aftersales`} className='nav-link' >After Sales</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={`/${stateAuth.user.nik}/ordertracking`} className='nav-link' >Order Tracking</NavLink>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#team">LIS Connectivity Non CNOP</a>
                    </li>
                </ul>
                <div className='ms-auto d-flex me-lg-4' >
                    <span className="avatar material-icons-outlined px-2">account_circle</span>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle p-0 bg-light text-dark border-0 d-flex align-items-center justify-content-between" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <div className='pe-2'>
                                <div className='fw-bold text-start' >{stateAuth.user.name}</div>
                                <div className='fw-bold text-start' >{stateAuth.user.nik}</div>
                            </div>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
                            <li>
                                <a className="dropdown-item d-flex align-items-center" onClick={logout} href="#a">
                                    <span className="material-icons-outlined me-2">logout</span>
                                    <span>Log out</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>)
}

export default Navbar