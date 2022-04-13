export type Num = 0 | 1;

export type Currency = 'USD' | 'UAH' | 'EUR';

export interface Amount {
  value: [number, number];
  currency: [Currency, Currency];
}

export type Rate =
  | 'USDUSD'
  | 'USDUAH'
  | 'USDEUR'
  | 'UAHUSD'
  | 'UAHEUR'
  | 'UAHUAH'
  | 'EURUSD'
  | 'EURUAH'
  | 'EUREUR';

export type test = Rates;

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
