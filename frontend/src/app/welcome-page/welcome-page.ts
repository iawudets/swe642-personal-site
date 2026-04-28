/*
Author: Ilia Awudetsey
Description: This is the TS file for the WelcomePage component. It doesn't anything other than link the HTML template
and CSS file, which is empty.
 */
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  imports: [
    RouterLink
  ],
  templateUrl: './welcome-page.html',
  styleUrl: './welcome-page.css',
})
export class WelcomePage {}
