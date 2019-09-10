import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  GetExperience() {
    return [
      { headerImage: 'softum', company: 'SOFTUM', workTime: "02/05/2018 – until now (1 year and 3 months)", description: "Fullstack .Net Develoer. support and refinement.", skills: ['csharp', 'dotnetcore', 'winweb', 'aspnet', 'mvc', 'wcfwpf', 'linq', 'mssql', 'mysql', 'tsql', 'mongodb', 'js', 'angularjs', 'elasticsearch', 'restapi', 'ef', 'html', 'css', 'devops', 'azure', 'tfs', 'git', 'tfvc', 'blockchain'] },
      { headerImage: 'top2fox', company: 'Top2Fox', workTime: "01/06/2016 – 01/05/2018 (1 year and 10 months)", description: "Fullstack .Net Develoer, part role DevOps, support and refinement.", skills: ['csharp', 'dotnet', 'winweb', 'aspnet', 'mvc', 'wcfwpf', 'linq', 'mssql', 'mysql', 'tsql', 'js', 'angularjs', 'elasticsearch', 'restapi', 'ef', 'html', 'css', 'devops', 'git', 'redmine'] },
      { headerImage: 'freelance', company: 'Freelance', workTime: "01/10/2014 – 01/05/2016 (1 year and 7 months)", description: ".NET and MSSQL Developer. Was worked independently as well as the part of the team.", skills: ['csharp', 'dotnet', 'js', 'aspnet', 'mvc', 'html', 'css', 'mssql', 'mysql', 'tsql', 'git'] }
    ];
  }

  GetProjects() {
    return [
      { project: 'mediajobs.ru', link: 'https://mediajobs.ru/', description: 'Russias largest specialized platform for posting vacancies and searching for employees in the media.', headerImage: 'mj', technologies: ['.Net', 'Jquery', 'MSSQL', 'ElasticSearch', 'HTML5', 'CSS3', 'Compas Sass', 'AngularJS', 'Entity Framework', 'Google API'] },
      { project: 'rusmice.com', link: 'https://www.rusmice.com/', description: 'Is the leading provider of DMC-services in Russia and CIS countries, travel agency platform', headerImage: 'rm', technologies: ['.Net', 'Jquery', 'MSSQL', 'HTML5', 'CSS3', 'AngularJS', 'Entity Framework', 'Google API'] },
      { project: 'Real-estate project (USA based client)', link: 'https://buildingbits.com/', description: 'A real-estate investment platform with the option of buying shares of the buildings. This is a big platform that was several times noticed by financial publishers and US based federal financial conferences.', headerImage: 'bb', technologies: ['.Net', 'Jquery', 'MSSQL', 'HTML5', 'CSS3', 'Entity Framework'] },
      { project: 'Medical treatment platform (Israel based)', link: '', description: 'This project consists of mobile applications (iOS, Android), server side and web admin portal. The application creates transparency between family members and their elderly family members and therapists.', headerImage: 'tm', technologies: ['.Net Core', 'HTML5', 'CSS3', 'MongoDB', 'Angular 2+', 'Rest API', 'Azure', 'Jira'] },
      { project: 'Cardano Stake Pool (WorldWide)', link: 'https://www.cardano.org', description: 'This project is based on latest cutting-edge technologies in a Blockchain field. The main goal of this project is to build private stake pool that uses Cardano blockchain, called to implement a new improved mining algorithm PoS that will replace old one PoW that used to mine bitcoins.', headerImage: 'blockchain', technologies: ['Blockchain', 'Azure'] }
    ]
  }

  constructor() { }
}
