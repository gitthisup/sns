import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CardModel } from '../models/card-model';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.scss']
})
export class MarketplaceComponent {
  cards !: CardModel[]
  filteredCards : CardModel[] = [];
  myForm !: FormGroup;
  _loaderShow = false;

  constructor(){

  }

  // ngOnInit(): void {
  //   this.myForm = this.fb.group({
  //     min: ['0' ],
  //     max: ['100'],
  //   });
  // }
}
