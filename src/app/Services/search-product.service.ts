import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchProductService {

  constructor(private http:HttpClient) { }

  searchProduct(desc:string):Observable<any>{
    let url="http://localhost:56783/SearchProduct?search="+desc;
    return this.http.get<any>(url);
  }
}