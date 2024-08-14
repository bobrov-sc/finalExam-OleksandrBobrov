import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CollegeJson} from "./json-structure";
import {College} from "./college";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CollegeDataService {

  private static images:string = "https://my-course-exams.web.app/images/";
  private static collegeData: string = "http://localhost:4200/data/college.json";

  constructor(private http: HttpClient) { }

  public static jsonToCollege(collegeJson: CollegeJson): College {
    const college:College = new College();

    college.name = collegeJson.name;
    college.type = collegeJson.type;
    college.established = collegeJson.established;
    college.fullTimeStudents = collegeJson.students.fullTime;
    college.partTimeStudents = collegeJson.students.partTime;
    college.location = collegeJson.location;
    college.image = CollegeDataService.images + collegeJson.image;
    return college;
  }

  public getCollege(): Observable<College | undefined> {
    return this.http.get<CollegeJson>(CollegeDataService.collegeData).pipe(
      map(
        college => CollegeDataService.jsonToCollege(college)
      )
    );
  }
}
