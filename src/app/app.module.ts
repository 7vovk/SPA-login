import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from './modules/shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './modules/auth/components/login/login.component';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RegisterComponent} from './modules/auth/components/register/register.component';
import {EventsComponent} from './modules/auth/components/events/events.component';
import {ProfileComponent} from './modules/auth/components/profile/profile.component';
import {MainPageComponent} from './modules/shared/components/main-page/main-page.component';
import {AuthService} from './modules/auth/services/auth.service';
import {EventService} from './modules/auth/services/event.service';
import {AuthGuard} from './modules/auth/guards/auth.guard';
import {TokenIterceptorService} from './modules/auth/services/token-iterceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    EventsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    MatSidenavModule,
    MatDialogModule,
  ],
  providers: [
    AuthService,
    EventService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenIterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
