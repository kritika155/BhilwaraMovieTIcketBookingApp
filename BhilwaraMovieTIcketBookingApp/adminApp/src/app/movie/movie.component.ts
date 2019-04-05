import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  {MovieService}  from '../movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie:any={name:'', year:'', image_url:'', production_house:'',rating:'',type:'',language:'',date:''};
  private movieUrl = 'http://localhost:3000/api/movies';

  // movies: any = [
  //   {id:1, name:'Kritika Roy',email:'kritikaroy@gmail.com', phone:'09038187690', address:"India"},
  //   {id:2, name:'Ashish Roy',email:'ashishroy@gmail.com',phone:'09038187691' ,address:"India"}
  // ];
  ngOnInit() {
    this.movieService.getDBMovies();
  this.movieService.getRemoteMovies().subscribe((result)=>{this.list=result;});
  
}
 

list=[];
  constructor(private movieService: MovieService,private router :Router) { }

 
 
onEdit(id:number)
{
  this.router.navigate(['/edit',id]); 
}

// deleteCustomer(customer){
//  this.customerService.deleteCustomer(customer);
//  this.list=this.customerService.getCustomers();
// }
deleteMovie(movie){
  this.movieService.deleteRemoteMovie(movie).subscribe((e) => {
    this.movieService.getRemoteMovies().subscribe((result) => {this.list = result;});
  });
 // this.list = this.customerService.getCustomers();
}
}
