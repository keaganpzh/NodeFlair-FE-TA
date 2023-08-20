export default interface Job {
  title: string,
  company: string,
  role: string,
  updated: Date,
  stars: number,
  location: string,
  salary: string | null,
  tags: string[],
  image: string | undefined,
}