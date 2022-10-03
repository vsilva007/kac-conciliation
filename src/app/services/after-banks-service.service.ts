import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Rx";
import {HttpClientService} from "./httpclient.service";
import {Bank} from "../model/bank.model";
import {BankFactory} from "../factories/bank.factory";

@Injectable()
export class AfterBanksService {

  constructor(private http: HttpClientService) { }

  private basePath = 'forms/';

  getBankList(page: string = "0", pageSize: string = "10", fields: string = "", search: string = ""): Observable<Bank[]> {
    return this.http.get(this.basePath).map(this.parseResponseArray);
  }

  parseResponseArray(response){
    console.log(response);
    response = BankFactory.createFromArray(response);
    console.log(response);
    return response;
  }

  parseResponseObject(response){
    console.log(response);
    response = BankFactory.createFromObject(response);
    console.log(response);
    return  response;
  }

}
