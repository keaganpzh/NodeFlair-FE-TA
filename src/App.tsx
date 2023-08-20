import { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import JobCard from './components/JobCard';
import JobDesc from './components/JobDesc';
import jobs from './data/jobs';
import Job from './types/job.type';

function App() {

  const jobList = jobs.sort((a, b) => b.updated.getTime() - a.updated.getTime());

  const [jobSelected, setJobSelected] = useState<Job>(jobList[0]);

  const handleSelect = (idx: number) => {
    setJobSelected(jobList[idx]);
  }

  return (
    <div className="App">

      <div className="JobsList">
        <div className="innerContainer">
          { jobList
            .map((item: Job) =>
              (
                <div 
                  className="JobCardContainer"
                  key={jobList.indexOf(item)} 
                  onClick={() => handleSelect(jobList.indexOf(item))}
                >
                  <JobCard 
                    job={item}
                    selected={item === jobSelected}
                  />
                </div>
              )
          )}
        </div>
      </div>

      <div className="JobDetails">
        <div className="innerContainer">
          <JobDesc {...jobSelected} />
        </div>
      </div>

    </div>
  );
}

export default App;
