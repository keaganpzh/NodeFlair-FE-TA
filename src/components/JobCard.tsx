import Job from '../types/job.type';
import { FaLocationDot } from 'react-icons/fa6';
import timeAgo from '../functions/timeAgo';
import '../App.css';
const jobIcon = require('../assets/images/company-logo.png');

interface JobCardProps {
  job: Job;
  selected: boolean;
}

function JobCard(props: JobCardProps) {

  const { job, selected } = props;

  return (
    <div className="JobCard" id={selected ? "JobCardSelected" : ""}>
      
      <div className="infoContainer">

        <div className="imageWrapper">
          <img src={jobIcon} alt="icon" />
        </div>

        <div className="mainWrapper">
          <div id="header">
            <span>{job.company}</span>
            <span>{job.stars}{'\u2605'}</span>
          </div>
          <div id="title">
            <b>{job.title}</b>
          </div>  
          <div id="aux">
            <span id="timeAgo">{timeAgo(job.updated)}</span>
            <span id="location"><FaLocationDot />{job.location}</span>
          </div>
          {job.salary && <div id="pay">
            <span>{job.salary}</span>
          </div>}
        </div>

        <div className="roleWrapper">
          <span id="rolePill">{job.role}</span>
        </div>

      </div>

      <div id="divider" />

      <div className="tagContainer"> 
        {job.tags.map((tag: string) => (
          <span className="tag" key={job.tags.indexOf(tag)}>{tag}</span>
        ))}
      </div>

    </div>
  )
}

export default JobCard;