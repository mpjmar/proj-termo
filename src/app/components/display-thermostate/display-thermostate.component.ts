import { Component, input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-display-thermostate',
  imports: [],
  templateUrl: './display-thermostate.component.html',
  styleUrl: './display-thermostate.component.css',
  host: {
    '[class.warning]': 'alarm',
  },
})
export class DisplayThermostateComponent implements OnChanges {
  // hooks
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['temperature'] || changes['umbral']) {
      this.alarm = this.temperature() > this.umbral();
    }
  }

  // inputs
  temperature = input.required<number>();
  umbral = input.required<number>();

  // propiedades
  alarm = false;
}
