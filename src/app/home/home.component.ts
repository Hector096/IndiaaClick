import { Component, OnInit } from '@angular/core';
import { WrapperCatagory ,Category   } from '../../Models/homecategory.model'
import { HomeserviceService } from './homeservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public wrappercatagory:WrapperCatagory;
  public homecategory : Category[];
constructor( public call:HomeserviceService , public route:Router) { }

  ngOnInit() {

    this.call.homecatagory().subscribe(
      response=>{
        if(response != null){
         this.wrappercatagory = response;
         this.homecategory=this.wrappercatagory.category
        }
      },
      error=>{
        alert("Failed"+error);
      }
    )
    
  }
  onselect(list){

      this.route.navigate(['/subcategory',list.id]);
  }

}
