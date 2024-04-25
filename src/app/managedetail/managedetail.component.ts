import { Component } from '@angular/core';
import { StudentdetailsService } from '../service/studentdetails.service';

@Component({
  selector: 'app-managedetail',
  templateUrl: './managedetail.component.html',
  styleUrl: './managedetail.component.css'
})
export class ManagedetailComponent {
  constructor(private service:StudentdetailsService){}
  delete(d:any){
    this.service.deletedetail(d);
    alert("Student Details Deleted");
  }
  toSave(d:any){
    this.service.Updatedetails(d);
    d.studentedit=false;
    alert("Details Update Success");
  }
  toUpdate(d:any){   
  d.studentedit=true;
  }
  
  detail:any;
  ngOnInit(){
    this.service.getdetails().subscribe((res)=>{
      this.detail=res;
    });
  }
}
