/*
Author: Ilia Awudetsey
Description: This is the TS file for the SurveyView component. It handles the API calls to the backend to retrieve a
particular survey from the database. This is based on the original link the user clicked in the window before.
 */
import {Component, OnInit, ChangeDetectorRef, DoBootstrap} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { Toast } from "bootstrap";

@Component({
  selector: 'app-survey-view',
  imports: [
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
  toast_msg : String = "Hover over any field to edit!"

  url_str : string = "http://localhost:8080/surveys/";

  constructor(private activated_route: ActivatedRoute, private router: Router, private cdr : ChangeDetectorRef) {
    this.activated_route = activated_route;
    this.router = router;
    this.cdr = cdr;
  }

  ngOnInit(): void {
    this.activated_route.paramMap.subscribe(params => {
      this.survey_id = params.get('id');
      this.getSurvey();
    })

    // set the click event handler of all field values to updateField()
    const fieldValues = document.getElementsByClassName("value");
    for (let field of fieldValues) {
      /*
      let event : any;
      field.addEventListener('click', (event) => {
        this.updateField(event);
      });
       */
      field.addEventListener('click', (e) => this.updateField(e, this.survey));
    }
  }

  async getSurvey() {
    this.survey_data = await fetch(this.url_str + this.survey_id, {
      method: "GET"
    });
    this.survey = await this.survey_data.json();
    // iterate over the JSON object and check for empty values.
    // The user cannot hover over empty values so we should have a placeholder.
    Object.entries(this.survey).forEach(([key, value]) => {
      if (value == "") {
        this.survey[key] = "N/A";
      }
    });
    // make sure the framework updates the template after pulling in the survey data
    this.cdr.markForCheck();
  }

  // DELETE method here
  async deleteSurvey() : Promise<void> {
    let response = await fetch(this.url_str + this.survey_id, {
      method: "DELETE"
    });
    this.deleteNotification(response.ok);
  }

  // navigate away if we're deleting this resource
  deleteNotification(isDeleted : boolean) {
    if (isDeleted) {
      this.router.navigate(['../survey-list']);
    } else {
      // TODO debug launching of failed toasted notification
      const toast = new Toast(document.getElementById("active_toast") as Element);
      toast.show();
    }
  }
  // find the targeted element when clicked and replace the original survey field value with the new one
  // after that, send the new survey object in the body of the PUT call
  async updateField(event : any, survey : any) {
    let new_value : string | null = window.prompt("Please enter a new value:");
    let target_id : any = event.target.classList[0];
    let new_survey : any = {...survey};
    console.log(new_survey);
    new_survey[target_id] = new_value;
    let response : any = await fetch("http://localhost:8080/surveys", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(new_survey)
    });
    if (response.ok) {
      await this.getSurvey();
      return true;
    } else {
      // alert user if anything went wrong (e.g. formatting)
      window.alert("Value entered was invalid. Survey was not updated.");
      return false;
    }
  }
}
