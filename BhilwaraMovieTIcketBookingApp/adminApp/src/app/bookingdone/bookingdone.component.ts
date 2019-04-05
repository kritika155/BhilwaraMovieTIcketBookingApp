import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MovieService}  from '../movie.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-bookingdone',
  templateUrl: './bookingdone.component.html',
  styleUrls: ['./bookingdone.component.css']
})
export class BookingdoneComponent implements OnInit {
  id: number;
  private sub: any;
  booking:any;
  constructor(private route: ActivatedRoute, private router :Router,private movieService:MovieService) { }

  ngOnInit() {
    this.booking = {customer_id:'',tickets:'',movie_id:'',movie_name:'',movie_time:'',theatre:'',screen:'',city:'',movie_date:'',date:'',amount:'',ticket_price:''};
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      console.log(this.id); // (+) converts string 'id' to a number
      this.movieService.getRemoteBookingById(this.id).subscribe((booking)=>{this.booking = booking;});

   });
  }

}
