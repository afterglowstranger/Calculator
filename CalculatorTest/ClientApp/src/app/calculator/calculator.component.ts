import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalcComponent {
  display = '0';
  firstValue: number | null = null;
  action: string | null = null;

  numClick(val: { toString: () => string; }) {
    if (this.display === '0') {
      this.display = val.toString();
    } else {
      this.display = `${this.display}${val}`;
    }
  }

  oper(action: string | null) {
    this.firstValue = parseFloat(this.display);
    this.action = action;
    this.display = ' ';
  }

  calculate() {
    debugger;
    const a = this.firstValue;
    const b = parseFloat(this.display);

    let result;
    if (this.action === 'm') {
      if (a !== null) {
        result = a * b;
      }
    
    }
    else if (this.action === 'd') {
      if (a !== null) {
        result = a / b;
      }
    }
    else if (this.action === 'a') {
      if (a !== null) {
        result = a + b;
      }
    }
    else if (this.action === 's') {
      if (a !== null) {
        result = a - b;
      }
    }

    if (result != null) {
      this.firstValue = result;
      this.display = result.toString();
    }

    
    
  }
}
