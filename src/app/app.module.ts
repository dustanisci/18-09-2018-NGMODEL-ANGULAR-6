import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ValidValidatorComponent } from './valid-validator/valid-validator.component';
import { InvalidValidatorComponent } from './invalid-validator/invalid-validator.component';

@NgModule({
  declarations: [
    AppComponent,
    ValidValidatorComponent,
    InvalidValidatorComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
