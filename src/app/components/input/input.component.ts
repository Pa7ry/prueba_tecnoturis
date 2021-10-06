import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  constructor() { }

  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() inputType: string = '';

  ngOnInit(): void {

    console.log(this.inputType);
  }

}
