import {Component} from '@angular/core';
import {College} from "../college";
import {Subscription} from "rxjs";
import {CollegeDataService} from "../college-data.service";
import {LoadingStatus} from "../loading-status";

@Component({
  selector: 'app-college-details',
  standalone: true,
  imports: [],
  templateUrl: './college-details.component.html',
  styleUrl: './college-details.component.css'
})
export class CollegeDetailsComponent {

  college:College |undefined;
  status:LoadingStatus = LoadingStatus.LOADING;

  private subscription: Subscription | undefined;

  constructor(collegeDataService: CollegeDataService) {
    this.subscription = collegeDataService.getCollege().subscribe(
      {
        next:college => {
          this.college = college;
          this.status = LoadingStatus.SUCCESS;
        },

        error:() => {
          this.status = LoadingStatus.ERROR;
        }

      }
    );
  }

  ngOnDestroy(){
    this.subscription?.unsubscribe();
  }

  protected readonly LoadingStatus = LoadingStatus;
}

