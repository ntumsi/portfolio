import { Routes } from '@angular/router';
import { AboutComponent } from './core/about/about.component';
import { LanguagesComponent } from './core/languages/languages.component';
import { ProjectsComponent } from './core/projects/projects.component';
import { TechnologiesComponent } from './core/technologies/technologies.component';
import { EducationComponent } from './core/education/education.component';
import { WorkHistoryComponent } from './core/work-history/work-history.component';
import { HobbiesComponent } from './core/hobbies/hobbies.component';

export const routes: Routes = [
  { path: 'About', component: AboutComponent },
  { path: 'Projects', component: ProjectsComponent },
  { path: 'Languages', component: LanguagesComponent },
  { path: 'Education', component: EducationComponent },
  { path: 'Technologies', component: TechnologiesComponent },
  {path: 'Hobbies', component: HobbiesComponent},
  {path: 'WorkHistory', component: WorkHistoryComponent},
  { path: '', redirectTo: '/About', pathMatch: 'full' }
];
