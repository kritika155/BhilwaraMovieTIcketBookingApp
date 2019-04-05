import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import {FormsModule} from "@angular/forms";
import { BookingComponent } from './booking/booking.component';
import { BookingdoneComponent } from './bookingdone/bookingdone.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgetComponent } from './forget/forget.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    EditComponent,
    AddComponent,
    BookingComponent,
    BookingdoneComponent,
    LoginComponent,
    RegistrationComponent,
    ForgetComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
