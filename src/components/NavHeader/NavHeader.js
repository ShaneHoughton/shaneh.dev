import classes from './NavHeader.module.css';
import { Link } from 'react-router-dom';
import DropDownMenu from '../DropDownMenu/DropDownMenu';

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
    <div className={classes['drop-down']}><DropDownMenu/></div>
    
    </header>
  )
}

export default NavHeader