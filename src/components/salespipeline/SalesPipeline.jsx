import Navbar from "../navbar/Navbar"
import { useState, useEffect } from "react"
import { getAllCustomerAPI } from "../../redux/api/api.customer"
import { useSelector } from "react-redux"


const Checkbox = ({ children, name }) => {
    const [state, setstate] = useState(false)

    return (
        <div className={`form-check ${state ? 'bg-lowgreen text-white fw-bold' : 'bg-white'}  d-block rounded-8 mb-2`}>
            <label className="form-check-label p-2 px-md-3 d-block" for={'select' + name}>
                <input className="form-check-input rounded-8 border-0" type="checkbox" value="" id={'select' + name} name={name} onChange={e => setstate(e.target.checked)} />
                {children}
            </label>
        </div>
    )
}

const service_prospect_data = ["Metro", "IPTX", "CNDC"]
const SalesPipeline = () => {

    const [formState, setformState] = useState({
        company_id: null,
        service_prospect: [],
        status: 1,
        minutes_of_meeting: "",
        user_id: null,
        pic_name: "",
        pic_phone: "",
        pic_email: ""
    })
    const [customerState, setCustomer ] = useState([])
    const stateAuth = useSelector(state => state.auth)

    const onChange = (e) => {
        setformState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

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

    return (
        <div className='bg-light' >
            <Navbar />
            <div className='bg-white' >
                <div className='container' >
                    <div className='row mb-4' >
                        <div className='mt-4 mb-2 col-12 d-md-flex align-items-center justify-content-between' >
                            <h3 >SALES PIPELINE FORM - TAMBAH</h3>
                        </div>
                        <div className='col-md-6' >
                            <div className='p-2 px-md-5 pt-md-4 bg-light rounded-8' >
                                <div className='row' >
                                    <div className='col-md-6'>
                                        <label>Nama Customer</label>
                                    </div>
                                    <div className='col-md-6 mb-3'>
                                        <select name='company_id' onChange={onChange} className='form-select border-0 text-last-center fw-bold' >
                                            <option>Pilih Perusahaan</option>
                                            {
                                                customerState.map((cs, key) => (
                                                    <option value={cs.company_id}>{cs.name}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className='row' >
                                    <div className='col-md-6'>
                                        <label>PIC</label>
                                    </div>
                                    <div className='col-md-6 mb-3'>
                                        <b>-</b>
                                    </div>
                                </div>
                                <div className='row' >
                                    <div className='col-md-6'>
                                        <label>Nomor Telp</label>
                                    </div>
                                    <div className='col-md-6 mb-3'>
                                        <b>-</b>
                                    </div>
                                </div>
                                <div className='row' >
                                    <div className='col-md-6'>
                                        <label>Email</label>
                                    </div>
                                    <div className='col-md-6 mb-3'>
                                        <b>-</b>
                                    </div>
                                </div>
                                <div className='row' >
                                    <div className='col-md-6'>
                                        <label>Prospect Layanan</label>
                                    </div>
                                    <div className='col-md-6 mb-3'>
                                        <Checkbox name='metro' >
                                            <span className='d-block text-center me-2' >Metro</span>
                                        </Checkbox>
                                        <Checkbox name='iptx' >
                                            <span className='d-block text-center me-2' >IPTX</span>
                                        </Checkbox>
                                        <Checkbox name='cndc'>
                                            <span className='d-block text-center me-2' >CNDC</span>
                                        </Checkbox>
                                        <Checkbox name='lainnya' >
                                            <span className='d-block text-center me-2' >lainnya</span>
                                        </Checkbox>
                                    </div>
                                </div>
                                <div className='row' >
                                    <div className='col-md-6'>
                                        <label>Status</label>
                                    </div>
                                    <div className='col-md-6 mb-3'>
                                        <select className='form-select border-0 text-last-center fw-bold' >
                                            <option>Lead Prospect</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='row' >
                                    <div className='col-md-6'>
                                        <label>Status After Sales</label>
                                    </div>
                                    <div className='col-md-6 mb-3'>
                                        <div class="form-check">
                                            <label class="form-check-label" for="flexRadioDefault1">
                                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                <span>Pre-sales</span>
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <label class="form-check-label" for="flexRadioDefault2">
                                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                                <span>Delivery</span>
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <label class="form-check-label" for="flexRadioDefault3">
                                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                                                <span>Assurance</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 mt-2 mt-md-0' >
                            <div className='p-2 px-md-5 pt-md-4 bg-light rounded-8 h-100' >
                                <label className='mb-3' for='minutes-meeting' >Minutes of Meeting</label>
                                <textarea id='minutes-meeting' className='form-control rounded-8 border-0' placeholder='Input Text' style={{ height: '181px' }} ></textarea>
                            </div>
                        </div>
                    </div>
                    <div className='row mb-4' >
                        <div className='col' >
                            <button className='btn bg-lowgreen d-block fw-bold ms-auto text-white px-5 py-2 rounded-8' >Simpan</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SalesPipeline


// status after sales : muncul saat edit