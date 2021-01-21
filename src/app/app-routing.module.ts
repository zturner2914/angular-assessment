import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DrupalNodeComponent} from './drupal-node/drupal-node.component';


const routes: Routes = [
  {path: 'nodeid/:id', component: DrupalNodeComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
