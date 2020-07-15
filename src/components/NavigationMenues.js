import React from 'react'
import {Link,NavLink} from 'react-router-dom'
const NavigationMenues = () => {

  return (
   <div>
         <nav className="nav-wrapper grey">
           <div className="container">
           <NavLink to="#" className="brand-logo">B_vehicles </NavLink>
           <NavLink to="#" className="sidenav-trigger" data-target="mobile-link">
             <i className="material-icons">menu</i>
           </NavLink>
           <ul className="right hide-on-med-and-down">
             <li><Link to="/">home</Link></li>
             <li><NavLink to="/AboutUs">about us</NavLink></li>
             <li><NavLink to="/ContactUs">contact us</NavLink></li>
           </ul>
             </div>
         </nav>
         <ul className="sidenav" id="mobile-link">
           <li  className="center-align h3"><Link to="/">home</Link></li>
           <li className="center-align h3"><NavLink to="/About">about us</NavLink></li>
           <li className="center-align h3"><NavLink to="/Contact">contact us</NavLink></li>
           <li className="center-align h3"><NavLink to="/Contact">for sure</NavLink></li>
         </ul>

   </div>

  )


  }
  export default NavigationMenues
