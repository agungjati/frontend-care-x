import Navbar from "../navbar/Navbar"
import "./ordertracking.scss"

const OrderTracking = () => {

    return (<div className='bg-light' >
        <Navbar />
        <div className='bg-white' >
            <div id='order-tracking' className='container mb-4' >
                <div className='row' >
                    <div className='mt-4 col-12 d-flex align-items-center justify-content-between' >
                        <h3 >Order Tracking</h3>
                        <div className='d-flex align-items-center' >
                            <button id='download-xls' className='btn btn-primary ms-lg-4 d-flex align-items-center fw-bold' >
                                <span className="material-icons-outlined">file_download</span> Download xls
                            </button>
                        </div>
                    </div>
                    <div className='mt-4 mb-2 col-12 d-flex align-items-center justify-content-between' >
                        <table className='w-100' cellPadding='0' cellSpacing='0' >
                            <thead>
                                <tr>
                                    <th><span className='d-block border-end' >Witel</span></th>
                                    <th><span className='d-block border-end' >On Going Progress</span></th>
                                    <th> <span className='d-block border-end' >Provisioning Complete</span></th>
                                    <th>Cancelled</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Denpasar</td>
                                    <td>100</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>Jember</td>
                                    <td>50</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>Kediri</td>
                                    <td>50</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>Kupang</td>
                                    <td>50</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>Madiun</td>
                                    <td>50</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>Madura</td>
                                    <td>50</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>Malang</td>
                                    <td>50</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>Mataram</td>
                                    <td>50</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>Pasuruan</td>
                                    <td>100</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>Sidoarjo</td>
                                    <td>100</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>Singaraja</td>
                                    <td>100</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>Surabaya Selatan</td>
                                    <td>100</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>Surabaya Utara</td>
                                    <td>100</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                   
                   
                </div>
            </div>
        </div>
    </div>)
}

export default OrderTracking