import { Injectable } from '@angular/core';
import {Http, Headers, Response} from "@angular/http";
import {Observable} from "rxjs/Rx";
declare var JSOG;

@Injectable()
export class HttpClientService {
  private baseUrl: string;

  constructor(private http: Http) {
    // private authService: AuthService
    this.baseUrl = "https://api.afterbanks.com/";
  }

  createAuthorizationHeader(headers: Headers) {
    // headers.append('Content-Type', 'application/json');
    // if (this.authService.isAuthenticated()) {
    //   headers.append('Authorization', 'Bearer ' + this.authService.getToken());
    // }
  }

  get(url: string) {
    url = this.baseUrl + url;
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.intercept(this.http.get(url, {
      headers: headers
    }).map(this.extractData));
  }

  deleteCustom(url: string) {
    url = this.baseUrl + url;
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.intercept(this.http.delete(url, {
      headers: headers
    }).map(this.extractData));
  }

  post(url: string, data: any) {
    url = this.baseUrl + url;
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.intercept(this.http.post(url, JSON.stringify(data), {
      headers: headers
    }).map(this.extractData));
  }

  put(url: string, data: any) {
    url = this.baseUrl + url;
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.intercept(this.http.put(url, JSOG.stringify(data), {
      headers: headers
    }).map(this.extractData));
  }

  private extractData(res: Response) {
    console.log("response " + res);
    let string = res.text();
    let body = JSOG.parse(string);
    return body || {};
  }

  intercept(observable: Observable<any>)
  {
    return observable.catch(err =>
    {
      console.log("intercept " + err);
      if (err.status === 401)
      {
        return this.unauthorised();
      } else
      {
        let body : {code: string, message: string} = JSOG.parse(err._body);
        console.error(body);
        return Observable.throw(body.message);
      }
    });
  }

  unauthorised(): Observable<any>
  {
    // this.authorizationService.logout();
    return Observable.empty();
  }

// private parseError(res: any): any{
//   let string = res.text();
//   let body = JSOG.parse(string);
//   return body || {};
// }
}
