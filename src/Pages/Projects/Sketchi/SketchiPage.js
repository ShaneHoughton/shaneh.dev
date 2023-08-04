import ProjectTemplate from "../ProjectTemplate"
import signIn from './images/sign_in.png';
import canvas from './images/canvas.png';
import upload from './images/upload_success.png';

const SketchiPage = () => {
  return (
    <ProjectTemplate>
      <a href="https://sketchi.io/" target="_blank" rel="noreferrer"><h1>Sketchi.io</h1></a>
      <div style={{display:'flex', gap:'1rem', flexWrap:'wrap'}}>
        
        <img src={canvas} alt='using the canvas'>
        </img>

        <img src={upload} alt='uploading a drawing'>
        </img>

        <img src={signIn} alt='signing in user'>
        </img>

      </div>
      <h2>A micro-social media platform for posting random doodles and sketches.</h2>
  
      <p>
        This is my first complete, fullstack
        application built with React and Javascript using standard CSS and some
        Material UI components. This Single-Page-Application is up and running and can be found at <a href="https://sketchi.io/" target="_blank" rel="noreferrer">Sketchi.io</a>.
      </p>
      <p>The front-end was built with React and the back-end is handled by Google's Firebase.</p>
      <p>It has most of the standard conventions for any application:</p>

      <ul>
        <li>Responsive Interface for mobile and desktop</li>
        <li>User creation</li>
        <li>User authentication</li>
        <li>The ability to post</li>
        <li>The ability to like posts</li>
        <li>Error handling with banners</li>
        <li>Deleting posts</li>
        <li>Renaming posts</li>
        <li>Reporting posts</li>
      </ul>
      <h3>I am currently working on...</h3>
      <ul>
        <li>Ability to delete your account</li>
        <li>Improved Canvas UI</li>
        <li>Extra Canvas colors</li>
        <li>Ability to share drawings</li>
      </ul>
    </ProjectTemplate>
  )
}

export default SketchiPage