import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { FormsModule } from '@angular/forms';
import { DecimalPipe, NgIf } from '@angular/common';
import { query } from '@angular/animations';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule, DecimalPipe, NgIf],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  city: string = '';
  temperature: number = 0;
  humidity: number = 0;
  weather: string = '';
  query: boolean = false;
  error: boolean = false;

 constructor(private weatherServices: WeatherService) {
 }

 getWeather() {

  this.weatherServices.getWeather(this.city).subscribe({
    next: (data) => {
      this.query = true
      this.temperature = data.main.temp - 272;
       this.humidity = data.main.humidity;
       this.weather = data.weather[0].main;
    },
    error: (e) => {
    this.error = true;
    this.city = '';

    setTimeout(() => {
      this.error = false;
    }, 3000);
    }
})
 }
}
