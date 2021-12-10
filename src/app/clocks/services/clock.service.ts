import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Clock } from '../models/clock';

@Injectable({
  providedIn: 'root',
})
export class ClockService {
  private date: Date = new Date();
  private intervalHandle: any;
  private clock: Clock = {
    hours: this.date.getHours(),
    minutes: this.date.getMinutes(),
    seconds: this.date.getSeconds(),
  };
  clockUpdate = new BehaviorSubject<Clock>(this.clock);

  constructor() {}

  setHours(hours: number) {
    this.clock.hours = hours;
    this.clockUpdate.next(this.clock);
  }

  setMinutes(minutes: number) {
    this.clock.minutes = minutes;
    this.clockUpdate.next(this.clock);
  }

  setSeconds(seconds: number) {
    this.clock.seconds = seconds;
    this.clockUpdate.next(this.clock);
  }

  start() {
    if (this.intervalHandle) clearInterval(this.intervalHandle);
    this.intervalHandle = setInterval(() => {
      this.date.setTime(this.date.getTime() + 1 * 1000);
      this.clock.hours = this.date.getHours();
      this.clock.minutes = this.date.getMinutes();
      this.clock.seconds = this.date.getSeconds();
      this.clockUpdate.next(this.clock);
    }, 1000);
  }

  stop() {
    if (this.intervalHandle) clearInterval(this.intervalHandle);
  }

  incrementSeconds(value: number) {
    this.date.setTime(this.date.getTime() + 1 * value * 1000);
    this.clock.hours = this.date.getHours();
    this.clock.minutes = this.date.getMinutes();
    this.clock.seconds = this.date.getSeconds();
    this.clockUpdate.next(this.clock);
  }

  incrementMinutes(value: number) {
    this.date.setTime(this.date.getTime() + 1 * value * 60 * 1000);
    this.clock.hours = this.date.getHours();
    this.clock.minutes = this.date.getMinutes();
    this.clock.seconds = this.date.getSeconds();
    this.clockUpdate.next(this.clock);
  }

  incrementHours(value: number) {
    this.date.setTime(this.date.getTime() + 1 * value * 60 * 60 * 1000);
    this.clock.hours = this.date.getHours();
    this.clock.minutes = this.date.getMinutes();
    this.clock.seconds = this.date.getSeconds();
    this.clockUpdate.next(this.clock);
  }
}
