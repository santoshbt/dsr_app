import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Employee } from './employee';

@Injectable()
export class EmployeeService {
	private employeesUrl = 'http://localhost:3002/employees';

	constructor(
		private http: Http
	) {}

	getEmployees(): Observable<Employee[]> {
		return this.http.get(this.employeesUrl)
										.map((response: Response) => <Employee[]>response.json())
										.catch(this.handleError);
	}

  getEmployee(id: number) {
    return this.http.get(this.employeesUrl + "/" + id + '.json');
  }

  createEmployee(employee) {
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.employeesUrl, JSON.stringify(employee), { headers: headers}).map((res: Response) => res.json());
  }

	private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}