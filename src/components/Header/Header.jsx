
import "./header.css"
import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import logoLugha from '../../Images/lo8a-blue.png'
import { useDispatch, useSelector } from "react-redux"

import { logOut } from "../../store/loging"
import { emptyFavs } from "../../store/favSlice"
export default function Header() {

  const { loggedIn } = useSelector(state => state.login)
  const dispatch = useDispatch()

  const logout = () => {
    dispatch(logOut())
    dispatch(emptyFavs())
  }
  return (
    <>
      <div className='header'>

        <div className='container'>

          <div className="loginLinks">
            <Nav>
              {!loggedIn ? <Nav.Link as={NavLink} to="/sign" className='navLink' >تسجل الدخول </Nav.Link>
                : <Nav.Link as={NavLink} className='navLink' onClick={logout} >تسجل الخروج </Nav.Link>}
            </Nav>
          </div>
          <Nav className='navLinks'>

            <Nav.Link as={NavLink} to="/fqa" className='navLink'>الاسئلة المتكررة</Nav.Link>
            <Nav.Link as={NavLink} to="/favs" className='navLink'>المفضلة</Nav.Link>
            <Nav.Link as={NavLink} to="/contact-us" className='navLink'>راسلنا</Nav.Link>
            <Nav.Link as={NavLink} to="/" className='navLink'>الصفحة الرئيسية</Nav.Link>
          </Nav>
          <div className='logo'>
            <NavLink to="/"><img src={logoLugha} alt="Logo Lugha" /></NavLink>
          </div>
        </div>

      </div>
    </>
  )
}
