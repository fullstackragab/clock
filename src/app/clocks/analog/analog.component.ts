import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-analog',
  templateUrl: './analog.component.html',
  styleUrls: ['./analog.component.scss'],
})
export class AnalogComponent implements OnInit {
  @Input() hours!: number;
  @Input() minutes!: number;
  @Input() seconds!: number;

  hoursHandStyle: any;
  minutesHandStyle: any;
  secondsHandStyle: any;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges() {
    this.animateClock();
  }

  animateClock() {
    const secondsDegrees = ((this.seconds / 60) * 360) + 90;
    const minutesDegrees = ((this.minutes / 60) * 360) + ((this.seconds/60)*6) + 90;
    const hoursDegrees = ((this.hours / 12) * 360) + ((this.minutes/60)*30) + 90;
    this.hoursHandStyle = {
      transform: `rotate(${hoursDegrees}deg)`
    };

    this.minutesHandStyle = {
      transform: `rotate(${minutesDegrees}deg)`
    };

    this.secondsHandStyle = {
      transform: `rotate(${secondsDegrees}deg)`
    };
  }

  getStyle(n: number) {
    let deg = (360 * (n - 3)) / 12;
    let offset = 100;
    return {
      top: offset - 10 + 80 * Math.sin((Math.PI * deg) / 180) + 'px',
      left: offset - 3 + 80 * Math.cos((Math.PI * deg) / 180) + 'px',
    };
  }
}
