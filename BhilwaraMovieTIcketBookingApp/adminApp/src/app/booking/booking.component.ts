import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {MovieService}  from '../movie.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
booking=
{
  customer_id:'',tickets:'',movie_id:'',movie_name:'',movie_time:'',theatre:'',screen:'',city:'',movie_date:'',date:'',amount:'',ticket_price:''
};
list=[];

  constructor(private router :Router,private movieService:MovieService,private route: ActivatedRoute) { }

  ngOnInit() {
    
    this.movieService.getDBBookings();
  this.movieService.getRemoteBookings().subscribe((result)=>{this.list=result;});
  }
  addBooking(booking){
    
    this.movieService.addRemoteBooking(this.booking).subscribe(()=>{this.router.navigate(['/booking']);});
  }
  onSelect(booking)
  {
    this.router.navigate(['./bookingdone/'+booking.id]); 
  }

}
