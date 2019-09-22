import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseModule } from './base/project-tn/base.module';


const routes: Routes = [{
  path: '',
  redirectTo: 'project-tn',
  pathMatch: 'full'
},
{
  path: 'project-tn',
  loadChildren: () => BaseModule
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
