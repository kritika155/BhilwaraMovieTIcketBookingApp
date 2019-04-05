import { Component, OnInit } from '@angular/core';
import {MovieService}  from '../movie.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private router :Router,private movieService:MovieService) { }

  ngOnInit() {
  }
  register(form) {
    console.log(form.value);
}
Register(){
  this.router.navigate(['/login']);

}
}
