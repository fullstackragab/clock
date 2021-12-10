import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital',
  templateUrl: './digital.component.html',
  styleUrls: ['./digital.component.scss']
})
export class DigitalComponent implements OnInit {
  @Input() hours!: number
  @Input() minutes!: number
  @Input() seconds!: number

  constructor() { }

  ngOnInit(): void {
  }

  format(num: number) {
    return (num + '').length === 1 ? '0' + num : num + '';
  }
}
