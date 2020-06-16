import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubcategoryserviceService } from './subcategoryservice.service';
import { WrapperCatagory ,Category   } from '../../Models/homecategory.model'

@Component({
  selector: 'app-subcatagory',
  templateUrl: './subcatagory.component.html',
  styleUrls: ['./subcatagory.component.css']
})
export class SubcatagoryComponent implements OnInit {
    
  public wrappercatagory:WrapperCatagory;
  public subcategory : Category[];
  
  constructor(public route:ActivatedRoute , public call : SubcategoryserviceService) { }

  ngOnInit() {
    let id  = parseInt(this.route.snapshot.paramMap.get("id"));
    
    
    this.call.subcatagory(id).subscribe(
      response=>{
        if(response != null){
          console.log(response);
          
         this.wrappercatagory = response;
         this.subcategory=this.wrappercatagory.category
        }
      },
      error=>{
        alert("Failed"+error);
      }

    )

    
  }

  onselect(list){

    // this.route.navigate(['/',list.id]);
}
}
