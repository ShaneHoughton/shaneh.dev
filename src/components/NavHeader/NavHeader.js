import classes from './NavHeader.module.css';
import { Link } from 'react-router-dom';
import DropDownMenu from '../DropDownMenu/DropDownMenu';

const NavHeader = () => {
  return (
    <header className={classes.header}>
      <h1>shaneh.dev</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
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