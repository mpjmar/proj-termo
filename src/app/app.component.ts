import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ControlTemperatureComponent } from './components/control-temperature/control-temperature.component';
import { DisplayThermostateComponent } from './components/display-thermostate/display-thermostate.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ControlTemperatureComponent,
    DisplayThermostateComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'proj-termo';

  temperature = 20;
  umbral = 25;

  onCambioTempOutput(temperature: number) {
    this.temperature = temperature;
  }

  onCambioUmbral(umbral: number) {
    this.umbral = umbral;
  }
}
