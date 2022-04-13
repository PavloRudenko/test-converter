import { Component, Input } from '@angular/core';
import { CurrencyService } from '../currency.service';
import { Currency, Num } from '../types';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent {
  @Input() num!: Num;
  @Input() currencies!: Currency[];

  constructor(public currencyService: CurrencyService) {}

  handleSelect(value: Currency): void {
    this.currencyService.handleSelect(value, this.num);
  }
}
