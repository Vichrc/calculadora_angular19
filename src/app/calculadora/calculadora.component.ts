import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [ FormsModule, CommonModule ],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.scss'
})
export class CalculadoraComponent {
    num01: number = 0;
    num02: number = 0;
    resultado: number = 0;

    calcularResultado(){
      
      this.resultado = this.num01 + this.num02;
    }
}
