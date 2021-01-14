import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  url:string = "http://localhost:56783/";
  constructor(private http:HttpClient) { }
  
  getretailerprofile(retaileremail:string):Observable<any>
  {
        return this.http.get<any>(this.url+ "GetRetailerProfile?retaileremail=" +retaileremail);
  }
  getuserprofile(useremail:string):Observable<any>
  {
        return this.http.get<any>(this.url+ "GetUserProfile?uemail=" +useremail);
  }
  getprofile(useremail:string):Observable<any>{
      
    return this.http.get<any>(this.url+ "GetProfile?uemail=" +useremail);
  
  }

}
