import React from 'react'
import Job from '../types/job.type';

const JobDesc = (props: Job) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.company}</p>
      <p>{props.location}</p>
      <p>{props.salary}</p>
      <p>{props.role}</p>
      <p>{props.stars}</p>
    </div>
  )
}

export default JobDesc