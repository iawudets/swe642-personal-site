import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-survey-form',
  imports: [
    FormsModule
  ],
  templateUrl: './survey-form.html',
  styleUrl: './survey-form.css',
})
export class SurveyForm implements OnInit {
  showLink = true;
  greeting: string = "medium";

  constructor() {}

  // builds the first part of the user greeting depending on the hour of day
  responseForTimeOfDay() {
    let atm = new Date().getHours();
    let greeting = "Good ";

    if (atm < 12) {
      greeting += "morning";
    } else if (atm < 16) {
      greeting += "afternoon";
    } else {
      greeting += "evening";
    }
    greeting += ", ";
    return greeting;
  }
  newUserName(event: Event) {
    console.log("newUserName is working!");
    event.preventDefault();
    let new_username: string | null = (window.prompt("Please enter your full name"));
    if (new_username !== null) {
      new_username = new_username.trim();
    }
    document.cookie = "username=" + new_username + "; expires=" + new Date(new Date().getFullYear() + 1, new Date().getMonth(), new Date().getDate());
    this.greeting = this.responseForTimeOfDay() + new_username + "! Welcome to the SWE642 Survey Form!";
  }

  calculateAvgMaxData() {
    let input: any = (document.getElementById('data-label-instructions')) as HTMLInputElement;
    input = input.value;
    const avg_data_element: HTMLElement | null = document.getElementById("avg-data-element");
    const max_data_element: HTMLElement | null = document.getElementById("max-data-element");
    const error_element: HTMLElement | null = document.getElementById("error-label");
    const values_string: string = input.split(",");
    if (values_string.length != 10 || avg_data_element == null || max_data_element == null || error_element == null) {
      this.printError();
      return;
    }
    let values_number: number[] = [];
    for (let x1: number = 0; x1 < 10; x1++) {

      let number_element: number = parseInt(values_string[x1]);

      // checking for null/invalid values
      if (isNaN(number_element)) {
        this.printError();
        return;
      }

      // checking for valid, but out of range values
      if (number_element > 100 || number_element < 1) {
        avg_data_element.textContent = "Average";
        max_data_element.textContent = "Maximum";
        this.printError();
        return;
      }
      values_number[x1] = number_element;
    }
    error_element.textContent = "";
    let max = 0;
    let sum = 0;
    for (let x2 = 0; x2 < 10; x2++) {
      if (values_number[x2] > max) {max = values_number[x2];}
      sum += values_number[x2];
    }
    const avg = sum / values_number.length;

    avg_data_element.textContent = "Average: " + avg;
    max_data_element.textContent = "Maximum: " + max;
    error_element.hidden = true;

  }

  printError() {
    const error_element = document.getElementById("error-label");
    if (error_element == null) { console.log("printing error failed!"); return; }
    error_element.textContent = "Error: This field must have a list of 10 numbers, separated by commas. Each number must be from 1 to 100.";
    error_element.hidden = false;
  }

  validateSurveyFormInput(event: any) {
    // store values of all fields to be validated
    let name_input: any | null = document.getElementById("username") as HTMLInputElement;
    let address_input: any | null = document.getElementById("street") as HTMLInputElement;
    let email_input: any | null = document.getElementById("email") as HTMLInputElement;
    if (name_input == null || address_input == null || email_input == null) {
      return;
    }
    name_input = name_input.value.trim();
    address_input = address_input.value.trim();
    email_input = email_input.value.trim();

    // arrays to store each field's error message
    let invalid_fields: any[] = [];
    let error_msg: any[] = [];

    // regex patterns to check for valid input
    const name_regex = /^[A-Za-z\s]+$/;
    const address_regex = /^[A-Za-z0-9\s.,-]+$/;
    const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // validate all text input fields first
    if (!(name_regex.test(name_input))) {
      error_msg.push("Name can only contain alphabetic characters.");
      invalid_fields.push("username");
    }
    if (!(address_regex.test(address_input))) {
      error_msg.push("Address contains invalid characters.");
      invalid_fields.push("street");
    }
    if (!(email_regex.test(email_input))) {
      error_msg.push("Email address is invalid.");
      invalid_fields.push("email");
    }

    // check that at least 2 checkboxes are selected
    const checkboxes = document.querySelectorAll("input[name='liked']:checked");
    if (checkboxes.length < 2) {
      error_msg.push("Please select at least two things you liked about the campus.");
    }
    // check that a radio button is selected
    const radio_buttons = document.querySelector("input[name='interest']:checked");
    if (!radio_buttons) {
      error_msg.push("Please select one reason you became interested in GMU.")
    }

    if (error_msg.length > 0) {
      event.preventDefault();
      const error_message = "The following errors were found: \n" + error_msg.join("\n");
      window.alert(error_message);

      for (let i = 0; i < invalid_fields.length; i++) {
        let invalid_fields_element: HTMLElement | null = document.getElementById(invalid_fields[i]);
        if (invalid_fields_element != null) {
          invalid_fields_element.textContent = "";
        }
      }
      return false;
    }
    // continue to form submission
    return true;
  }

  addressSearchByZip() {
    let zip_input: any | null = document.getElementById("zip");
    const zip_error_element: HTMLElement | null = document.getElementById("zip-error-element");

    const city_result: HTMLElement | null = document.getElementById("placeholder-city");
    const state_result: HTMLElement | null = document.getElementById("placeholder-state");

    if (zip_input == null || city_result == null || state_result == null || zip_error_element == null) {return;}
    zip_input = zip_input.value.trim();

    city_result.textContent = "---";
    state_result.textContent = "---";

    if (zip_input.length != 5 || isNaN(zip_input)) {
      zip_error_element.textContent = "Invalid zip entered.";
      return;
    }

    // perform AJAX operations here
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "zipcodes.json", true);

    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {

        let zip_data = JSON.parse(xhr.responseText);

        let zip_match = zip_data.find((entry: any) => entry.zip_code == zip_input);

        if (zip_match) {
          city_result.textContent = zip_match.city;
          state_result.textContent = zip_match.state;
        } else {
          zip_error_element.textContent = "No match found for this zip code. Please try again.";
        }
      }
    };

    xhr.send();
  }

  ngOnInit(): void {
    let username: string | null;
    // ask for name only when cookie is empty
    if (document.cookie != null) {
      username = (window.prompt("Welcome to the SWE642 Survey Form! Please enter your full name"));
      if (username != null) {
        username = username.trim();
      }
      document.cookie = "username=" + username + "; expires=" + new Date(new Date().getFullYear() + 1, new Date().getMonth(), new Date().getDate());
    } else {

      // extracting the pair containing the username string ;)
      username = window.document.cookie
        .split(";")[0]
        .split("=")[1];
    }

    // finally write the composed greeting and username to the document
    this.greeting = this.responseForTimeOfDay() + username + "! Welcome to the SWE642 Survey Form!";
  }
}
