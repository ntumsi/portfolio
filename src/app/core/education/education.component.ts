import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  education =[
    {
      "name": "Post graduate Cloud Computing Certificate",
      "school": "University of Texas at Austin",
      "location": "Austin, TX",
      "date": "October 2020 - March 2021",
      "gpa": "3.5",
      "url": "https://www.utexas.edu/",
      "logo": ""
    },
    {
      "name": "Master's Degree in Information Technology",
      "school": "Thomas Edison State University",
      "location": "Trenton, NJ",
      "date": "July 2016 - June 2018",
      "gpa": "3.9",
      "url": "https://www.tesu.edu/",
      "logo": ""
    },
    {
      "name": "Bachelor's Degree in Applied Science Biomedical Electronics",
      "school": "Thomas Edison State University",
      "location": "Trenton, NJ",
      "date": "November 2010 - September 2015",
      "gpa": "2.9",
      "url": "https://www.tesu.edu/",
      "logo": ""
    },
    {
      "name": "Diploma in Biomedical Electronics",
      "school": "DoD Medical Education and Training Campus",
      "location": "San Antonio, TX",
      "date": "July 2008 - October 2009",
      "gpa": "3.9",
      "url": "https://metc.mil",
      "logo": ""
    },
    {
      "name": "Navy Hospital Corpsman",
      "school": "Navy Hospital Corps School",
      "location": "Great Lakes, IL",
      "date": "August 2006 - November 2006",
      "gpa": "3.5",
      "url": "https://www.med.navy.mil/sites/nmcsd/Pages/default.aspx",
      "logo": ""
    },
    {
      "name": "Airman Apprentice",
      "school": "Navy Aviation Technical Training Center",
      "location": "Pensacola, FL",
      "date": "June 2004 - July 2004",
      "gpa": "NA",
      "url": "https://www.bootcamp.navy.mil/",
      "logo": ""
    },
    {
      "name": "Navy Basic Training",
      "school": "Navy Recruit Training Command",
      "location": "Great Lakes, IL",
      "date": "April 2004 - June 2004",
      "gpa": "NA",
      "url": "https://www.bootcamp.navy.mil/",
      "logo": ""
    }
  ]

  certifications =
    [
      {
        "title": "CompTia Security+ Certification",
        "date": "July 2019",
        "description": "CompTia Certified security professional"
      },
      {
        "title": "Woz U - Certified Software Developer",
        "date": "July 2018 - March 2016",
        "description": "Learned how to build web applications using React and AngularJS. Mobile web development with Ionic/Cordova. Acquired skills to program using Java, build database-driven web applications using Spring MVC, and create richly interactive client-side apps using the JavaScript AngularJS library. Worked 60+ hours weekly on individual and team projects."
      }
    ]


}
