import { Ingredient } from '../models/Ingredient';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class CalcService {
  public price: number;
  public TOMATO: number;
  public SALAD: number;
  public CHEESE: number;
  public MEAT: number;
  public total: number;
  public items: Ingredient[]; // = [new Ingredient('Tomato', 0) ,];
  public basePrice: number;

  public constructor() {
    this.reset();
  }

  public reset(): void {
    this.price = 2.99;
    this.TOMATO = 1;
    this.SALAD = 1;
    this.CHEESE = 1;
    this.MEAT = 1;

    this.items = [
      new Ingredient('Tomato', 0, 1.49),
      new Ingredient('Salad', 0, 1.49),
      new Ingredient('Cheese', 0, 1.99),
      new Ingredient('Meat', 1, 2.99)
    ];
    this.basePrice = 2.99;

  }

  public lessTomato(): void {
    const idx = this.items.findIndex(obj => obj.itemName === 'Tomato');
    const amount = this.items[idx].amount;
    if (amount > 0) {
      this.items[idx].amount--;
    }
    //this.TOMATO--;
  }

  public moreTomato(): void {
    const idx = this.items.findIndex(obj => obj.itemName === 'Tomato');
    const amount = this.items[idx].amount;
    this.items[idx].amount++;

  }

  public lessSalad(): void {
    const idx = this.items.findIndex(obj => obj.itemName === 'Salad');
    const amount = this.items[idx].amount;
    if (amount > 0) {
      this.items[idx].amount--;
    }
  }

  public moreSalad(): void {
    const idx = this.items.findIndex(obj => obj.itemName === 'Salad');
    const amount = this.items[idx].amount;
    this.items[idx].amount++;
  }

  public lessCheese(): void {
    const idx = this.items.findIndex(obj => obj.itemName === 'Cheese');
    const amount = this.items[idx].amount;
    if (amount > 0) {
      this.items[idx].amount--;
    }
  }

  public moreCheese(): void {
    const idx = this.items.findIndex(obj => obj.itemName === 'Cheese');
    const amount = this.items[idx].amount;
    this.items[idx].amount++;
  }
  public lessMeat(): void {
    const idx = this.items.findIndex(obj => obj.itemName === 'Meat');
    const amount = this.items[idx].amount;
    if (amount > 0) {
      this.items[idx].amount--;
    }
  }

  public moreMeat(): void {
    const idx = this.items.findIndex(obj => obj.itemName === 'Meat');
    const amount = this.items[idx].amount;
    this.items[idx].amount++;
  }

  public totalPrice(): number {
    let sum = this.basePrice;
    this.items.forEach(element => {
      sum += element.amount;
    });
    return sum;
  }

  public getItemAmount(itemName: string){
    const idx = this.items.findIndex(obj => obj.itemName === itemName);
    return this.items[idx].amount;
  }
}
