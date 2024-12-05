// Write your code here
import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectDetails

  return (
    <div className="project-container">
      <img className="project-image" src={imageUrl} alt="project" />
      <div className="project-title-duration-container">
        <h1 className="project-tile">{projectTitle}</h1>
        <div className="calender-icons-container">
          <AiFillCalendar className="calender-icons" />
          <p className="time-text">{duration}</p>
        </div>
      </div>
      <p className="description-text">{description}</p>
      <a className="project-link" href={projectUrl}>
        Visit
      </a>
    </div>
  )
}
export default ProjectTimelineCard
