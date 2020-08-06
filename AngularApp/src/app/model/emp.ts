export class Emp
{
    // tslint:disable-next-line:variable-name
  //  _id: any;
    name: string;
    address: string;
    salary: string;
    nic: string;
    email: string;
    password: string;
 // json: any;
  //  date: any;

  constructor(name: string, address: string, salary: string, nic: string, email: string, password: string)
    {
        this.name = name;
        this.address = address;
        this.salary = salary;
        this.nic = nic;
        this.email = email;
        this.password = password;
    }

}
