import { Component } from '@angular/core';
import {  MatCardImage, MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatCardModule,MatCardImage],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
paragraph1 = `
A Life long learner with a passion for learning new technologies and applications and
using them to solve difficult problems. I believe that knowledge is not how much you
know but how you use it to solve daily tasks. I am at the cross roads of changing
careers from Biomedical electronics to software engineering and I am passionate about
both areas because they present their unique challenges and they also seem to intersect.

`;
paragraph2 = `Full Stack Software Developer, with experience in the following technologies;
Angular, React, Spring MVC, GitHub, VS Code, GitKraken. Also experienced/familiar with the
following languages: Java, Java Script, Type Script, SQL, NoSQL. C++(Physical computing-Arduino)
Python( Physical Computing-Raspberry Pi), CompTIA Security+ Certified.

`
;

paragraph3 = `Dianostic Imaging instructor at DHA DoD Biomedical electronics Technician Training
School. Proficient in troubleshooting, Systems networking, repair and installation of a vast
array of medical and dental diagnostic x-ray systems,and also ; Siemens ultrasound systems
interfaced with the Syngo Multi-Modality work place, Zoll/Impact ventilators, Covidien 840
Ventilators, Philips Intelivue patient monitoring Systems, Hologic Dimensions Mammography systems.
Experienced 3M maintenance manager for Shipboard Electrical, mechanical, Medical and Dental systems.

`;

}
