import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddToCartService {

  url:string = "http://localhost:56783/";

    constructor(private http : HttpClient) { }

    insertIntoCart(useremail:string, productid: number, cartquantity : number) : Observable<any>{
        const httpheader={headers:new HttpHeaders({'Content-Type':'text/html'})};
        return this.http.post<any>(this.url+"InsertIntoCart?useremail="+useremail+
        "&productid="+productid+"&cartquantity="+cartquantity,httpheader);
    }

}