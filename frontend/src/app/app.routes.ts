import { Routes } from '@angular/router';
import { SurveyForm } from './survey-form/survey-form';
import { SurveyList } from './survey-list/survey-list';
import { WelcomePage } from './welcome-page/welcome-page';
import { NotFound } from './not-found/not-found';
import {SurveyView} from './survey-view/survey-view';

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
    path: 'survey-view/:id',
    component: SurveyView
  },
  {
    path: '**',
    component: NotFound
  }
];
