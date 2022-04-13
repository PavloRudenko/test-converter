import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Amount,
  Currency,
  CurrencyRateFromApi,
  Num,
  Rate,
  Rates,
} from './types';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  rates: Rates = {
    USDUSD: 1,
    USDUAH: 1,
    USDEUR: 1,
    UAHUSD: 1,
    UAHEUR: 1,
    UAHUAH: 1,
    EURUSD: 1,
    EURUAH: 1,
    EUREUR: 1,
  };
  amount: Amount = {
    value: [29.3, 1],
    currency: ['UAH', 'USD'],
  };

  constructor(private http: HttpClient) {}

  init(): void {
    this.http
      .get<CurrencyRateFromApi>('https://cdn.cur.su/api/nbu.json')
      .subscribe(({ rates }) => {
        const { UAH, USD, EUR } = rates;
        if (USD === 1) {
          this.rates = {
            USDUSD: USD,
            USDUAH: UAH,
            USDEUR: EUR,
            UAHUSD: USD / UAH,
            UAHUAH: USD,
            UAHEUR: EUR / UAH,
            EURUSD: USD / EUR,
            EURUAH: UAH / EUR,
            EUREUR: USD,
          };
          this.changeHandler(0);
        }
      });
  }

  handleSelect(value: Currency, num: Num): void {
    this.amount.currency[num] = value;
    this.changeHandler(num);
  }

  changeHandler(first: Num): void {
    const second = first === 0 ? 1 : 0;
    this.amount.value[second] = +(
      this.amount.value[first] *
      this.rates[this.amount.currency.join('') as Rate]
    ).toFixed(2);
  }
}
