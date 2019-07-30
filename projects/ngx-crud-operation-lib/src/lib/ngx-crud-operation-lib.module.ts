import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxCrudOperationLibComponent } from './ngx-crud-operation-lib.component';



@NgModule({
  declarations: [NgxCrudOperationLibComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [NgxCrudOperationLibComponent]
})
export class NgxCrudOperationLibModule { }
