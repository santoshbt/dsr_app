import { Injectable,Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Employee } from './employee';

@Injectable()
export class ReportService {
	private reportUrl = 'http://localhost:3002/employees';

	constructor(
		private http: Http
	) {}

// 	getReports(): Observable<EmployeeReport[]> {
// 		return this.http.get(this.proposalsUrl)
// 										.map((response: Response) => <EmployeeReport[]>response.json())
// 										.catch(this.handleError);
// 	}

//   getReport(id: number) {
//     return this.http.get(this.proposalsUrl + "/" + id + '.json');
//   }

  createReport(report) {
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.reportUrl, JSON.stringify(report), { headers: headers}).map((res: Response) => res.json());
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