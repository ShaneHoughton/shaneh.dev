import classes from './NavHeader.module.css';
import { Link } from 'react-router-dom';
import DropDownNavMenu from '../DropDownNavMenu/DropDownNavMenu';

const NavHeader = () => {
  return (
    <header className={classes.header}>
      <Link to="/"><h1>shaneh.dev</h1></Link>
      
      <nav>
        <ul>
          <li>
            <Link className={classes.link} to="/">About</Link>
          </li>
          <li>
            <Link  className={classes.link} to="/projects">Projects</Link>
          </li>
          {/* <li>
            <a href="https:example.com">Contact</a>
          </li> */}
        </ul>
      </nav>
    <div className={classes['drop-down']}><DropDownNavMenu/></div>
    
    </header>
  )
}

export default NavHeader