import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { WorkHistoryComponent } from './work-history/work-history.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { LanguagesComponent } from './languages/languages.component';
import { HobbiesComponent } from './hobbies/hobbies.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AboutComponent,
    HobbiesComponent,
    ProjectsComponent,
    WorkHistoryComponent,
    TechnologiesComponent,
    LanguagesComponent
  ],
  exports:[]
})
export class CoreModule { }
