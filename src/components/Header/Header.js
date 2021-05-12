import React, { Component } from 'react';
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import CustomButton from "../Button/Button";
import {
  HomeRounded,
  SchoolRounded,
  WorkRounded,
  Facebook,
  Twitter,
  LinkedIn,
  GitHub,
  Telegram,
} from "@material-ui/icons";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link,NavLink,withRouter} from 'react-router-dom'
import resumeData from "../../utils/resumeData";
import "./Header.css";
import '../../App.css';
import '../../App'

const Header =(props)=>{

    const pathName = props.location.path
    
        return (
            <>
            <Navbar expand="lg" sticky="top" className="header">
            {/*homelink*/}
            <NavLink as={NavLink} to='/'>
                <Navbar.Brand className="header_home">
                    <HomeRounded/>
                </Navbar.Brand>
            </NavLink>
            <Navbar.Toggle/>

            {/*Resume link*/} 
            <Navbar.Collapse>
            <Nav className="header_left">
                <Nav.Link as={NavLink} to="/" className={pathName === "/"?"header_link_active":'header_link'}>
                    Resume
                </Nav.Link>
            {/* Portfolio */}
                <Nav.Link as={NavLink} to="/portfolio" className={pathName === "/portfolio"?"header_link_active":'header_link'}> 
                   Portfolio
                </Nav.Link>
            </Nav>

            <div className="header_right">
                {Object.keys(resumeData.socials).map((key)=>(
                    <a href="">{resumeData.socials[key].icon}</a>
                    ))}

          <CustomButton text={"Hire Me"} icon={<Telegram />} />
        </div>

            </Navbar.Collapse>
            </Navbar>

            </>
        );
}

export default  withRouter(Header);