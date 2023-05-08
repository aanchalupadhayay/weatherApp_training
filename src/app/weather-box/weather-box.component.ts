import { Component, OnInit } from '@angular/core';
import { WeatherData } from '../models/weather.model';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather-box',
  templateUrl: './weather-box.component.html',
  styleUrls: ['./weather-box.component.scss']
})
export class WeatherBoxComponent implements OnInit {

  
  cityName: string
  weatherData?: WeatherData;

  constructor(private _weatherService: WeatherService) 
  {
    this.cityName = 'Bareilly';
  }

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';

  }

  onSubmit(){
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  private getWeatherData(cityName: string){
    this._weatherService.getWeatherData(cityName)
    .subscribe({
      next: (response) => {
        this.weatherData = response;
      }
    });
  }

}
