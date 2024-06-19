import "./footer.css"
import bannerLogo from "../../Images/lo8a-png-white.png"
import bannerPoem from "../../Images/lo8a-poem-white.png"
import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import Search from "../Search/Search"

const Footer = () => {
  return <>
    <div className="footer">
      <div className="overlay" />
      <div className="footerContainer">
   
        <div className="footerLinks">
          <div className="footerSearch">
            <Search />
          </div>
          <Nav className='footerNavLinks'>
            <Nav.Link as={NavLink} to="/" className='navLink'>الصفحة الرئيسية</Nav.Link>
            <Nav.Link as={NavLink} to="/fqa" className='navLink'>الاسئلة المتكررة</Nav.Link>
            <Nav.Link as={NavLink} to="/refrences" className='navLink'>المراجع</Nav.Link>
            <Nav.Link as={NavLink} to="/contact-us" className='navLink'>راسلنا</Nav.Link>
          </Nav>
        </div>
     
        <div className="footerLogo">
            <img src={bannerLogo} alt={bannerLogo} />
            <img src={bannerPoem} alt="bannerPome" className='footerpome' />
          </div>
      </div>

      <div className="text">
        <p>All Rights Are Reserved &copy; <span className="year">2024</span> </p>
      </div>

    </div>
  </>
}

export default Footer