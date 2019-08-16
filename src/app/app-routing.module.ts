import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './modules/auth/components/login/login.component';
import {EventsComponent} from './modules/auth/components/events/events.component';
import {ProfileComponent} from './modules/auth/components/profile/profile.component';
import {RegisterComponent} from './modules/auth/components/register/register.component';
import {AuthGuard} from './modules/auth/guards/auth.guard';


const routes: Routes = [
  {
    path: 'login',
    redirectTo: '',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'events',
    component: EventsComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
