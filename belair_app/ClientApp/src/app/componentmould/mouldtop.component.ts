import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './mouldtop.component.html'
})

export class MouldTopComponent {

  public forecasts: boolean;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {

    // http.get<boolean>(baseUrl + 'api/Login/LoginUser').subscribe(result => {
    //   console.log(result)
    //   this.forecasts = result;
    // }, error => console.error(error));
  }     
}

