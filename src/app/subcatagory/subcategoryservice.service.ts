import { Injectable } from '@angular/core';
import {  HttpClient, HttpParams} from '@angular/common/http'
import { Observable } from 'rxjs';
import { API } from '../API /api';

import { WrapperCatagory } from '../../Models/homecategory.model';

@Injectable({
  providedIn: 'root'
})
export class SubcategoryserviceService {
  // private catagoryurl='http://192.168.0.124:8000/api/sub_category/subcategory'
   
  public suburl = API.subcatagoryurl;
   
  // private catagoryurl ='192.168.0.131/indiaaclick/laravel-server/public/api/subcategory'
  

  constructor(public http:HttpClient) { }
   

  subcatagory(cid):Observable<WrapperCatagory>{
    let paraid = new HttpParams().set('id',cid);
    return this.http.get<WrapperCatagory>(this.suburl, { params:paraid}); 
  }
}
