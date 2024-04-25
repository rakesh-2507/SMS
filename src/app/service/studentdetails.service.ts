import { Injectable } from '@angular/core';
import { details } from './studentdetails';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentdetailsService {

  constructor() { }
  studentdetails: details[] = [
    {
      studentid: 1,
      studentname: "prasad",
      studentaddress: "hyd",
      studentfee: 15000,
      studentcontact: 9848818534,
      studentimage: 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/corporate-user-icon.svg',
      studentedit: false
    },
    {
      studentid: 2,
      studentname: "prasad",
      studentaddress: "hyd",
      studentfee: 15000,
      studentcontact: 9848818534,
      studentimage: 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/corporate-user-icon.svg',
      studentedit: false
    },
    {
      studentid: 3,
      studentname: "prasad",
      studentaddress: "hyd",
      studentfee: 15000,
      studentcontact: 9848818534,
      studentimage: 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/corporate-user-icon.svg',
      studentedit: false
    },
    {
      studentid: 4,
      studentname: "prasad",
      studentaddress: "hyd",
      studentfee: 15000,
      studentcontact: 9848818534,
      studentimage: 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/corporate-user-icon.svg',
      studentedit: false
    },
    {
      studentid: 5,
      studentname: "prasad",
      studentaddress: "hyd",
      studentfee: 15000,
      studentcontact: 9848818534,
      studentimage: 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/corporate-user-icon.svg',
      studentedit: false
    },
    {
      studentid: 6,
      studentname: "prasad",
      studentaddress: "hyd",
      studentfee: 15000,
      studentcontact: 9848818534,
      studentimage: 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/corporate-user-icon.svg',
      studentedit: false
    },
    {
      studentid: 7,
      studentname: "prasad",
      studentaddress: "hyd",
      studentfee: 15000,
      studentcontact: 9848818534,
      studentimage: 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/corporate-user-icon.svg',
      studentedit: false
    },
    {
      studentid: 8,
      studentname: "prasad",
      studentaddress: "hyd",
      studentfee: 15000,
      studentcontact: 9848818534,
      studentimage: 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/corporate-user-icon.svg',
      studentedit: false
    }
  ]
  getdetails() {
    return of(this.studentdetails);
  }
  Updatedetails(det: details) {
    let res = this.studentdetails.findIndex(d=> d.studentid == det.studentid);
    this.studentdetails.splice(res, 1, det);
  }
  adddetails(det:details){
    console.log(det)
    this.studentdetails.push(det)
  }
  deletedetail(det:details){
    let res=this.studentdetails.findIndex(d=>d.studentid==det.studentid);
    this.studentdetails.splice(res,1);
}

}
