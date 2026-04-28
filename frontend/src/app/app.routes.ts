/*
Author: Ilia Awudetsey
Description: This is the TS file that declares the available routes for the Angular application.
 */
import { Routes } from '@angular/router';
import { SurveyForm } from './survey-form/survey-form';
import { SurveyList } from './survey-list/survey-list';
import { WelcomePage } from './welcome-page/welcome-page';
<<<<<<< Updated upstream
import { NotFound } from './not-found/not-found';
=======
import {SurveyView} from './survey-view/survey-view';
>>>>>>> Stashed changes

export const routes: Routes = [
  {
    path: '',
    component: WelcomePage
  },
  {
    path: 'survey-form',
    component: SurveyForm
  },
  {
    path: 'survey-list',
    component: SurveyList
  },
  {
<<<<<<< Updated upstream
    path: '**',
    component: NotFound
=======
    path: 'survey-view/:id',
    component: SurveyView
>>>>>>> Stashed changes
  }
];
