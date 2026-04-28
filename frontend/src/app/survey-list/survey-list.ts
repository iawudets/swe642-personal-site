<<<<<<< Updated upstream
import { Component } from '@angular/core';
=======
/*
Author: Ilia Awudetsey
Description: This is the TS file for the SurveyList component. It handles the API calls to the backend to retrieve all
valid surveys from the database.
 */
import {Component, OnInit, OnDestroy, DoCheck, ChangeDetectorRef} from '@angular/core';
import {Router, NavigationEnd, RouterLink} from "@angular/router";
>>>>>>> Stashed changes

@Component({
  selector: 'app-survey-list',
  imports: [],
  templateUrl: './survey-list.html',
  styleUrl: './survey-list.css',
})
<<<<<<< Updated upstream
export class SurveyList {}
=======
export class SurveyList implements OnInit {
  get_url: string = "http://localhost:8080/surveys";
  data: any;
  survey_array : any = [];

  constructor(private router : Router, private cdr : ChangeDetectorRef) {
    console.log('constructor', this.survey_array);
  }


  // refreshes the list of surveys upon navigating here
  ngOnInit(): void {
    console.log('ngOnInit', this.survey_array);
    this.refreshList();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.refreshList();
      }
    });
  }


  // GET call here
  async refreshList() : Promise<any> {
    const response = await fetch(this.get_url, {
      method: "GET"
    });
    this.data = await response.text();
    this.survey_array = [...JSON.parse(this.data)];
    // must make sure Angular sees this change
    this.cdr.markForCheck();
    console.log(this.survey_array);
  }
}
>>>>>>> Stashed changes
