export class DateHelper {

  static checkValueDate(value: number): string {
    return value < 10 ? '0' + value.toString() : value.toString();
  }

  static subtractDateNow(subtract: number): string {
    return this.checkValueDate(new Date().getFullYear() - subtract) + '-' +
      this.checkValueDate(new Date().getMonth()) + '-' +
      this.checkValueDate(new Date().getDay());
  }

  static dateNow(): string {
    return new Date().getFullYear() + '-' + new Date().getMonth() + '-' + new Date().getDay();
  }

  // static validate(date: Date): boolean {

  // }

}
