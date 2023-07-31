import React from 'react';
import classes from './ProjectTile.module.css';

const ProjectTile = (props) => {
  const { onClick, backgroundImageUrl } = props;

  const tileStyle = {
    '--background-image-url': `url(${backgroundImageUrl})`,
  };

  return (
    <div onClick={onClick} className={classes['project-tile']} style={tileStyle}></div>
  );
};

export default ProjectTile;
