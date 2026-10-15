import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-control-temperature',
  imports: [],
  templateUrl: './control-temperature.component.html',
  styleUrl: './control-temperature.component.css',
})
export class ControlTemperatureComponent {
  // inputs y outputs
  temperature = input.required<number>();
  umbral = input<number>();
  tempOutput = output<number>();
  umbralOutput = output<number>();

  // propiedades
  tempUpdate?: number;

  // eventos y listeners
  onClickIncTemp() {
    this.tempUpdate = this.temperature() + 1;
    this.tempOutput.emit(this.tempUpdate);
  }

  onClickDecTemp() {
    this.tempUpdate = this.temperature() - 1;
    this.tempOutput.emit(this.tempUpdate);
  }

  onInputUmbral(event: Event) {
    let inputElement = event.target as HTMLInputElement;
    try {
      let umbral = Number(inputElement.value);
      console.log('Se establece nuevo: ${umbral)');
      this.umbralOutput.emit(umbral);
    } catch (error) {
      inputElement.value = this.temperature().toString();
    }
  }
}
