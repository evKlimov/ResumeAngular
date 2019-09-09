import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { StatisticsComponent } from './statistics/statistics.component';

const routes: Routes = [
  { path: 'resume', component: ResumeComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: '', redirectTo: '/resume', pathMatch: 'full' },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
