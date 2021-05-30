import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateHelperService {

  static checkValueDate(value: number): string {
    return value < 10 ? '0' + value.toString() : value.toString();
  }

  static subtractDateNow(subtract: number): string {
    return this.checkValueDate(new Date().getFullYear() - subtract) + '-' +
      this.checkValueDate(new Date().getMonth() + 1) + '-' +
      this.checkValueDate(new Date().getDate());
  }

  static dateNow(): string {
    return new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();
  }

  static isDateRange(minDate: string, maxDate: string, dateNow: string): boolean {
    return dateNow < minDate || dateNow > maxDate ? false : true;
  }

}
