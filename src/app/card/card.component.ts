import { Component, Input, Pipe, PipeTransform } from '@angular/core';
import { CardModel } from '../models/card-model';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent {

  @Input('inputCard') card!: CardModel;

  constructor() {
  }
}