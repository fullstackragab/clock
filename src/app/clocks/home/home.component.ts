import { Component, OnInit } from '@angular/core';
import { Clock } from '../models/clock';
import { ClockService } from '../services/clock.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  clock!: Clock

  constructor(private clockService: ClockService) { }

  ngOnInit(): void {
    this.clockService.start()
    this.clockService.clockUpdate.subscribe(clock => {
      this.clock = clock
    })
  }

  onIncrementHours(value: number) {
    this.clockService.incrementHours(value)
  }

  onIncrementMinutes(value: number) {
    this.clockService.incrementMinutes(value)
  }

  onIncrementSeconds(value: number) {
    this.clockService.incrementSeconds(value)
  }
}
