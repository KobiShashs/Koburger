import { CalcService } from './../../services/calc.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input()
  public itemName: string;

  @Output()
  // tslint:disable-next-line: new-parens
  public lessClicked: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  public moreClicked: EventEmitter<number> = new EventEmitter<number>();

  public constructor(private calcService: CalcService) { }

  public less(): void {
    this.lessClicked.emit(1);

  }

  public more(): void {
    this.moreClicked.emit(1);
  }


  ngOnInit(): void {
  }

  public getAmount(): number{
    return this.calcService.getItemAmount(this.itemName);
  }


}
