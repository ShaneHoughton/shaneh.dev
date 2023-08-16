import CodeSnippet from "../../../components/CodeSnippet/CodeSnippet";
import PositionMenu from "../../../components/PositionMenu/PositionMenu";
import ProjectTemplate from "../ProjectTemplate";
import { useState } from "react";

import get_roster_data from './data/get_roster.json';
import get_top_performances_data from './data/get_top_performances.json';
import get_athlete_bests_data from './data/get_athlete_bests.json';
import get_athlete_results_data from './data/get_athlete_results.json';
import get_meets_data from './data/get_meets.json';


const HermesPage = () => {
  const snippets = {
    get_roster: {
    label: 'get_roster',
    snippet: (<CodeSnippet input={
      ["hermes = Hermes()", 
      "hermes.get_roster('PA', 'Moravian', 'm', '2022_Outdoor')",
      "# returns the roster for a team given state, team name, sex, and season"
    ]}
    output={get_roster_data} />)},

    get_top_performances: {
    label: 'get_top_performances',
    snippet: (<CodeSnippet input={
      ["hermes = Hermes()",
       "hermes.get_top_performances('PA', 'Moravian', 'm', '2022_Outdoor')",
        "# returns the top performances for a team given state, team name, sex, and season"]}
    output={get_top_performances_data} />)},

    get_athlete_bests: {
      label: 'get_athlete_bests',
      snippet:(<CodeSnippet input={["hermes = Hermes()", 
      "hermes.get_athlete_bests('Houghton_Shane','PA','Moravian','m','2022_Outdoor')",
      "# returns the best marks for an athlete given name, state, team name, sex, and season"
    ]}
      output={get_athlete_bests_data} />)},

    get_athlete_results: {
      label: 'get_athlete_results',
      snippet:(<CodeSnippet input={
      ["hermes = Hermes()", 
      "hermes.get_athlete_results('Houghton_Shane','PA','Moravian','m','2022_Outdoor')",
      "# returns every result for an athlete given name, state, team name, sex, and season",
      "# here's every performance I have had at college. The good, the bad and the ugly :)"
    ]}
      output={get_athlete_results_data} />)},

    get_meets: {
      label: 'get_meets',
      snippet:(<CodeSnippet input={
        ["hermes = Hermes()", 
        "hermes.get_meets()",
        "# returns the most recent meets that were held."
      ]}
      output={get_meets_data} />)}
  }
  const [selectedSnippet, setSelectedSnippet] = useState(snippets.get_roster.label);
  let snippet = snippets[selectedSnippet].snippet

  const handleChangeSnippet = (label) =>{
    setSelectedSnippet(label);
    console.log(snippets[label].snippet);
    snippet = snippets[label].snippet;
  }

  
  return (
    <ProjectTemplate>
    
      <h1>Hermes-TFRRS</h1>
      <div style={{display:'flex', gap:'1rem', flexWrap:'wrap'}}>
        

      </div>
      <h2>A retired python module project.</h2>
  
      <p>
        This was a project created to solve the problem of TFRRS having no publicly available API. I built a module that web-scraped the site to
        retreive athlete marks and times-- something I wish I had during my time as an undergraduate as a lot of my projects were track and field related.
        Because this project violates their <a href="https://www.tfrrs.org/tos.html"  target="_blank" rel="noreferrer">terms of use</a> and to avoid a 
        cease and desist, I have stopped development of this project.
       
      </p>
      <p> Even though this module is not available, I am proud of it and was able to get some use out of it.</p>
      <p>This project was built using Beautiful Soup and Requests Python libraries.</p>

      <h3>Demonstration of methods:</h3>
      <PositionMenu options={Object.keys(snippets)} setOption={(label)=>{handleChangeSnippet(label)}}/>
      {snippet}

    </ProjectTemplate>
  )
}

export default HermesPage