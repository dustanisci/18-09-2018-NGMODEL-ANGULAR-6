import { Component } from '@angular/core';
import { Form } from './shared/model/form';
import { ErrorMsg } from './shared/model/error-msg';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public form = new Form();
  public error: ErrorMsg = new ErrorMsg();

  public minDate: string;
  public maxDate: string;

  constructor() {
    this.minDate = this.subtractDateNow(130);
    this.maxDate = this.subtractDateNow(18);
  }

  public send(): void {
    this.validate();
  }

  public checkValueDate(value: number): string {
    return value < 10 ? '0' + value.toString() : value.toString();
  }

  public subtractDateNow(subtract: number) {
    return this.checkValueDate(new Date().getFullYear() - subtract) + '-' +
      this.checkValueDate(new Date().getMonth()) + '-' +
      this.checkValueDate(new Date().getDay());
  }

  public validate(): void {
    this.error = new ErrorMsg();
    if (!this.form.name || this.form.name.length <= 0 || this.form.name.trim().length === 0) {
      this.error.name = 'Nome é obrigatório.'
    }
  }
}
