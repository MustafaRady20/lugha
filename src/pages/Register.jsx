import React, { useState } from 'react'
import "./register.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function Register() {

  const navigate = useNavigate()
  const [registered, setRegistered] = useState(false)
  const [fname, setFname] = useState("")

  const [lname, setLname] = useState("")
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [confirmPass, setConfirmPass] = useState("")


  const handleFirstName = (value) => {
    setFname(value)
  }

  const handleLastName = (value) => {
    setLname(value)
  }

  const handleEmail = (value) => {
    setEmail(value)
  }

  const handlePassword = (pass) => {
    setPass(pass)
  }

  const handleConfirmPass = (pass) => {
    setConfirmPass(pass)
  }



  const onSubmitHandler = () => {

    let id = Math.floor(Math.random() * 100)

    const sendData = async () => {
      if (fname && lname && email.includes("@") && pass.length >= 5 && pass === confirmPass) {
        const response = await axios.post("http://localhost:3000/User", { id: id, fname, lname, email, pass })


        if (response.status === 201) {
          setRegistered(true)
        }
      }
      else {
        alert("something wrong, check that data you enter is correct and compelet.!")

      }
    }

    sendData()

  }

  if (registered) {
    navigate("sign")
  }


  return (

    <div className="Form">
      <h2 className='text-center mb-5'>إنشاء حساب</h2>
      <div className="row text-end">

        <div className="col">
          <label htmlFor="lastname">اسم العائلة</label>
          <input type="text" className="form-control" aria-label="Last name" id='lastname' value={lname} onChange={(e) => handleLastName(e.target.value)} />
        </div>
        <div className="col">
          <label htmlFor="firstname">الاسم الأول</label>
          <input type="text" className="form-control" aria-label="First name" id='firstname' value={fname} onChange={(e) => handleFirstName(e.target.value)} />
        </div>
      </div>

      <div className="row mt-3 text-end">
        <div className="col">
          <label htmlFor="email">عنوان البريد الالكتروني </label>
          <input type="text" className="form-control" aria-label="email" id='email' value={email} onChange={(e) => handleEmail(e.target.value)} />
        </div>
      </div>
      <div className="row mt-3 text-end">
        <div className="col">
          <label htmlFor="password">كلمة المرور</label>
          <input type="password" className="form-control" aria-label="password" id='password' value={pass} onChange={(e) => handlePassword(e.target.value)} />
        </div>
      </div>
      <div className="row mt-3 text-end">
        <div className="col">
          <label htmlFor="confirmPassword">تأكيد كلمة المرور</label>
          <input type="password" className="form-control" aria-label="confirmPassword" id='confirmPassword' onChange={(e) => handleConfirmPass(e.target.value)} />
        </div>
      </div>
      <div className="rwo text-end">
        <button className='btn btn-info mt-3 ' onClick={() => onSubmitHandler()}>تسجيل الدخول</button>
      </div>
    </div>
  )
}
