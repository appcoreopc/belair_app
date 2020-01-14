import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './unauthorized.component.html'
})

export class UnauthorizedComponent {
 
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {

  }     
}