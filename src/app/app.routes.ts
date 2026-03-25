import { Routes } from '@angular/router';
import { SurveyForm } from './survey-form/survey-form';
import { SurveyList } from './survey-list/survey-list';

export const routes: Routes = [
  {
    path: 'dept-survey',
    component: SurveyForm
  },
  {
    path: 'survey-list',
    component: SurveyList
  }
];
