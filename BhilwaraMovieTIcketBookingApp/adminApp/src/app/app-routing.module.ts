import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { BookingComponent } from './booking/booking.component';
import { BookingdoneComponent } from './bookingdone/bookingdone.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgetComponent } from './forget/forget.component';

const routes: Routes = [
  {
    path:'movie',
    component:MovieComponent
  },
  {
    path:'edit/:id',
    component:EditComponent
  },
  {
    path:'add',
    component:AddComponent
  },
  {
    path:'forget',
    component:ForgetComponent
  },
  {
    path:'booking',
    component:BookingComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'registration',
    component:RegistrationComponent
  },
  {
    path:'bookingdone/:id',
    component:BookingdoneComponent
  },

{
path:'',
redirectTo:'/login',
pathMatch:'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
