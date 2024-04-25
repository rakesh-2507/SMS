import { Component } from '@angular/core';
import { StudentdetailsService } from '../service/studentdetails.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrl: './enroll.component.css'
})
export class EnrollComponent {
  studentid:any;
  studentname:any;
  studentaddress:any;
  studentfee:any;
  studentcontact:any;
  studentimage:any;
  newstudent:any;
  constructor(private service:StudentdetailsService,private router:Router){}
  adddetails(){
    this.newstudent={
      studentid:this.studentid,
      studentname:this.studentname,
      studentaddress:this.studentaddress,
      studentfee:this.studentfee,
      studentcontact:this.studentcontact,
      studentimage:this.studentimage
    }
    this.service.adddetails(this.newstudent);
    Swal.fire({
      title:"Success",
      titleText:"Student Details Enrolled",
      text:"Please check in Student Details",
      icon:"success"
    });
    this.router.navigateByUrl("/admin/studentdetails")
  }
}
