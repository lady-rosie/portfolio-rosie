import React from "react"
import Img from "gatsby-image"
import Stack from "../components/stack"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TechnicalSkills = () => {
    return (
<div className="technical-skills">
    <div className="container">
        <div className="technical-skills-title">
          <h3>Technical skills</h3>
        </div>
          <Stack />
          <div className="project-button">
            <h2>Projects</h2>
            <span><FontAwesomeIcon icon="arrow-right"/></span>
          </div>
    </div>
</div>
    )
}
export default TechnicalSkills;