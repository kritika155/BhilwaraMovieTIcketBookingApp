import { Component, OnInit } from '@angular/core';
import {MovieService}  from '../movie.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router :Router,private movieService:MovieService) { }

  ngOnInit() {
  }
  login(form){
    console.log(form.value);
}
Login(){
  this.router.navigate(['/movie']);
}
}
