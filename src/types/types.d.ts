export {};

declare global {
  interface Country {
    country: string;
    countryCode: string;
    phonePrefix?: string;
  }

  interface DataType {
    label: string;
    value: string;
  }

  interface Card {
    name: string;
    number: string;
    expiration_month: number;
    expiration_year: number;
    security_code: number;
  }
}
