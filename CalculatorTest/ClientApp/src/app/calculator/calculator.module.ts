import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { CalcComponent } from './calculator.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [CalcComponent],
  bootstrap: [CalcComponent]
})
export class CalcModule { }
