import React, { useRef } from "react";
import "./EditProject.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

const EditProject = (props) => {
  const setInputHeight = (element, defaultHeight) => {
    if (element) {
      const target = element.target ? element.target : element;
      target.style.height = defaultHeight;
      target.style.height = `${target.scrollHeight}px`;
    }
  };

  
  return (
    <form>
      <button class="close-btn">
        <AiOutlineCloseCircle />
      </button>
      <div class="inputs">
        <textarea class="project-name" placeholder="Enter project name">{props.projectName}</textarea>

        <textarea
          class="project-info"
          placeholder="Enter description"
          onChange={(event) => setInputHeight(event, "10px")}
        >{props.projDescription}</textarea>
      </div>
      <button class="submit-btn">Submit</button>
    </form>
  );
};

export default EditProject;
