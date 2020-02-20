import { Component, OnInit, Input } from '@angular/core';
import { Type } from '../../enum/type';

@Component({
  selector: 'app-msg',
  templateUrl: './msg.component.html',
  styleUrls: ['./msg.component.scss']
})

export class MsgComponent implements OnInit {

  @Input() msg: string;
  @Input() type: Type;

  constructor() { }

  ngOnInit() {
  }

}
