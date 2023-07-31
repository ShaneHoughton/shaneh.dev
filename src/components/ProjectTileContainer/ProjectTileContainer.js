import classes from './ProjectTileContainer.module.css';

const ProjectTileContainer = (props) => {
  return (
    <div className={classes.container}>{props.children}</div>
  )
}

export default ProjectTileContainer;