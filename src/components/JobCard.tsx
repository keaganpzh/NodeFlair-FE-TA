import Job from '../types/job.type';
import { FaLocationDot } from 'react-icons/fa6';
import timeAgo from '../functions/timeAgo';
import '../App.css';
import {
  ocbc,
  tencent,
  govtech,
  cell5,
  tiktok,
  companyLogo,
} from '../assets/images/';

interface JobCardProps {
  job: Job;
  selected: boolean;
}

function JobCard(props: JobCardProps) {

  const { job, selected } = props;

  const renderImage = (fileName: String | undefined) => {
    if (!fileName) return companyLogo;
    switch (fileName) {
      case 'ocbc':
        return ocbc;
      case 'tencent':
        return tencent;
      case 'govtech':
        return govtech;
      case 'cell5':
        return cell5;
      case 'tiktok':
        return tiktok;
      default:
        return companyLogo;
    }
  }

  return (
    <div className="JobCard" id={selected ? "JobCardSelected" : ""}>
      
      <div className="infoContainer">

        <div className="imageWrapper">
          <img src={renderImage(job.image)} alt="icon" />
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