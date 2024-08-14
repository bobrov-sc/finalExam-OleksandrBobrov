export interface CollegeJson {
  name: string;
  type: string;
  established: number;
  students: StudentsJson;
  image: string;
  location: string;
}

export interface StudentsJson {
  fullTime:number;
  partTime:number;
}
