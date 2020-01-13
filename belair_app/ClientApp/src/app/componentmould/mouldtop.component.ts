import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './mouldtop.component.html'
})

export class MouldTopComponent {


  public forecasts: WeatherForecast[];
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<WeatherForecast[]>(baseUrl + 'api/Login/WeatherForecasts').subscribe(result => {

      console.log(result)
      this.forecasts = result;
    }, error => console.error(error));
  }  
   

}



interface WeatherForecast {
  dateFormatted: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}


