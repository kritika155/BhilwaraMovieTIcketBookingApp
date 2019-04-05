import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {MovieService}  from '../movie.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  movie = {name:'', year:'', image_url:'', production_house:'',rating:'',type:'',language:'',date:''};

  constructor(private router :Router,private movieService:MovieService,private route: ActivatedRoute) { }

  ngOnInit() {
  }
  addMovie(movie){
  	this.movieService.addRemoteMovie(this.movie).subscribe(()=>{this.router.navigate(['/movie']);});
  }
}
