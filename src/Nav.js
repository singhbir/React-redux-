import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    NavbarText
  } from 'reactstrap';
import './App.css'

  const Navs = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
              <img src={props.upic} alt="user pic" height="60px" width="60px"/>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
           
               <NavbarText className="ntext"> <h2>{props.uname}</h2></NavbarText>
           
          </Collapse>
        </Navbar>
      </div>
    );
  }
  
  export default Navs;