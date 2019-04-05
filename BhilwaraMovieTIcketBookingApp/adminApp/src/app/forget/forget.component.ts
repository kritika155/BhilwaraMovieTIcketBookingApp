import { Component, OnInit } from '@angular/core';
import {MovieService}  from '../movie.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {

  constructor(private router :Router,private movieService:MovieService) { }

  ngOnInit() {
  }
  reset(){
    this.router.navigate(['/login']);

  }
}
