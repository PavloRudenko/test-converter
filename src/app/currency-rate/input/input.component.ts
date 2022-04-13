import { Component, Input } from '@angular/core';
import { CurrencyService } from '../currency.service';
import { Num } from '../types';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() num!: Num;

  constructor(public currencyService: CurrencyService) {}

  changeHandler(): void {
    this.currencyService.changeHandler(this.num);
  }
}
