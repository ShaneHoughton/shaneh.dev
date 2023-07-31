import classes from './ProjectTemplate.module.css'
const ProjectTemplate = (props) => {
  return (
    <div className={classes.template}>
      {props.children}
    </div>
  )
}

export default ProjectTemplate;