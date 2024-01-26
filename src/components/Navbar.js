import React from 'react'
import propTypes from 'prop-types'
import { Link , Outlet } from 'react-router-dom';

export default function Navbar(props){
    return(
        <>
        <nav className={`navbar navbar-expand-lg  navbar-dark bg-dark `}>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              {props.title}
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="/navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    {props.about}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/services">
                    {props.service}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
              <Outlet/>
              <div className={`form-check form-switch pe-3 text-${props.mode==="dark"?"light":"dark"}`}>
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleSwitch}/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{color:"#fff"}} >Dark Blue Mode</label>
              </div>
              <div className={`form-check form-switch pe-3 text-${props.mode==="dark"?"light":"dark"}`}>
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleSwitch3}/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault"   style={{color:"#fff"}}>Dark Purple Mode</label>
              </div>
              <div className={`form-check form-switch pe-3 text-${props.mode==="dark"?"light":"dark"}`}>
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleSwitch4}/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault"   style={{color:"#fff"}}>Dark Green Mode</label>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
};

Navbar.defaultProps = {
  title : "Reactjs Word",
  service : "Services",
  about : "About"

}

Navbar.propTypes = {
  title : propTypes.string.isRequired,
  service : propTypes.string.isRequired,
  about : propTypes.string.isRequired
}