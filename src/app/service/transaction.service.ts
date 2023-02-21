import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Course} from "../model/course.model";
import {Transaction} from "../model/transaction.model";

@Injectable({
  providedIn: 'root'
})
export class TransactionService {


  constructor(private httpClient: HttpClient) { }

  public findAll(): Observable<Transaction[]> {
    return this.httpClient.get<Transaction[]>('http://localhost:8080/api/transaction');
  }

}
