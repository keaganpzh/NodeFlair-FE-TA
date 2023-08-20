import React from 'react'
import Job from '../types/job.type';

const JobDesc = (props: Job) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  )
}

export default JobDesc