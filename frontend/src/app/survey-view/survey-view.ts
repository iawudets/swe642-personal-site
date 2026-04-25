import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-survey-view',
  imports: [],
  templateUrl: './survey-view.html',
  styleUrl: './survey-view.css',
})
export class SurveyView implements OnInit {
  survey_id : string | null = null;
  survey_data : any | null = null;
  survey_json : any | null = null;

  url_string : string = "http://localhost:8080/surveys/"

  constructor(private route: ActivatedRoute) {}

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
    this.survey_json = await this.survey_data.json();
  }
}
