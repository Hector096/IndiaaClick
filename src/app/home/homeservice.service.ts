import { Injectable } from '@angular/core';
import {  HttpClient,HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { WrapperCatagory, Category } from '../../Models/homecategory.model';
import { API } from '../API /api';

@Injectable({
  providedIn: 'root'
})
export class HomeserviceService {
  private  catagoryurl = API.catagoryurl;

  constructor(public http : HttpClient) { }

  homecatagory():Observable<WrapperCatagory>{
    return this.http.get<WrapperCatagory>(this.catagoryurl);
 
  }

}
