import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { registerAPI } from '../../redux/api/api.auth'
import * as typesAuth from '../../redux/types/type.auth'
import './register.scss'
import Swal from 'sweetalert2'


const Register = () => {
    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [formState, setForm] = useState({
        email: "",
        password: "",
        name: "",
        nik: ""
    })
     const stateAuth = useSelector(state => state.auth )

    useEffect(() => {
        if(stateAuth.user){
            navigate(`/${stateAuth.user.nik}/home`)
        }
    }, [stateAuth.user])

    const onSubmit = (e) => {
        e.preventDefault()
        
        if(formState.password !== formState.confirm_password) {            
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'The password confirmation does not match.'
              })  
        }else {
            delete formState.confirm_password
            registerAPI(formState)
            .then(res => {
                dispatch({
                    type: typesAuth.LOGIN_SUCCESS,
                    payload: {
                        user: res?.data[0] || {},
                        token: res?.data[0]?.token 
                    }
                })

                Swal.fire('Success!', '', 'success')
            })
            .catch(err => {
                console.log('[registerAPI]', err)
                const message = err?.response?.data?.message || err.message
               
                if(message === 'success') {
                    dispatch({
                        type: typesAuth.LOGIN_SUCCESS,
                        payload: {
                            user: err?.response?.data?.data[0] || {},
                            token: err?.response?.data?.data[0]?.token 
                        }
                    })
                    Swal.fire('Success!', '', 'success')
                    
                }  else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: message
                      })                
                }              

            })
        }
    }

    const onChange = e => {
        setForm({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    return (<div className='w-100 hv-100 bg-light d-flex align-items-center justify-content-center' >
        <form onSubmit={onSubmit} className='px-4 py-3 shadow-sm bg-white rounded-8 py-4' style={{ maxWidth: '450px' }} >
            <h3 className='text-center text-warning' >Register</h3>
            <hr />
            <div className="input-group my-4 shadow-sm">
                <span className="input-group-text bg-white" >
                    <span class="material-icons-outlined">fingerprint</span>
                </span>
                <input type="number" name="nik" onChange={onChange} className="form-control" placeholder="Enter NIK" aria-label="name" required />
            </div>
            <div className="input-group my-4 shadow-sm">
                <span className="input-group-text bg-white" >
                    <span class="material-icons-outlined">person</span>
                </span>
                <input type="text" name='name' onChange={onChange} className="form-control" placeholder="Enter name" aria-label="name" required />
            </div>
            <div className="input-group my-4 shadow-sm">
                <span className="input-group-text bg-white" >
                    <span class="material-icons-outlined">alternate_email</span>
                </span>
                <input type="email" name='email' onChange={onChange} className="form-control" placeholder="Enter email" aria-label="Email" required />
            </div>
            <div className="input-group mb-4 shadow-sm">
                <span className="input-group-text bg-white" >
                    <span class="material-icons-outlined text-dark">password</span>
                </span>
                <input type="password" onChange={onChange} name='password' className="form-control" placeholder="Enter password" aria-label="Password" required />
            </div>
            <div className="input-group mb-4 shadow-sm">
                <span className="input-group-text bg-white" >                                        
                    <span class="material-icons-two-tone">password</span>
                </span>
                <input type="password" onChange={onChange} name='confirm_password' className="form-control" placeholder="Enter confirm password" aria-label="Password" required403 Forbidden />
            </div>
            <div>
                <NavLink className='btn-link text-decoration-none ' to='/login' >Already have an account ?</NavLink>
            </div>
            <div className='my-3'>
                <button type='submit' className='btn w-100 btn-success' >REGISTER</button>
            </div>
        </form>
    </div>)
}

export default Register