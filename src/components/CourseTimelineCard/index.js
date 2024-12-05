// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails

  return (
    <div className="course-container">
      <div className="title-duration-container">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle className="circle-icons" />
          <p className="duration-text">{duration}</p>
        </div>
      </div>
      <p className="description-text">{description}</p>
      <ul className="taglist-container">
        {tagsList.map(eachtagList => (
          <li className="tag-list" key={eachtagList.id}>
            <p className="tag-name-text">{eachtagList.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default CourseTimelineCard
