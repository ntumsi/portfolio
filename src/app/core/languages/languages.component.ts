import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardImage, MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-languages',
  standalone: true,
  imports: [MatCardModule, MatCardImage, CommonModule],
  templateUrl: './languages.component.html',
  styleUrl: './languages.component.scss'
})
export class LanguagesComponent {
  languages = [
    {
      "name": "Python",
      "proficiency": "Intermediate",
      "url": "https://www.python.org/",
      "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png"
    },
    {
      "name": "JavaScript",
      "proficiency": "Intermediate",
      "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      "logo": "https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-hq-png-1.png"
    },
    {
      "name": "TypeScript",
      "proficiency": "Intermediate",
      "url": "https://www.typescriptlang.org/",
      "logo": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
    },
    {
      "name": "Java",
      "proficiency": "Intermediate",
      "url": "https://www.java.com/en/",
      "logo": "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg"
    },
    {
      "name": "C#",
      "proficiency": "Intermediate",
      "url": "https://docs.microsoft.com/en-us/dotnet/csharp/",
      "logo": "https://cdn.prod.website-files.com/6047a9e35e5dc54ac86ddd90/63065002cd563e1cd1cead28_eaadfe64-p-800.png"
    },
    {
      "name": "SQL",
      "proficiency": "Intermediate",
      "url": "https://www.w3schools.com/sql/",
      "logo": "https://www.mysql.com/common/logos/logo-mysql-170x115.png"
    },
    {
      "name": "HTML",
      "proficiency": "Intermediate",
      "url": "https://developer.mozilla.org/en-US/docs/Web/HTML",
      "logo": "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
    },
    {
      "name": "CSS",
      "proficiency": "Intermediate",
      "url": "https://developer.mozilla.org/en-US/docs/Web/CSS",
      "logo": "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
    },
    {
      "name": "SCSS",
      "proficiency": "Intermediate",
      "url": "https://sass-lang.com/",
      "logo": "https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg"
    },
    {
      "name": "PHP",
      "proficiency": "Beginner",
      "url": "https://www.php.net/",
      "logo": "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg"
    },
    {
      "name": "PowerShell",
      "proficiency": "Beginner",
      "url": "https://docs.microsoft.com/en-us/powershell/",
      "logo": "https://upload.wikimedia.org/wikipedia/commons/a/af/PowerShell_Core_6.0_icon.png"
    },
    {
      "name": "Bash",
      "proficiency": "Beginner",
      "url": "https://www.gnu.org/software/bash/",
      "logo": "https://upload.wikimedia.org/wikipedia/commons/8/82/Gnu-bash-logo.svg"
    }
  ]

}
