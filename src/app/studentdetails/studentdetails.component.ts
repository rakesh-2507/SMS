import { Component } from '@angular/core';
import { StudentdetailsService } from '../service/studentdetails.service';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrl: './studentdetails.component.css'
})
export class StudentdetailsComponent {
  constructor(private service:StudentdetailsService){}
  details:any;
  ngOnInit(){
    this.service.getdetails().subscribe((res)=>{
      this.details=res;
      console.log(this.details);
    })
  }
  
}
