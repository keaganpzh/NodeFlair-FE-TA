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
  Python = "Python",
  Modular = "Modular", 
  Node = "Node.js", 
  Docker = "Docker",
  JS = "JavaScript", 
  TDD = "TDD"
}

const jobs: Job[] = [
  {
    title: 'Senior Software Engineer (Backend)',
    company: 'GovTech',
    role: JobRole.PM,
    updated: new Date('2023-08-19T12:00'),
    stars: 4.3,
    location: 'Singapore',
    salary: null,
    tags: [Tags.play, Tags.IAM],
    image: 'govtech'
  },
  {
    title: 'Infrastructure Engineer',
    company: 'OCBC',
    role: JobRole.DevOps,
    updated: new Date('2023-08-20T18:00'),
    stars: 3.9,
    location: 'Singapore',
    salary: 'S$7,007 - S$13,294 / mth',
    tags: [Tags.Python, Tags.API],
    image: 'ocbc'
  },
  {
    title: 'Senior Software Engineer (.Net)',
    company: 'Tencent',
    role: JobRole.Fullstack,
    updated: new Date('2023-08-20T17:00'),
    stars: 4.2,
    location: 'Singapore',
    salary: 'S$10,000 - S$15,000 / mth',
    tags: [Tags.Rest, Tags.Docker, Tags.API, Tags.TDD],
    image: 'tencent'
  },
  {
    title: 'Backend Engineer, Machine Learning Systems',
    company: 'Tiktok',
    role: JobRole.Backend,
    updated: new Date('2023-08-20T17:00'),
    stars: 4.8,
    location: 'Singapore',
    salary: 'S$6,400 - S$13,000 / mth',
    tags: ["C++", "Shell", "Go", "Linux", "Kubernetes", "Flask", Tags.Node],
    image: 'tiktok'
  },
  {
    title: 'React TypeScript Developer',
    company: 'Cell 5',
    role: JobRole.Frontend,
    updated: new Date('2023-08-20T17:20'),
    stars: 4.3,
    location: 'Singapore',
    salary: null,
    tags: [Tags.Rest, Tags.API, "React", Tags.Node, Tags.JS, "TypeScript"],
    image: 'cell5'
  },
  {
    title: 'Backend Engineer, Cloud Infrastructure',
    company: 'Tiktok',
    role: JobRole.Backend,
    updated: new Date('2023-08-19T12:00'),
    stars: 4.8,
    location: 'Singapore',
    salary: 'S$6,400 - S$13,000 / mth',
    tags: ["Graph", "TensorFlow", "C++", "PyTorch", "Linux", "NoSQL"],
    image: 'tiktok'
  },
  {
    title: 'Staff, Back-end Engineer (Coupang Play)',
    company: 'Coupang',
    role: JobRole.Backend,
    updated: new Date('2021-08-01'),
    stars: 3.9,
    location: 'Singapore',
    salary: 'S$10,000 - S$15,000 / mth',
    tags: [Tags.Rest, Tags.API, Tags.Modular, Tags.Node, Tags.Docker, Tags.JS, Tags.TDD],
    image: 'company-logo'
  },
]

export default jobs;