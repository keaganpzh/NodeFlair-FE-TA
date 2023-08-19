import Job from '../types/job.type';

enum JobRole {
  PM = "PM", 
  Backend = "Backend", 
  Frontend = "Frontend", 
  Fullstack = "Fullstack",
  Data = "Data", 
  DevOps = "DevOps", 
  SRE = "SRE", 
  QA = "QA", 
  UX = "UX",  
  UI = "UI", 
  Security = "Security", 
  Mobile = "Mobile", 
  Other = "Other"
}

enum Tags {
  play = "play", 
  IAM = "IAM", 
  Rest = "RestAPI", 
  API = "API", 
  Modular = "Modular", 
  Node = "Node.js", 
  Docker = "Docker",
  JS = "JavaScript", 
  TDD = "TDD"
}

const jobs: Job[] = [
  {
    title: 'Technical Product Manager (Cloud)',
    company: 'GovTech',
    role: JobRole.PM,
    updated: new Date('2023-08-19T12:00'),
    stars: 4.3,
    location: 'Singapore',
    salary: null,
    tags: [Tags.play, Tags.IAM]
  },
  {
    title: 'Staff, Back-end Engineer (Coupang Play)',
    company: 'Coupang',
    role: JobRole.Backend,
    updated: new Date('2021-08-01'),
    stars: 3.9,
    location: 'Singapore',
    salary: 'S$10,000 - S$15,000 / mth',
    tags: [Tags.Rest, Tags.API, Tags.Modular, Tags.Node, Tags.Docker, Tags.JS, Tags.TDD]
  },
  {
    title: 'Senior Software Engineer (.Net)',
    company: 'Embed',
    role: JobRole.Fullstack,
    updated: new Date('2021-08-01'),
    stars: 4.5,
    location: 'Singapore',
    salary: 'S$10,000 - S$15,000 / mth',
    tags: [Tags.Rest, Tags.Docker, Tags.API, Tags.TDD]
  },
  {
    title: 'Senior Software Engineer (Backend)',
    company: 'Coda Payments',
    role: JobRole.Backend,
    updated: new Date('2021-08-01'),
    stars: 4.5,
    location: 'Singapore',
    salary: 'S$10,000 - S$15,000 / mth',
    tags: [Tags.Rest, Tags.API, Tags.Modular, Tags.Node, Tags.Docker, Tags.JS, Tags.TDD]
  },
  {
    title: 'Staff, Back-end Engineer (Coupang Play)',
    company: 'Coupang',
    role: JobRole.Backend,
    updated: new Date('2021-08-01'),
    stars: 3.9,
    location: 'Singapore',
    salary: 'S$10,000 - S$15,000 / mth',
    tags: [Tags.Rest, Tags.API, Tags.Modular, Tags.Node, Tags.Docker, Tags.JS, Tags.TDD]
  },
  {
    title: 'Staff, Back-end Engineer (Coupang Play)',
    company: 'Coupang',
    role: JobRole.Backend,
    updated: new Date('2021-08-01'),
    stars: 3.9,
    location: 'Singapore',
    salary: 'S$10,000 - S$15,000 / mth',
    tags: [Tags.Rest, Tags.API, Tags.Modular, Tags.Node, Tags.Docker, Tags.JS, Tags.TDD]
  },
  {
    title: 'Staff, Back-end Engineer (Coupang Play)',
    company: 'Coupang',
    role: JobRole.Backend,
    updated: new Date('2021-08-01'),
    stars: 3.9,
    location: 'Singapore',
    salary: 'S$10,000 - S$15,000 / mth',
    tags: [Tags.Rest, Tags.API, Tags.Modular, Tags.Node, Tags.Docker, Tags.JS, Tags.TDD]
  },
]

export default jobs;