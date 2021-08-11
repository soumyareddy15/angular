import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  uri:string = "https://localhost:44390/api/User/";
  constructor(private http : HttpClient) { }

  doLogin(useremail : string, userpassword: string) : Observable<any>{
      return this.http.get<any>(this.uri+"do-login?useremail="+useremail+"&userpassword="+userpassword);
  }
}