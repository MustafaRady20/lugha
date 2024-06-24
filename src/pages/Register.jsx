import React, { useState } from 'react'
import "./register.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function Register() {

  const navigate = useNavigate()
  const [registered, setRegistered] = useState(false)
  const [name, setFname] = useState("")


  const [pass, setPass] = useState("")
  const [confirmPass, setConfirmPass] = useState("")


  const handleFirstName = (value) => {
    setFname(value)
  }



  const handlePassword = (pass) => {
    setPass(pass)
  }

  const handleConfirmPass = (pass) => {
    setConfirmPass(pass)
  }



  const onSubmitHandler = () => {

    const sendData = async () => {
      if (name && pass.length >= 5 && pass === confirmPass) {
        try {
          const response = await axios.post("http://localhost:8080/signup", { username: name, password: pass })

          console.log(response)
          if (response.status === 200) {
            setRegistered(true)
            console.log(registered)
          }
        }
        catch (error) {
          console.log(error)
        }

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
          <label htmlFor="firstname">اسم المستخدم</label>
          <input type="text" className="form-control" aria-label="First name" id='firstname' value={name} onChange={(e) => handleFirstName(e.target.value)} />
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
        <button className='btn btn-info mt-3 ' onClick={() => onSubmitHandler()}>انشاء حساب</button>
      </div>
    </div>
  )
}
