import { Component, OnInit, Input, ContentChild, AfterContentInit, Output, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-validator',
  templateUrl: './validator.component.html',
  styleUrls: ['./validator.component.css']
})
export class ValidatorComponent implements OnInit, AfterContentInit {

  @Input() input: any;
  @ContentChild(NgModel) model: NgModel;
  @Input() label: string;
  @Input() id: string;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.input = this.model;
  }
}