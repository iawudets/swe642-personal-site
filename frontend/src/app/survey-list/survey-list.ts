import {Component, OnInit, OnDestroy, DoCheck, ChangeDetectorRef} from '@angular/core';
import {Router, NavigationEnd, RouterLink} from "@angular/router";

@Component({
  selector: 'app-survey-list',
    imports: [
        RouterLink
    ],
  templateUrl: './survey-list.html',
  styleUrl: './survey-list.css',
})
export class SurveyList implements OnInit, OnDestroy, DoCheck {
  get_url: string = "http://localhost:8080/surveys";
  data: any;
  survey_array : any = [];

  constructor(private router : Router, private cdr : ChangeDetectorRef) {
    console.log('constructor', this.survey_array);
  }


  ngOnInit(): void {
    console.log('ngOnInit', this.survey_array);
    this.refreshList();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.refreshList();
      }
    });
  }


  async refreshList() : Promise<any> {
    const response = await fetch(this.get_url, {
      method: "GET"
    });
    this.data = await response.text();
    this.survey_array = [...JSON.parse(this.data)];
    this.cdr.markForCheck();
    console.log(this.survey_array);
  }

  ngOnDestroy() {
    console.log('ngOnDestroy', this.survey_array);
  }

  ngDoCheck() {
    console.log('doCheck', this.survey_array);
  }

}
