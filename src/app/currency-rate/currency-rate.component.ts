import { Component, OnInit } from '@angular/core';
import { CurrencyService } from './currency.service';
import { Currency, Rate } from './types';

@Component({
  selector: 'app-currency-rate',
  templateUrl: './currency-rate.component.html',
  styleUrls: ['./currency-rate.component.scss'],
})
export class CurrencyRateComponent implements OnInit {
  isActive = false;
  currencies: Currency[] = ['UAH', 'USD', 'EUR'];

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.currencyService.init();
    this.isActive = true;
  }
}
