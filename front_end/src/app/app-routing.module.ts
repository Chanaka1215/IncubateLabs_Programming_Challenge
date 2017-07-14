/*
 * Created by         : Chanaka Fernando.
 * Date               : Wed, 7/12/2017 .
 * Email              : nuwan.c.fernando@gmail.com.
 * LinkedIn           : https://www.linkedin.com/in/n-chanaka-fernando
 * Belongs to Project : incubateLabsFrontEnd.
 * Package            : .
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {EnterDetailsComponent} from './components/enter-details/enter-details.component';
import {FindDetailsComponent} from './components/find-details/find-details.component';
import {OverviewComponent} from "./components/overview/overview.component";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'enter',
        component: EnterDetailsComponent,
      },
      {
        path: 'find',
        component: FindDetailsComponent,
      },
      {
        path: 'data',
        component: OverviewComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
