import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdError } from "react-icons/md";

import "./error.css"
export default function Error() {
  return (
    <div>
      <div className="container">
        <div className="ErrorContent">
          <div className='errorIcon'>
            <MdError className='error' />

          </div>
          <span className="error404">
            404
          </span>
          <h1>Something went wrong..!</h1>

          <NavLink to="/">Go Back Home</NavLink>
        </div>
      </div>
    </div>
  )
}
