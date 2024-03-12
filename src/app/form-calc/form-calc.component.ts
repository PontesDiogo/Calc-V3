 import { Component } from '@angular/core';

@Component({
  selector: 'app-form-calc',
  templateUrl: './form-calc.component.html',
  styleUrl: './form-calc.component.css'
})
// export class FormCalcComponent {
//   num1: number = 0;
//   num2: number = 0;
//   res: number = 0;

//   onClickRes(){

//     this.res = this.num1 + this.num2;
//     alert('Resultado: ' + this.res);
//   }


export class FormCalcComponent {
  num1: number = 0;
  num2: number = 0;
  operation: string = "";
  res: number  = 0;
  // operations:string[] = ['+', '-', '/', '*', '%', '^'];

  onChangeRes() {
    console.log('OI', this.operation)
    switch (this.operation) {
      case '+':
        this.res = this.num1 + this.num2;
        break;
      case '-':
        this.res = this.num1 - this.num2;
        break;
      case '*':
        this.res = this.num1 * this.num2;
        break;
      case '/':
        if (this.num2 !== 0) {
          this.res = this.num1 / this.num2;
        } else {
          this.res = 0; 
        }
        break;
      case '%':
        this.res = this.num1 * (this.num2/100);
        break;
      case 'x²':
        this.res = this.num1 ** this.num2;
        break;
      default:
        this.res = 0; 
    }
  }
}


