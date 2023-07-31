import classes from './CustomButton.module.css';

const CustomButton = (props) => {
  return (
    <div className={classes.button} onClick={props.onClick}>
      {props.children}
    </div>
  )
}

export default CustomButton;