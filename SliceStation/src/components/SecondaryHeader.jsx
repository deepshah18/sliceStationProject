import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { FaBeer } from "react-icons/fa";
import { BiPhone, BiEnvelope } from 'react-icons/bi'; 
    
const SecondaryHeader = () => {
  return (
    <div className="bg-dark text-light p-3 d-flex justify-content-between align-items-center">
      <div className='m-2' style={{ paddingLeft: '100px' }}>
        <BiPhone size={24} color="white" />
        <span className="mx-2">+91 9512212100</span>
        <BiEnvelope size={24} color="white" style={{marginLeft:'30px'}}/>
        <span className="mx-2">info@naturaldehydration.com</span>
      </div>
      <div>
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            <FaBeer />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default SecondaryHeader;
