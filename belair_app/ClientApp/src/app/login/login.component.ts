import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterModule, Routes, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './login.component.html',
})
export class LoginComponent {

  constructor(private http: HttpClient, private router : Router, 
    @Inject('BASE_URL') private baseUrl: string) 
    {

    }

  public void LoginUser() {

     console.log('logging in user');
 
     this.http.get<boolean>(this.baseUrl + 'api/Login/LoginUser').subscribe(result => {
      
       console.log(result)

       if (result == true) {
          this.router.navigate(['/']);
       }     
       else {
        this.router.navigate(['/unauthorized']);
       }
       
    }, error => console.error(error));    
  };
}


