import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterModule, Routes, Router} from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './technicianlogin.component.html',
})
export class TechnicianLoginComponent {

  constructor(private http: HttpClient, private router : Router, 
    @Inject('BASE_URL') private baseUrl: string) 
    {
      
    }

  public void LoginTechnician() {

     console.log('logging in user');
 
     this.http.get<boolean>(this.baseUrl + 'api/Login/LoginTechnician').subscribe(result => {
      
       console.log(result)

       if (result == true) {
          this.router.navigate(['/']);
       }      
       
    }, error => console.error(error));    
  };

}


