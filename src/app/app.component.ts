import { Component } from '@angular/core';
import { Form } from './shared/model/form';
import { ErrorMsg } from './shared/model/error-msg';
import { DateHelper } from './shared/helper/date-helper';

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
    this.minDate = DateHelper.subtractDateNow(130);
    this.maxDate = DateHelper.subtractDateNow(18);
  }

  public send(): void {
    this.validate();
  }
  public validate(): void {
    this.error = new ErrorMsg();
    
    if (!this.form.name || this.form.name.length <= 0 || this.form.name.trim().length === 0) {
      this.error.name = 'Nome é um campo obrigatório';
    } else if(this.form.name.length > 15){
      this.error.name = 'Nome deve ter no máximo 15 caracteres';
    }

    if(!this.form.birth){
      this.error.birth = 'Data de nascimento é um campo obrigatório';
    }

    if (!this.form.cpf) {
      this.error.cpf = 'CPF é um campo obrigatório';
    } else if(this.form.cpf.toString().length > 11){
      this.error.cpf = 'CPF deve ter no máximo 11 caracteres'
    }

    if(!this.form.gender){
      this.error.gender = 'Gênero é um campo obrigatório';
    }

    if(!this.form.color){
      this.error.color = 'Cor é um campo obrigatório';
    }

  }
}
