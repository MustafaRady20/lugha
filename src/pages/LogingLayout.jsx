import { Outlet } from "react-router-dom"
import "./loginglayout.css"
import logo from "../Images/lo8a-png-white.png"
function LoggingLayout() {
  return (
    <div className="loggingLayout">
      <div className="overlay"></div>
        <div className="content">
        <div className="form">
              <Outlet/>
            </div>
            <div className="lughaLogo">
                <img src={logo} alt="logo" />
            </div>
           
        </div>
    </div>
  )
}

export default LoggingLayout