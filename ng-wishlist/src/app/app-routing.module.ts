import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AboutComponent } from './pages/about/about.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
