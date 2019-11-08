import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { weatherItem } from '../weather-item';
import { Observable, Subscription } from 'rxjs';

import { Store } from '@ngrx/store';

@Component({
  selector: 'app-favorite-weather',
  templateUrl: './favorite-weather.component.html',
  styleUrls: ['./favorite-weather.component.css']
})
export class FavoriteWeatherComponent implements OnInit {
  favoriteWeathers:weatherItem[]=[];

  constructor(private weatherService:WeatherService) {


    if (localStorage.length > 0) {
      this.favoriteWeathers=JSON.parse(localStorage.getItem("favoriteItems"));
      // We have items
    } else {
      this.favoriteWeathers=this.weatherService.weatherItems;

    }
    





   }
  ngOnInit() {
    
  

  }

}
