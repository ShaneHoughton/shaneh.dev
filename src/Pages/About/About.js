import CustomButton from '../../components/CustomButton/CustomButton';
import classes from './About.module.css';
import { useNavigate } from 'react-router-dom';
import IconButton from '../../components/IconButton/IconButton';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className={classes.about}>
      <div className={classes.title}>
        <h4>I am</h4>
        <h1>shane houghton</h1>
      </div>
      <div className={classes.body}>
        <p>
          and I am a developer from Easton, Pennsylvania who loves working on creative projects and creative solutions.
        </p>
        <p>I studied Computer Science and UI Design at Moravian University in Bethlehem Pennsylvania. I made this website
          to showcase projects I have made or what I am currently working on.</p>
        <p>I am equally passionate about distance running and racing. One of my goals is to eventually qualify for the Olympic Trials marathon!</p>
        
        <p>
          I move at a fast pace, so try your best to keep up.
        </p>
      </div>
      <CustomButton onClick={()=>navigate('/projects')}>Check out my work</CustomButton>


      <h4 style={{marginTop: '5rem'}}>Reach out to me</h4>

      <div className={classes.contact}>
        

        <IconButton>
          <a href="mailto:shanegh13@gmail.com" target="_blank" rel="noreferrer">
            <i className="fas fa-envelope"></i>
          </a>
        </IconButton>

        <IconButton>
          <a href="https://github.com/ShaneHoughton" target="_blank" rel="noreferrer">

            <i className="icon fab fa-linkedin"></i>
          </a>
        </IconButton>

        <IconButton>
          <a href="https://www.linkedin.com/in/houghtons/" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
        </IconButton>
      </div>
    </div>
  )
}

export default About