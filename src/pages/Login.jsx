import React, { useState } from 'react'
import "./login.css"
import { NavLink, useNavigate } from 'react-router-dom'
import { actLogin } from '../store/loging'
import { useDispatch, useSelector } from 'react-redux'
export default function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { loggedIn, username } = useSelector(state => state.login)
  const [name, setName] = useState()
  const [pass, setPass] = useState()


  const onSubmit = async () => {
    console.log("clicked")
    let data = {
      username: name,
      password: pass
    }
    if (name && pass.length >= 5) {
      dispatch(actLogin(data))
    }
  }

  if (loggedIn) {
    console.log(username)
    navigate("/")
  }
  return (

    <div className="Form">
      <h2 className='text-center mb-5'>تسجيل الدخول</h2>

      <div className="row mt-3 text-end">
        <div class="col">
          <label htmlFor="name">اسم المستخدم </label>
          <input type="text" class="form-control" aria-label="name" id='name' onChange={(e) => setName(e.target.value)} />
        </div>
      </div>
      <div className="row mt-3 text-end">
        <div class="col">
          <label htmlFor="password">كلمة المرور</label>
          <input type="password" class="form-control" aria-label="password" id='password' onChange={(e) => setPass(e.target.value)} />
        </div>
      </div>

      <div className="row text-end ">
        <div className="registerBtn col ">
          <NavLink to="register">انشاء حساب جديد ؟</NavLink>

          <button className='btn btn-info mt-3 ' onClick={() => { onSubmit() }}>تسجيل الدخول</button>
        </div>
      </div>
    </div>
  )
}
