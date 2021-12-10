import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  @Output() incrementHours = new EventEmitter<number>()
  @Output() incrementMinutes = new EventEmitter<number>()
  @Output() incrementSeconds = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

  onHours(value: number) {
    this.incrementHours.emit(value)
  }

  onMinutes(value: number) {
    this.incrementMinutes.emit(value)
  }

  onSeconds(value: number) {
    this.incrementSeconds.emit(value)
  }
}
