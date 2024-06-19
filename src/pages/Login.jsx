import React, { useState } from 'react'
import "./login.css"
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState()
  const [pass, setPass] = useState()
  const [loggedIn, setLoggedIn] = useState(false)
  const onSubmit = async () => {
    if (email.includes("@") && pass.length >= 5) {
      const response = await axios.post("http://localhost:3000/Login", { email, pass })
      console.log(response)
      if (response.status === 201) {
        setLoggedIn(true)
      }
    }
  }

  if (loggedIn) {
    navigate("/")
  }
  return (

    <div className="Form">
      <h2 className='text-center mb-5'>تسجيل الدخول</h2>

      <div className="row mt-3 text-end">
        <div class="col">
          <label htmlFor="email">عنوان البريد الالكتروني </label>
          <input type="text" class="form-control" aria-label="email" id='email' onChange={(e) => setEmail(e.target.value)} />
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
