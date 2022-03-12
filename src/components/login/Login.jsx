import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { loginAPI } from '../../redux/api/api.auth'
import * as typesAuth from '../../redux/types/type.auth'
import './login.scss'
import Swal from 'sweetalert2'


const Login = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [formState, setForm] = useState({
        email: "",
        password: "",        
    })

    const onSubmit = (e) => {
        e.preventDefault()
        loginAPI(formState)
        .then(res => {
            dispatch({
                type: typesAuth.LOGIN_SUCCESS,
                payload: {
                    user: res?.data[0] || {},
                    token: res?.data[0]?.token 
                }
            })

            navigate(`/${res?.data[0]?.nik}/home`)
        })
        .catch(err => {
            console.log('[loginAPI]', err)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: err?.response?.data?.message || err.message
              })            
        })
    }

    const onChange = e => {
        setForm({
            ...formState,
            [e.target.name]: e.target.value
        })
    }


    return (<div className='w-100 hv-100 bg-light d-flex align-items-center justify-content-center' >
        <form onSubmit={onSubmit} className='px-4 py-3 shadow-sm bg-white rounded-8' style={{ maxWidth: '350px' }} >
            <h3 className='text-center text-warning' >LOGIN</h3>
            <hr />
            <div className="input-group my-4 shadow-sm">
                <span className="input-group-text bg-white" id="basic-addon1">
                    <span className="material-icons-outlined text-warning">account_circle</span>
                </span>
                <input type="email" onChange={onChange} name='email' className="form-control" placeholder="Enter email" aria-label="Email" required />
            </div>
            <div className="input-group mb-4 shadow-sm">
                <span className="input-group-text bg-white" id="basic-addon1">
                    <span className="material-icons-outlined text-warning">lock</span>
                </span>
                <input type="password" onChange={onChange} name='password' className="form-control" placeholder="Enter password" aria-label="Password" required />
            </div>
            <div>
                <NavLink className='btn-link text-decoration-none ' to='/register' >Create an account</NavLink>
            </div>
            <div className='my-3'>
                <button className='btn w-100 btn-success' >LOGIN</button>
            </div>
        </form>
    </div>)
}

export default Login