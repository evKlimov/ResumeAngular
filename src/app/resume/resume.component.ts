import { Component, OnInit } from '@angular/core';
import { InfoService } from '../info.service';

export interface Exp {
  headerImage: string;
  company: string;
  workTime: string;
  description: string;
  skills: string[];
}

export interface Project {
  headerImage: string;
  project: string;
  description: string;
  technologies: string[];
  link: string;
}

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  ngOnInit(): void { }

  experiences: Exp[];
  projects: Project[];

  constructor(private _infoService: InfoService)
  {
    this.experiences = _infoService.GetExperience();
    this.projects = _infoService.GetProjects();
  }
}
