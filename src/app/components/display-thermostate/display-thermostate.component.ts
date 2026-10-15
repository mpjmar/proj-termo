import { Component, input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-display-thermostate',
  imports: [],
  templateUrl: './display-thermostate.component.html',
  styleUrl: './display-thermostate.component.css',
  host: {
    '[class.warning]': 'alarm',
  },
})
export class DisplayThermostateComponent {
  // hooks
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['temperature']) {
      this.alarm = changes['temperature'].currentValue > this.umbral;
    }
  }

  temperature = input.required<number>();

  umbral = 25;
  alarm = false;
}
