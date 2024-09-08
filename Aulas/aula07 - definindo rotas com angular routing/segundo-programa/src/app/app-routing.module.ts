import { HomeComponent } from './components/views/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/views/login/login.component';

const routes: Routes = [
  { "path": '', component: HomeComponent},
  { "path": 'login', component: LoginComponent},
];

// http://localhost:4200/        -> HomeComponent
// http://localhost:4200/login   -> LoginComponent

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
