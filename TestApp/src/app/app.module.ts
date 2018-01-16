import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CalcComponentComponent } from './calc-component/calc-component.component';
import { EmpRepositoryComponent } from './emp-repository/emp-repository.component';
import { EmpFilterPipe } from './emp-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CalcComponentComponent,
    EmpRepositoryComponent,
    EmpFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
