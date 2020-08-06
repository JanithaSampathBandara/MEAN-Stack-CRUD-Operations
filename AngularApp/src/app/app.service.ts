import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // For connect with backend API purposes

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

 // getData(){
 //   return this.http.get('/employees/getEmployee');
 // }
}
