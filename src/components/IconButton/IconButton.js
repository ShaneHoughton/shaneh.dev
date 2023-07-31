import classes from './IconButton.module.css';

const IconButton = (props) => {
  return (
    <div className={classes['icon-button']}>{props.children}</div>
  )
}
export default IconButton