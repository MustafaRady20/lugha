
import "./header.css"
import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import logoLugha from '../../Images/lo8a-blue.png'

export default function Header() {

  return (
    <>
      <div className='header'>

        <div className='container'>

          <Nav className='navLinks'>
            <Nav.Link as={NavLink} to="/sign" className='navLink'>تسجيل الدخول  </Nav.Link>
            <Nav.Link as={NavLink} to="/fqa" className='navLink'>الاسئلة المتكررة</Nav.Link>
            <Nav.Link as={NavLink} to="/refrences" className='navLink'>المراجع</Nav.Link>
            <Nav.Link as={NavLink} to="/contact-us" className='navLink'>راسلنا</Nav.Link>
            <Nav.Link as={NavLink} to="/" className='navLink'>الصفحة الرئيسية</Nav.Link>
          </Nav>
          <div className='logo'>
            <NavLink to="/"><img src={logoLugha} alt="Logo Lugha" /></NavLink>
          </div>
          {/* <div className="toggleBtn" onClick={()=>{toggleNaveBar()}}>
                <FiAlignJustify />
                </div> */}
        </div>

      </div>
    </>
  )
}
