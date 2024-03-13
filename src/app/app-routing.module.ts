import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "", redirectTo: "home",  pathMatch: 'full'},
  {path: "sign-in", component: SignInComponent},
  {path: "update-profile", component: UpdateProfileComponent},
  {path: "sign-up", component: SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
