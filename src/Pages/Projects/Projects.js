import React from "react";
import { Route, Routes, useNavigate } from 'react-router-dom';
import ProjectTile from "../../components/ProjectTile/ProjectTile";
import ProjectTileContainer from "../../components/ProjectTileContainer/ProjectTileContainer";
import SketchiPage from "./Sketchi/SketchiPage";
import sketchiLogo from "../../Pages/Projects/project-logos/sketchi-logo.png"; // Import the image URL

const Projects = () => {
  const navigate = useNavigate();

  const projectPage = (
    <ProjectTileContainer>
      <ProjectTile backgroundImageUrl={sketchiLogo} onClick={() => {navigate('sketchi')}} />
    </ProjectTileContainer>
  );

  return (
    <>
      <Routes>
        <Route path="/" element={projectPage}/>
        <Route path="sketchi" element={<SketchiPage/>} />
      </Routes>
    </>
  )
}

export default Projects;
