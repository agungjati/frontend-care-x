import Navbar from "../navbar/Navbar"
import "./customerDatabase.scss"

const CustomerDatabaseDetail = () => {


    return (<div className='bg-light' >
        <Navbar />
        <div className='bg-white' >
            <div className='container' >
                <div className='row' >
                    <div className='mt-4 col-12' >
                        <div id='customer' >
                            <div className={`card-customer d-inline-flex align-items-center justify-content-center ms-0`}
                                style={{ background: `url('/assets/img/indosat.jpg') no-repeat center #F7F7F7` }} >
                            </div>
                            <br />
                            <h4>INDOSAT TBK.</h4>
                            <div className='my-4 py-2 px-3  bg-light' style={{ maxWidth: '363px', borderRadius: '8px' }} >
                                <p className='mb-1' >Segment : NAP</p>
                                <p className='mb-1' >Address: Surabaya</p>
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