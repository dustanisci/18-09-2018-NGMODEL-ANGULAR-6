import { Component } from '@angular/core';
import { Form } from './shared/model/form';
import { ErrorMsg } from './shared/model/error-msg';
import { Gender } from './shared/enum/gender';
import { Color } from './shared/enum/color';
import { DateHelperService } from './shared/helper/date-helper/date-helper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public form = new Form();
  public error: ErrorMsg = new ErrorMsg();
  public minDate: string;
  public maxDate: string;
  public actionSave = false;
  public gender = Gender;
  public color = Color;

  constructor() {
    this.minDate = DateHelperService.subtractDateNow(130);
    this.maxDate = DateHelperService.subtractDateNow(18);
  }

  public checkErrors(): void {
    this.error = new ErrorMsg();

    if (
      !this.form.name ||
      this.form.name.length <= 0 ||
      this.form.name.trim().length === 0
    ) {
      this.error.name = 'Nome é um campo obrigatório';
    } else if (this.form.name.length > 15) {
      this.error.name = 'Nome deve ter no máximo 15 caracteres';
    }

    if (!this.form.birth) {
      this.error.birth = 'Data de nascimento é um campo obrigatório';
    } else if (
      !DateHelperService.isDateRange(
        this.minDate,
        this.maxDate,
        this.form.birth
      )
    ) {
      this.error.birth =
        'Data de nascimento é no mínimo 18 anos e no máximo 130 anos';
    }

    if (!this.form.cpf) {
      this.error.cpf = 'CPF é um campo obrigatório';
    } else if (
      this.form.cpf.toString().length < 11 ||
      this.form.cpf.toString().length > 11
    ) {
      this.error.cpf = 'CPF deve ter 11 caracteres';
    }

    if (!this.form.gender) {
      this.error.gender = 'Gênero é um campo obrigatório';
    }

    if (!this.form.color) {
      this.error.color = 'Cor é um campo obrigatório';
    }
  }

  public isValid(): boolean {
    for (const attribute of Object.keys(this.error)) {
      if (this.error[attribute].length) {
        return false;
      }
    }
    return true;
  }

  public send(): void {
    this.checkErrors();

    if (this.isValid()) {
      this.actionSave = true;

      setTimeout(() => {
        this.actionSave = false;
        this.form = new Form();
      }, 1000);
    }
  }
}
