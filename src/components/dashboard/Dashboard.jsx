import Navbar from "../navbar/Navbar"
import "./dashboard.scss"

const Dashboard = () => {

    const renderSalesPipeline = () => {
        return (<>
            <div className='bg-white p-2 progress-dashboard' >
                <p>
                    Hipernet | Metro-e | 500 Mbps
                                    </p>
                <div className='progress-container position-relative' >
                    <div className="progress">
                        <div className="progress-bar w-2 bg-lowgreen rounded" style={{ width: '50%' }} role="progressbar" aria-valuenow="2" aria-valuemin="0" aria-valuemax="10"></div>
                    </div>
                    <div className='progress-bar-start' >
                        <div className='dot' ></div>
                    </div>
                    <small className='label-start' >Provisioning Started</small>
                    <div className='progress-bar-end' style={{ left: '50%' }} >
                        <div className='dot' ></div>
                    </div>
                    <small className='label-end' style={{ left: 'calc(50% - 25px)' }} >BASO Started</small>
                    <div className='progress-bar-completed' >
                        <div className='dot' ></div>
                    </div>
                    <small className='label-completed' >Biling Completed</small>
                </div>
            </div>

            <div className='bg-white p-2 progress-dashboard mt-4' >
                <p>
                    Indosat | SL WDM | 10,000 Mbps
                                    </p>
                <div className='progress-container position-relative' >
                    <div className="progress">
                        <div className="progress-bar w-2 bg-lowgreen rounded" style={{ width: '50%' }} role="progressbar" aria-valuenow="2" aria-valuemin="0" aria-valuemax="10"></div>
                    </div>
                    <div className='progress-bar-start' >
                        <div className='dot' ></div>
                    </div>
                    <small className='label-start' >Provisioning Started</small>
                    <div className='progress-bar-end' style={{ left: '50%' }} >
                        <div className='dot' ></div>
                    </div>
                    <small className='label-end' style={{ left: 'calc(50% - 25px)' }} >BASO Started</small>
                    <div className='progress-bar-completed' >
                        <div className='dot' ></div>
                    </div>
                    <small className='label-completed' >Biling Completed</small>
                </div>
            </div>
        </>)
    }

    return (<div className='bg-light' >
        <Navbar />
        <div className='bg-white' >
            <div className='container' >
                <div className='row' >
                    <div className='mt-4 col d-md-flex align-items-center justify-content-between' >
                        <h3 >SALES PERFORMANCE</h3>
                        <div>
                            <input type="date" className="form-control" placeholder="Pilih Tanggal" />
                        </div>
                    </div>
                </div>
                <div className='row' >
                    <div className='col mt-4' >
                        <div className='card-dashboard bg-light d-inline-block me-4' >
                            <h6 className='text-danger text-center pt-2' >METRO</h6>
                            <h2 className='text-center pt-4' >
                                50/100
                            </h2>
                            <h5 className='text-center' >Gbps</h5>
                            <div className='text-center'>
                                <div className="progress">
                                    <div className="progress-bar w-50 bg-success rounded" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>

                        <div className='card-dashboard bg-light d-inline-block me-4' >
                            <h6 className='text-center pt-2 text-purple' >IPTX</h6>
                            <h2 className='text-center pt-4' >
                                50/100
                            </h2>
                            <h5 className='text-center' >Gbps</h5>
                            <div className='text-center'>
                                <div className="progress">
                                    <div className="progress-bar w-50 bg-success rounded" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>

                        <div className='card-dashboard bg-light d-inline-block' >
                            <h6 className='text-center pt-2 text-bluesea' >CNDC</h6>
                            <h2 className='text-warning text-center pt-4' >
                                2/10
                            </h2>
                            <h5 className='text-center' >Gbps</h5>
                            <div className='text-center'>
                                <div className="progress">
                                    <div className="progress-bar w-2 bg-warning rounded" style={{ width: (2 / 10 * 100) + 'px' }} role="progressbar" aria-valuenow="2" aria-valuemin="0" aria-valuemax="10"></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='row mt-4' >
                    <div className='mt-4 col d-md-flex align-items-center justify-content-between' >
                        <h3 >REVENUE PERFORMANCE</h3>
                        <div>
                            <input type="date" className="form-control" placeholder="Pilih Tanggal" />
                        </div>
                    </div>
                </div>
                <div className='row' >
                    <div className='col mt-4' >
                        <div className='card-dashboard bg-light d-inline-block me-4' >
                            <h6 className='text-danger text-center pt-2' >METRO</h6>
                            <h2 className='text-center pt-4' >
                                14.77/10.74
                            </h2>
                            <h5 className='text-center' >Gbps</h5>
                            <div className='text-center'>
                                <div className="progress">
                                    <div className="progress-bar w-50 bg-success rounded" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>

                        <div className='card-dashboard bg-light d-inline-block me-4' >
                            <h6 className='text-center pt-2 text-purple' >IPTX</h6>
                            <h2 className='text-center pt-4' >
                                7.49/6.40
                            </h2>
                            <h5 className='text-center' >Gbps</h5>
                            <div className='text-center'>
                                <div className="progress">
                                    <div className="progress-bar w-50 bg-success rounded" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>

                        <div className='card-dashboard bg-light d-inline-block' >
                            <h6 className='text-center pt-2 text-bluesea' >CNDC</h6>
                            <h2 className='text-warning text-center pt-4' >
                                0.49/0.56
                            </h2>
                            <h5 className='text-center' >Gbps</h5>
                            <div className='text-center'>
                                <div className="progress">
                                    <div className="progress-bar w-2 bg-warning rounded" style={{ width: (2 / 10 * 100) + 'px' }} role="progressbar" aria-valuenow="2" aria-valuemin="0" aria-valuemax="10"></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='row mt-4' >
                    <div className='mt-4 col d-md-flex align-items-center justify-content-between' >
                        <h3 >SALES PIPELINE</h3>
                    </div>
                </div>
                <div id="sales-pipeline" className='row' >
                    <div className='col my-4 container-tab' >
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active text-center text-danger fw-bold" id="metro-tab" data-toggle="tab" href="#metro" role="tab" aria-controls="metro" aria-selected="true">METRO</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-center text-purple fw-bold" id="iptx-tab" data-toggle="tab" href="#iptx" role="tab" aria-controls="iptx" aria-selected="false">IPTX</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-center text-bluesea fw-bold" id="cndc-tab" data-toggle="tab" href="#cndc" role="tab" aria-controls="cndc" aria-selected="false">CNDC</a>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="metro" role="tabpanel" aria-labelledby="metro-tab">
                                {renderSalesPipeline()}
                            </div>
                            <div className="tab-pane fade" id="iptx" role="tabpanel" aria-labelledby="iptx-tab">
                                {renderSalesPipeline()}
                            </div>
                            <div className="tab-pane fade" id="cndc" role="tabpanel" aria-labelledby="cndc-tab">
                                {renderSalesPipeline()}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>)
}

export default Dashboard