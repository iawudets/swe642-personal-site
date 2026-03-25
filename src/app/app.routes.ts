import { Routes } from '@angular/router';
import { SurveyForm } from './survey-form/survey-form';
import { SurveyList } from './survey-list/survey-list';

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
  }
];
