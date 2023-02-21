import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {HeaderComponent} from './component/header/header.component';
import {CourseCreateComponent} from './component/course/course-create/course-create.component';
import {CourseListComponent} from './component/course/course-list/course-list.component';
import {FormsModule} from "@angular/forms";
import {QRCodeModule} from "angularx-qrcode";
import { TransactionCreateComponent } from './component/transaction/transaction-create/transaction-create.component';
import { TransactionListComponent } from './component/transaction/transaction-list/transaction-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CourseCreateComponent,
    CourseListComponent,
    TransactionCreateComponent,
    TransactionListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    QRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
