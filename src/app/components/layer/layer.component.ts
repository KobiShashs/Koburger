import { LAYER } from './../../models/layer';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-layer',
  templateUrl: './layer.component.html',
  styleUrls: ['./layer.component.css']
})


export class LayerComponent implements OnInit {

  @Input()
  public layer: string;

  @Input()
  public layerWidth: number;

  @Input()
  public layerHeight: number;

  constructor() { }

  ngOnInit(): void {


  }

  public getColor(): string {
    switch (this.layer) {
      case 'bread':
        return 'burlywood';
        case 'tomato':
        return 'red';
        case 'salad':
        return 'green';
        case 'cheese':
        return 'yellow';
        case 'meat':
        return 'brown';

    }
  }

}
