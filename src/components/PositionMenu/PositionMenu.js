import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import classes from './PositionMenu.module.css';

export default function PositionedMenu(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const options = props.options;
  console.log(options);
  const [label, setLabel] = useState( !options.empty ? options[0] : 'Options');
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const switchOption = (option) =>{
    setLabel(option);
    props.setOption(option)
    handleClose();
  }

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={
          {
          fontFamily:"monospace",
          textTransform:'lowercase',
          margin: '2rem 0',
          color: '#F9F9DC',
          backgroundColor: "#13668a7d",
          border: '.5px solid white'
          }}
      >
        {label}
        <div className={classes['drop-down-icon']}></div>
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        
      >
        
        {props.options?.map(option=>(
        
            <MenuItem 
            key={option} 
            onClick={()=>switchOption(option)}
            style={{fontFamily:"monospace"}}
            >
              {option}
            </MenuItem>
        
        ))}
       
       
      </Menu>
    </div>
  );
}