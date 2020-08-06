import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { Employee } from './model/employee';
import { Emp } from './model/emp';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 // employees: Employee;
 // employee = new Employee();
  employees: Employee[];
 // public employee = new Employee();
 form: NgForm;
// e1 = new Employee();
e2: Employee;
car = 'asd';

name = 'fsf';
   address = 'fdf';
   salary = 'fzdf';
   nic = '942260865v';
   email = 'fsf';
   password = 'gdg';
   id = 'd';

  emp = new Employee(this.name, this.address, this.salary, this.nic, this.email, this.password);

  constructor(private apiService: ApiService){

  }


  title = 'AngularApp';
  param = '5f229a27199eec13488efb20';


 //  emp = new Employee(this.name2, this.address2, this.salary2, this.nic2, this.email2, this.password2);
   // savedEmployee: Employee;
   savedEmployee: Employee;
  // employee: Employee;

 /* ngOnInit(){
console.log('sad');
    // tslint:disable-next-line:align
    this.apiService.getEmployees().subscribe(
      data => {
        this.employees = data; // Typecasting the retrieved data into employee list. (data is form of json list)
        console.log('heree');
    });
  }
*/
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
//    this.employee = new Employee('dd', '', '', '', '', '');
    console.log('working');
 //   console.log('OnInit ; ' + this.employee);
    // tslint:disable-next-line:align
    this.apiService.getEmployees().subscribe(
      data => {
        this.employees = data; // Typecasting the retrieved data into employee list. (data is form of json list)
        console.log(this.employees);
       // console.log(this.employees.name);
    });

 /*   this.apiService.getEmployeeById().subscribe(
      data => {
        this.employee = data; // Typecasting the retrieved data into employee list. (data is form of json list)
        console.log(this.employee);
    });
*/

    }

    // tslint:disable-next-line:typedef
    userRegistration(form: NgForm){
      console.log('Registration method ');
     // console.log('e1' + this.e1.name);
    //  console.log('e2' + this.e2.name);
    //  console.log(this.emp);
    //  console.log('Sending :' + JSON.stringify(this.emp));
    //  console.log('Sending :' + this.emp.name);
      const json = JSON.stringify(this.emp);
      this.apiService.postEmployee(this.emp).subscribe(
        data => {
                  this.savedEmployee = data;
                  console.log('Response Received!!');
                  console.log('saved emp ' + this.savedEmployee);
                },
        error => {
                  console.log('Error Occured while posting employee to the backend!!');
                  console.log(error);
                 }
      );
    }


// tslint:disable-next-line:typedef
/* userRegistration(form: NgForm){
  const json = JSON.stringify(form.value);
  console.log('form data ' + json.valueOf());
  console.log(this.employee.name);
  console.log('Sending :' + JSON.stringify(this.employee));
  console.log('Sending :' + this.employee.name);
  const jsonn = JSON.stringify(this.employee);
  this.apiService.postEmployee(this.employee).subscribe(
    data => {
              this.savedEmployee = data;
              console.log('Response Received!!');
              console.log(this.savedEmployee);
            },
    error => {
              console.log('Error Occured while posting employee to the backend!!');
              console.log(error);
             }
  );
}
*/
  }
   /*
    // POST request to backend
    const emp = new Employee();
    emp.name = this.name;
    emp.address = this.address;
    emp.salary = this.salary;

    this.apiService.postEmployee(emp).subscribe(
      data => {
        this.savedEmployee = data;
        console.log(emp);
      });
*/
