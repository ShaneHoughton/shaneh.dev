import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import classes from './DropDownMenu.module.css'; // Import the CSS file for styling

const DropDownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger Icon */}
      <IconButton aria-label="menu" sx={{color:'#F9F9DC'}} onClick={toggleMenu}>
        <ExpandMoreIcon />
        
      </IconButton>

      {/* Menu Links */}
      <div className={`${classes.menu} ${isOpen ? classes.active : ''}`}>
        <ul>
          <li>
            <Link onClick={()=>setIsOpen(false)} to="/about">About</Link>
          </li>
          <li>
            <Link onClick={()=>setIsOpen(false)} to="/projects">Projects</Link>
          </li>
          {/* <li>
            <Link to="/contact">Contact</Link>
          </li> */}
          {/* Add more menu links as needed */}
        </ul>
      </div>
    </>
  );
};

export default DropDownMenu;
