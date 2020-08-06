import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
// import { AppComponent } from '../app.component';

import { Employee } from '../model/employee';
import { Emp } from '../model/emp';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // public Employee; emp = new Employee();
  constructor(private httpClient: HttpClient , /*, private employee: Employee */) { }

  getEmployees(): Observable<any>{
    return this.httpClient.get('http://localhost:3000/employees/getEmployee');
   //  return this.httpClient.get('https://jsonplaceholder.typicode.com/posts/1/comments');
     // return this.httpClient.get<Employee[]>('https://jsonplaceholder.typicode.com/posts/1/comments');
  }

  getEmployeeById(): Observable<any>{
  // const param = new HttpParams().set('_id', '5f229a27199eec13488efb20');
    const param = '5f229a27199eec13488efb20';
   // const param = this.appComponent.id;
    return this.httpClient.get('http://localhost:3000/employees/getEmployee/' + param);
    // const a = this.employee._id;
  }

  postEmployee(emp: Employee): Observable<any>{
    console.log('janzz');
    console.log('In services : ' + emp);
    return this.httpClient.post('http://localhost:3000/employees/saveEmployee', emp);
  }
}
