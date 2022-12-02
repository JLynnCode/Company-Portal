import React, { useState } from "react";
import classes from "../components/projects/Projects.module.css";
import ProjectList from "../components/projects/ProjectList";
import Navbar from '../components/Navbar';
import Popup from "../components/popup/Popup";
<<<<<<< Updated upstream
=======
import CreateProject from "../components/projects/CreateProject";
import moment from "moment"

import useAxios from "../services/useAxios";
>>>>>>> Stashed changes

const Projects = () => {
  let loadedProjects = [{
    "id": 123456,
    "name": "Project Name #1",
    "description": "This is the project description for project #1",
    "active": true,
    "team": 987
  }, 
  {
    "id": 123457,
    "name": "Project Name #2",
    "description": "This is the project description for project #2",
    "active": true,
    "team": 987
  }, 
  {
    "id": 123458,
    "name": "Project Name #3",
    "description": "This is the project description for project #3",
    "active": true,
    "team": 987
  }]

  const [buttonPopup, setButtonPopup] = useState(false);

  function clickNew() {
    setButtonPopup(true);
  }

  return (
    <section>
      <Navbar />
        <h1 className={classes.h1}>Projects</h1>
        <div className={classes.newActions}>
          <button onClick={clickNew}>New</button>
<<<<<<< Updated upstream
        </div>        
        <ProjectList projects={loadedProjects} />
=======
        </div>
        {loading ? ( <p>loading...</p>) : 
        (
          <div>
              {error && (
                <div>
                  <p>{error.message}</p>
                </div>
              )}
              <div>                {/* loadedProjects */}
                <ProjectList projects={response.sort((a,b) => moment(b.date).diff(a.date))} />
                {console.log(response)}
              </div>
         </div>
        )}

        

>>>>>>> Stashed changes
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h3>Overlay Template Title</h3>
          <p>Michael was here...</p>
        </Popup>
    </section>    
  )
}

export default Projects
