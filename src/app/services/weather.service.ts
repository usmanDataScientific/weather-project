import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from '../interfaces/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  API: string = 'https://api.openweathermap.org/data/2.5/weather?appid=';
  key: string = 'b7c0c6fed26c50901f36ad46d60484be'

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<Weather> {
   const URL: string = this.API + this.key + '&q=' + city;
  return this.http.get<Weather>(URL)
  }
}
