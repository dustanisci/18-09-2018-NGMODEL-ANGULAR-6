import { Component, Injectable } from '@angular/core';
import { NgbDatepickerI18n, NgbDateStruct, NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';

const I18N_VALUES = {
  'pt': {
    weekdays: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
    months: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  }
};

@Injectable()
export class I18n {
  language = 'pt';
}

@Injectable()
export class CustomDatepickerI18n extends NgbDatepickerI18n {

  constructor(private _i18n: I18n) {
    super();
  }

  getWeekdayShortName(weekday: number): string {
    return I18N_VALUES[this._i18n.language].weekdays[weekday - 1];
  }

  getMonthShortName(month: number): string {
    return I18N_VALUES[this._i18n.language].months[month - 1];
  }

  getMonthFullName(month: number): string {
    return this.getMonthShortName(month);
  }

  getDayAriaLabel(date: NgbDateStruct): string {
    return `${date.day}-${date.month}-${date.year}`;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [I18n, { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n }],
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  selectedDate: NgbDateStruct
  minDate: NgbDateStruct = { day: 1, month: 1, year: (new Date().getFullYear() - 130) };
  maxDate: NgbDateStruct = { day: 1, month: 1, year: (new Date().getFullYear() - 10) };
  dateFormat: String;

  constructor() { }

  onDateSelect(event) {
    let day: String = String(event.day);
    let month: String = String(event.month);

    if (day.length == 1) {
      day = "0" + day;
    }

    if (month.length == 1) {
      month = "0" + month;
    }

    this.dateFormat = day + "/" + month + "/" + event.year;
  }




}