import { Component, OnInit } from '@angular/core';
import {Transaction} from "../../../model/transaction.model";
import {TransactionService} from "../../../service/transaction.service";

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {

  public transactionList: Transaction[] | null | undefined;

  constructor(public transactionService: TransactionService) {}

  ngOnInit(): void {
    this.transactionService.findAll().subscribe(value => {
      this.transactionList = value;
    });

  }

}
