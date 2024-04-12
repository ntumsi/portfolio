import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardImage, MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-work-history',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatCardImage],
  templateUrl: './work-history.component.html',
  styleUrl: './work-history.component.scss'
})
export class WorkHistoryComponent {
   workHistory =[
    {
      startDate: "2020",
      endDate: "Present",
      title: "Diagnostic Imaging Instructor",
      company: "DHA DoD Biomedical Electronics Technician Training School",
      description: `Proficient in troubleshooting, Systems networking, repair and installation of a vast
      array of medical and dental diagnostic x-ray systems,and also ; Siemens ultrasound systems
      interfaced with the Syngo Multi-Modality work place, Zoll/Impact ventilators, Covidien 840
      Ventilators, Philips Intelivue patient monitoring Systems, Hologic Dimensions Mammography systems.
      Experienced 3M maintenance manager for Shipboard Electrical, mechanical, Medical and Dental systems.`
    },
    {
      startDate: "2015",
      endDate: "2020",
      title: "Biomedical Electronics Technician",
      company: "US Navy",
      description: `Proficient in troubleshooting, Systems networking, repair and installation of a vast
      array of medical and dental diagnostic x-ray systems,and also ; Siemens ultrasound systems
      interfaced with the Syngo Multi-Modality work place, Zoll/Impact ventilators, Covidien 840
      Ventilators, Philips Intelivue patient monitoring Systems, Hologic Dimensions Mammography systems.
      Experienced 3M maintenance manager for Shipboard Electrical, mechanical, Medical and Dental systems.`
    },
     {
      startDate: "2015",
      endDate: "2020",
      title: "Biomedical Electronics Technician",
      company: "US Navy",
      description: `Proficient in troubleshooting, Systems networking, repair and installation of a vast
      array of medical and dental diagnostic x-ray systems,and also ; Siemens ultrasound systems
      interfaced with the Syngo Multi-Modality work place, Zoll/Impact ventilators, Covidien 840
      Ventilators, Philips Intelivue patient monitoring Systems, Hologic Dimensions Mammography systems.
      Experienced 3M maintenance manager for Shipboard Electrical, mechanical, Medical and Dental systems.`
    }
   ]


}
