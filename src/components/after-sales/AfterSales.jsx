import Navbar from "../navbar/Navbar"
import "./aftersales.scss";

const AfterSales = () => {
    return (<div className='bg-light' >
        <Navbar />
        <div className='bg-white' >
            <div id='after-sales' className='container mb-4' >
                <div className='row' >
                    <div className='mt-4 col-12' >
                        <h3 >After Sales</h3>
                    </div>
                    <div className='mt-4 mb-2 col-12 d-flex align-items-center justify-content-between' >
                        <span>Delivery</span>
                        <div>
                            <select className='form-select border-0 text-last-center fw-bold shadow' >
                                <option>Pilih Perusahaan</option>
                            </select>
                        </div>
                    </div>
                    <div className='col-12' >
                        <div className='d-inline-block' >
                            <table cellSpacing='0' cellPadding='0' >
                                <thead>
                                    <tr>
                                        <th width='200' >
                                            <span className='d-block border-end' >Order ID</span>
                                        </th>
                                        <th width='200'>
                                            <span className='d-block border-end' >Company Name</span>
                                        </th>
                                        <th width='200'>
                                            <span className='d-block border-end' >Product</span>
                                        </th>
                                        <th width='200'>
                                            Caps
                                    </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='ps-3'>
                                            <div className='h-100 px-2 py-2 border-bottom' >123</div>
                                        </td>
                                        <td>
                                            <div className='h-100 px-2 py-2 border-bottom' >Indosat</div>
                                        </td>
                                        <td>
                                            <div className='h-100 px-2 py-2 border-bottom' >Metro</div>
                                        </td>
                                        <td className='pe-3'>
                                            <div className='h-100 px-2 py-2 border-bottom' >50 Gbps</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='ps-3'>
                                            <div className='h-100 px-2 py-2 border-bottom' >123</div>
                                        </td>
                                        <td>
                                            <div className='h-100 px-2 py-2 border-bottom' >Indosat</div>
                                        </td>
                                        <td>
                                            <div className='h-100 px-2 py-2 border-bottom' >Metro</div>
                                        </td>
                                        <td className='pe-3'>
                                            <div className='h-100 px-2 py-2 border-bottom' >50 Gbps</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='ps-3'>
                                            <div className='h-100 px-2 py-2 border-bottom' >123</div>
                                        </td>
                                        <td>
                                            <div className='h-100 px-2 py-2 border-bottom' >Indosat</div>
                                        </td>
                                        <td>
                                            <div className='h-100 px-2 py-2 border-bottom' >Metro</div>
                                        </td>
                                        <td className='pe-3'>
                                            <div className='h-100 px-2 py-2 border-bottom' >50 Gbps</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='ps-3'>
                                            <div className='h-100 px-2 py-2 border-bottom' >123</div>
                                        </td>
                                        <td>
                                            <div className='h-100 px-2 py-2 border-bottom' >Indosat</div>
                                        </td>
                                        <td>
                                            <div className='h-100 px-2 py-2 border-bottom' >Metro</div>
                                        </td>
                                        <td className='pe-3'>
                                            <div className='h-100 px-2 py-2 border-bottom' >50 Gbps</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='ps-3' >
                                            <div className='h-100 px-2 py-2' >123</div>
                                        </td>
                                        <td>
                                            <div className='h-100 px-2 py-2' >Indosat</div>
                                        </td>
                                        <td>
                                            <div className='h-100 px-2 py-2' >Metro</div>
                                        </td>
                                        <td className='pe-3'>
                                            <div className='h-100 px-2 py-2' >50 Gbps</div>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                            <div className='d-flex justify-content-end mt-2' >
                                <button id='download-xls' className='btn btn-sm btn-primary ms-lg-4 d-flex align-items-center fw-bold' >
                                    <span className="material-icons-outlined">file_download</span> Download xls
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4 mb-2 col-12 d-flex align-items-center justify-content-between' >
                        <span>Assurance</span>
                        <div>
                            <select className='form-select border-0 text-last-center fw-bold shadow' >
                                <option>Pilih Perusahaan</option>
                            </select>
                        </div>
                    </div>
                    <div className='col-12' >
                        <div className='d-inline-block'>
                            <table cellSpacing='0' cellPadding='0' >
                                <thead>
                                    <tr>
                                        <th width='200' >
                                            <span className='d-block border-end' >Order ID</span>
                                        </th>
                                        <th width='200'>
                                            <span className='d-block border-end' >Company Name</span>
                                        </th>
                                        <th width='200'>
                                            <span className='d-block border-end' >Product</span>
                                        </th>
                                        <th width='200'>
                                            Caps
                                    </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='ps-3'>
                                            <div className='h-100 px-2 py-2 border-bottom' >123</div>
                                        </td>
                                        <td>
                                            <div className='h-100 px-2 py-2 border-bottom' >Indosat</div>
                                        </td>
                                        <td>
                                            <div className='h-100 px-2 py-2 border-bottom' >Metro</div>
                                        </td>
                                        <td className='pe-3'>
                                            <div className='h-100 px-2 py-2 border-bottom' >50 Gbps</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='ps-3'>
                                            <div className='h-100 px-2 py-2 border-bottom' >123</div>
                                        </td>
                                        <td>
                                            <div className='h-100 px-2 py-2 border-bottom' >Indosat</div>
                                        </td>
                                        <td>
                                            <div className='h-100 px-2 py-2 border-bottom' >Metro</div>
                                        </td>
                                        <td className='pe-3'>
                                            <div className='h-100 px-2 py-2 border-bottom' >50 Gbps</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='ps-3'>
                                            <div className='h-100 px-2 py-2 border-bottom' >123</div>
                                        </td>
                                        <td>
                                            <div className='h-100 px-2 py-2 border-bottom' >Indosat</div>
                                        </td>
                                        <td>
                                            <div className='h-100 px-2 py-2 border-bottom' >Metro</div>
                                        </td>
                                        <td className='pe-3'>
                                            <div className='h-100 px-2 py-2 border-bottom' >50 Gbps</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='ps-3'>
                                            <div className='h-100 px-2 py-2 border-bottom' >123</div>
                                        </td>
                                        <td>
                                            <div className='h-100 px-2 py-2 border-bottom' >Indosat</div>
                                        </td>
                                        <td>
                                            <div className='h-100 px-2 py-2 border-bottom' >Metro</div>
                                        </td>
                                        <td className='pe-3'>
                                            <div className='h-100 px-2 py-2 border-bottom' >50 Gbps</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='ps-3' >
                                            <div className='h-100 px-2 py-2' >123</div>
                                        </td>
                                        <td>
                                            <div className='h-100 px-2 py-2' >Indosat</div>
                                        </td>
                                        <td>
                                            <div className='h-100 px-2 py-2' >Metro</div>
                                        </td>
                                        <td className='pe-3'>
                                            <div className='h-100 px-2 py-2' >50 Gbps</div>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                            <div className='d-flex justify-content-end mt-2' >
                                <button id='download-xls' className='btn btn-sm btn-primary ms-lg-4 d-flex align-items-center fw-bold' >
                                    <span className="material-icons-outlined">file_download</span> Download xls
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>)
}

export default AfterSales