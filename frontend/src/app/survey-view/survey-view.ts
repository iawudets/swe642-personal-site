import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {ActivatedRoute, RouterLink, RouterOutlet} from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-survey-view',
  imports: [
    RouterOutlet,
    FormsModule,
    RouterLink
  ],
  templateUrl: './survey-view.html',
  styleUrl: './survey-view.css',
})
export class SurveyView implements OnInit {
  survey_id : string | null = null;
  survey_data : any | null = null;
  survey : any | null = null;

  url_string : string = "http://localhost:8080/surveys/"

  constructor(private route: ActivatedRoute, private cdr : ChangeDetectorRef) {
    this.route = route;
    this.cdr = cdr;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.survey_id = params.get('id');
      this.getSurvey();
    })
  }

  async getSurvey() {
    this.survey_data = await fetch(this.url_string + this.survey_id, {
      method: "GET"
    });
    this.survey = await this.survey_data.json();
    this.cdr.markForCheck();
  }
}
