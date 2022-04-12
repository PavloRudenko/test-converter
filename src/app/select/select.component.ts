import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export type Currencies = 'USD' | 'UAH' | 'EUR';

export interface Amount {
  sum: number;
  currency: Currencies;
}

export interface RateFromApi {
  USD: number;
  EUR: number;
  UAH: number;
}

export interface CurrencyRateFromApi {
  base: 'USD';
  localISODate: string;
  putISODate: string;
  source: 'nbu';
  rates: RateFromApi;
}

export interface Rates {
  USDUSD: 1;
  USDUAH: number;
  USDEUR: number;
  UAHUSD: number;
  UAHEUR: number;
  UAHUAH: 1;
  EURUSD: number;
  EURUAH: number;
  EUREUR: 1;
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  view = false;
  currencies: Currencies[] = ['UAH', 'USD', 'EUR'];
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
  @Input() amount1: Amount = {
    sum: 1,
    currency: 'USD',
  };
  @Input() amount2: Amount = {
    sum: 1,
    currency: 'UAH',
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
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
          this.changeHandler1();
          this.view = true;
        }
      });
  }

  changeHandler1() {
    this.amount2.sum = +(
      this.amount1.sum *
      this.rates[`${this.amount1.currency}${this.amount2.currency}`]
    ).toFixed(2);
  }

  changeHandler2(num?: string) {
    if (num) {
    }
    this.amount1.sum = +(
      this.amount2.sum *
      this.rates[`${this.amount2.currency}${this.amount1.currency}`]
    ).toFixed(2);
  }

  handleSelect1(value: Currencies): void {
    this.amount1.currency = value;
    this.changeHandler1();
  }

  handleSelect2(value: Currencies): void {
    this.amount2.currency = value;
    this.changeHandler2();
  }
}
