import logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'

import "./navbar.scss"

const Navbar = () => {

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
                        <NavLink to={`/1/home`} className='nav-link' >Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={`/1/customerdatabase`} className='nav-link' >Customer Database</NavLink>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#services">Sales Portofolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#clients">After Sales</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#team">Order Tracking</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#team">LIS Connectivity Non CNOP</a>
                    </li>                    
                </ul>
                <div className='ms-auto d-flex me-lg-4' >
                    <span className="avatar material-icons-outlined px-2">account_circle</span>
                    <div>
                        <div className='fw-bold' >Robert Raditya</div>
                        <div className='fw-bold' >940453</div>
                    </div>
                </div>
            </div>
        </div>
    </nav>)
}

export default Navbar