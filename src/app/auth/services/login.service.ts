import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  loginUser( data){

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    let url = "https://ang.convoapps.com/api/v1/login";
    console.log(data);
    return this.http.post(url,data,httpOptions)

  }
}
