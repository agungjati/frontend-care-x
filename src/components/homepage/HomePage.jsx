import logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'

import header from '../../assets/header.svg'
import achievement from '../../assets/achievement.svg'
import salesDashboard from '../../assets/sales-dashboard.svg'
import salesPortofolio from '../../assets/sales-portofolio.svg'
import afterSales from '../../assets/after-sales.svg'
import rws from '../../assets/rws.svg'
import dws from '../../assets/dws.svg'
import teamulfa from '../../assets/team-ulfa.svg'
import teamcowok from '../../assets/team-cowok.svg'
import teamramania from '../../assets/team-ramania.svg'
import './homepage.scss'

const HomePage = () => {

    return (<div className='bg-light' >
        <nav className="navbar navbar-expand-lg  navbar-light bg-white">
            <div className="container-fluid">
                <NavLink className="navbar-brand d-flex align-items-center" to="/">
                    <img src={logo} alt="logo" className="d-inline-block align-text-top" />
                    <h4 className='text-warning mb-0 ms-4 navbar-brand' >CARE-X</h4>
                </NavLink>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-lg-4">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#services">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#clients">Client</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#team">Team</a>
                        </li>
                        <li className="nav-item">
                            <a id='btn-login' className="btn btn-primary active fw-bold" href="#signin">SIGN IN</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <header className='bg-light' >
            <div className='container' >
                <div className='row py-4' >
                    <div className='col-md-6 d-flex flex-column justify-content-center' >
                        <h3>CARE-X</h3>
                        <p className='header-description'>
                            Care-X is <b>One Stop Customer Relation Management (CRM)</b> platform to monitor your sales progress and manage customer relation activities.
                        </p>
                        <p>
                            <a id='btn-start' className='btn btn-primary text-white fw-bold'>GET STARTED</a>
                        </p>
                    </div>
                    <div className='col-md-6' >
                        <img className='img-fluid' src={header} alt='header' />
                    </div>
                </div>
            </div>
        </header>
        <section id='about' className='bg-white' >
            <div className='container' >
                <div className='row py-4' >
                    <div className='col-md-6 d-flex justify-content-center d-md-block py-4' >
                        <iframe className='img-fluid' width="403" style={{ height: '251px' }} height="251" src="https://www.youtube.com/embed/FSX_SuQiceg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className='col-md-6' >
                        <h3>About CARE-X</h3>
                        <p>
                            We are here as partner for many B2B Companies to improve and digitize their business that related to sales & commercial activities. We Provide better customer experience & improve sales excellence for many business within the nation.
                        </p>
                        <ul className='list-group' >
                            <li className='list-group-item border-0 d-flex px-0' >
                                <span className="icon material-icons-outlined">shopping_cart</span>
                                <div>
                                    <b>Sales Informative Dashboard</b>
                                    <p>
                                        We provide comprehensive information related to sales performance and progress pipeline
                                    </p>
                                </div>
                            </li>
                            <li className='list-group-item border-0 d-flex px-0' >
                                <span className="icon material-icons-outlined">storage</span>
                                <div>
                                    <b>Simple Customer Management & Database</b>
                                    <p>
                                        One stop solution for salesperson or account managers to access every detail related to their customers
                                    </p>
                                </div>
                            </li>
                            <li className='list-group-item border-0 d-flex px-0' >
                                <span className="icon material-icons-outlined">person</span>
                                <div>
                                    <b>Sales Informative Dashboard</b>
                                    <p>
                                        Helping salesperson or account managers to manage their sales activities (pre-sales) and monitor every delivery & assurance process (after sales)
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <section id='achievement' className='text-center' >
            <img className='img-fluid' src={achievement} alt='achievement' />
        </section>
        <section id='services' className='py-4 bg-white' >
            <h3 className='text-center' >SERVICES</h3>
            <p className='text-center' >Get to know our features/services!</p>
            <br />
            <div className='container' >
                <div className='row' >
                    <div className='col-md-4' >
                        <img className='img-fluid' src={salesDashboard} alt='sales-dashboard' />
                    </div>
                    <div className='col-md-8 d-flex flex-column justify-content-center' >
                        <h3>Sales Dashboard</h3>
                        <p>Give you visibility of your sales performance & sales progress</p>
                    </div>
                </div>
                <div className='row' >
                    <div className='col-md-8 d-flex flex-column justify-content-center align-items-end' >
                        <h3>Sales Dashboard</h3>
                        <p>Give you visibility of your sales performance & sales progress</p>
                    </div>
                    <div className='col-md-4' >
                        <img className='img-fluid' src={salesPortofolio} alt='sales-dashboard' />
                    </div>
                </div>
                <div className='row' >
                    <div className='col-md-4' >
                        <img className='img-fluid' src={afterSales} alt='sales-dashboard' />
                    </div>
                    <div className='col-md-8 d-flex flex-column justify-content-center' >
                        <h3>After Sales</h3>
                        <p>Help your Sales Team in order to monitor Delivery & Assurance Progress</p>
                    </div>
                </div>
            </div>
        </section>
        <section id='clients' className='py-4 bg-white' >
            <h3 className='text-center' >OUR CLIENT</h3>
            <div className='text-center'>
                <img className='img-fluid' src={rws} alt='rws' />
                <img className='img-fluid' src={dws} alt='dws' />
            </div>
        </section>
        <section id='team' className='py-4' >
            <h3 className='text-center' >TEAM</h3>
            <div className='text-center'>
                <div className='d-inline-block' >
                    <img src={teamulfa} alt='team' />
                    <div className='bg-white p-2 rounded text-start' >
                        <b className='d-block' >Ulfa Fitriani</b>
                        <span>Hipster</span>
                    </div>
                </div>
                <div className='d-inline-block ms-4' >
                    <img src={teamcowok} alt='team' />
                    <div className='bg-white p-2 rounded text-start invisible' >
                        <b className='d-block' >&nbsp;</b>
                        <span>&nbsp;</span>
                    </div>
                </div>
                <div className='d-inline-block ms-3' >
                    <img src={teamramania} alt='team' />
                    <div className='bg-white p-2 rounded text-start' >
                        <b className='d-block' >Ramania</b>
                        <span>Hacker</span>
                    </div>
                </div>
            </div>
        </section>
        <section id='join' className='py-4' >
            <h3 className='text-center' >Join Our Newsletter</h3>
            <form>
                <input type='text' className='form-control border-0' />
                <button type='submit' className='btn btn-warning text-white fw-bold' >Subscribe</button>
            </form>
        </section>
        <footer className='bg-white' >
            <div className='container' >
                <div className='row' >
                    <div className='col-md-5'>
                        <h3>CARE-X</h3>
                        <p>
                            Jl. Manyar Kerta Adi No.1,<br />
                        Klampis Ngasem, Kec. Sukolilo, <br />
                        Kota SBY, Jawa Timur 60116 <br /> <br />
                        Phone: +628 111 22 8888<br />
                        Email: cs@carex.co.id
                        </p>
                    </div>
                    <div className='col-md-3'>
                        <h5>Our Services</h5>
                        <ul id='footer-services' className='list-group' >
                            <li className='list-group-item border-0 ps-1 d-flex align-items-center' >
                                <span className="icon material-icons-outlined">keyboard_arrow_right</span> Sales Dashboard
                            </li>
                            <li className='list-group-item border-0 ps-1 d-flex align-items-center' >
                                <span className="icon material-icons-outlined">keyboard_arrow_right</span> Sales Portofolio
                            </li>
                            <li className='list-group-item border-0 ps-1 d-flex align-items-center' >
                                <span className="icon material-icons-outlined">keyboard_arrow_right</span> After Sales
                            </li>
                        </ul>
                    </div>
                    <div className='col-md-4'>
                        <h5>Our Social Network</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut minus omnis repudiandae quibusdam eos saepe veniam</p>
                        <div id='footer-socmed' >
                            <a className='btn btn-link' href='http://www.twitter.com' >
                                <i className="icon ion-logo-twitter"></i>
                            </a>
                            <a className='btn btn-link' href='http://www.facebook.com' >
                                <i className="icon ion-logo-facebook"></i>
                            </a>
                            <a className='btn btn-link' href='http://www.instagram.com' >
                                <i className="icon ion-logo-instagram"></i>
                            </a>
                            <a className='btn btn-link' href='http://www.skype.com' >
                                <i className="icon ion-logo-skype"></i>
                            </a>
                            <a className='btn btn-link' href='http://www.linkedin.com' >
                                <i className="icon ion-logo-linkedin"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='copy-right p-4 text-end'>
                Designed by <span className='text-warning' >CARE-X Teams</span>
            </div>
        </footer>
    </div>)
}

export default HomePage