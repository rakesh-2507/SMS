import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrl: './userdashboard.component.css'
})
export class UserdashboardComponent {
  username:any;
  user:any;
  constructor(private route:Router){}
    ngOnInit(){
      if(localStorage.getItem('user')!=null){
        this.user=JSON.parse(localStorage.getItem('user')||'{}');
        this.username=this.user.username;
      }
      else{
        this.route.navigateByUrl('/');
      }

    }
  }
