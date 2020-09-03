import { CalcService } from './services/calc.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // public price: number;
  // public TOMATO: number;
  // public SALAD: number;
  // public CHEESE: number;
  // public MEAT: number;
  public total: number;

  public constructor(private calcService: CalcService){
  }
  public ngOnInit(): void {
    // this.price = this.calcService.price;
    // this.TOMATO = 4;
    // this.SALAD = 1;
    // this.CHEESE = 1;
    // this.MEAT = 1;

  }

  public lessTomato(value: number): void {
    this.calcService.lessTomato();
    //this.TOMATO = this.calcService.TOMATO;
  }

  public moreTomato(value: number): void {
    this.calcService.moreTomato();
   // this.TOMATO = this.calcService.TOMATO;
  }

  public lessSalad(value: number): void {
    this.calcService.lessSalad();
    //this.SALAD = this.calcService.SALAD;
  }

  public moreSalad(value: number): void {
    this.calcService.moreSalad();
    //this.SALAD = this.calcService.SALAD;
  }

  public lessCheese(value: number): void {
    this.calcService.lessCheese();
    //this.CHEESE = this.calcService.CHEESE;
  }

  public moreCheese(value: number): void {
    this.calcService.moreCheese();
   // this.CHEESE = this.calcService.CHEESE;
  }
  public lessMeat(value: number): void {
    this.calcService.lessMeat();
   // this.MEAT = this.calcService.MEAT;
  }

  public moreMeat(value: number): void {
    this.calcService.moreMeat();
    //this.MEAT = this.calcService.MEAT;
  }

  public totalPrice(): number{
    const total = this.calcService.totalPrice();
    console.log(total);
    return total;
    //return this.price + ((this.TOMATO) * 1.49) + ((this.SALAD) * 1.49) + ((this.CHEESE) * 1.99) + ((this.MEAT) * 2.99);
  }

  public calcAmount(itemName: string): number{
    return this.calcService.getItemAmount(itemName);
  }

}
