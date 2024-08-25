import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss'
})
export class TechnologiesComponent {

  technologies = [
    {"name":"github",
    "description":"GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere.",
    "url":"https://github.com/",
    "icon":"assets/icons8-github-100.png"
  },
    {
      "name":"angular",
      "description":"Angular is a platform and framework for building single-page client applications using HTML and TypeScript.",
      "url":"https://angular.io/",
      "icon":"assets/icons8-angularjs-48.png"
    },
    {
      "name":"react",
      "description":"React is an open-source, front end, JavaScript library for building user interfaces or UI components.",
      "url":"https://reactjs.org/",
      "icon":"assets/icons8-react-120.png"
    },
    {
      "name":"nodejs",
      "description":"Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.",
      "url":"https://nodejs.org/",
      "icon":"assets/icons8-nodejs-48.png"
    },
    {
      "name":"express",
      "description":"Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
      "url":"https://expressjs.com/",
      "icon":"assets/icons8-express-100.png"
    },
    {
      "name":"mongodb",
      "description":"MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.",
      "url":"https://www.mongodb.com/",
      "icon":"assets/icons8-mongodb-100.png"
    },
    {
      "name":"mysql",
      "description":"MySQL is an open-source relational database management system. Its name is a combination of My, the name of co-founder Michael Widenius's daughter, and SQL, the abbreviation for Structured Query Language.",
      "url":"https://www.mysql.com/",
      "icon":"assets/icons8-mysql-logo-100.png"
    },
    {
      "name":"postgresql",
      "description":"PostgreSQL, also known as Postgres, is a free and open-source relational database management system emphasizing extensibility and SQL compliance.",
      "url":"https://www.postgresql.org/",
      "icon":"assets/icons8-postgresql-100.png"
    },
    {
      "name":"java",
      "description":"Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
      "url":"https://www.java.com/en/",
      "icon":"assets/icons8-java-96.png"
    },


  ];
}
