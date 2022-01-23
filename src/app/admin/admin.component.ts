import {Component, OnInit} from '@angular/core';
import {DataServicesService} from '../services/data-services.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {ContentAdminComponent} from './content-admin/content-admin.component';
import {FirebaseServiceService} from '../services/firebase-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public checkArrHidden = [
    {name: 'tintuc', value: true},
    {name: 'lienhe', value: true},
    {name: 'gioithieu', value: true},
    {name: 'thungnhuadanpla', value: true},
    {name: 'vachnhuadanpla', value: true},
    {name: 'xoppefoameva', value: true},
    {name: 'xopbongkhi', value: true},
    {name: 'trangchu', value: true},
    {name: 'tieudeMain', value: true},
    {name: 'social', value: true},
  ];

  // tslint:disable-next-line:max-line-length
  constructor(public dataServicesService: DataServicesService, public matDialog: MatDialog, public firebaseService: FirebaseServiceService) {
    this.dataServicesService.checkUrlAdmin = this.dataServicesService.checkUrl();
  }

  items: any;

  ngOnInit(): void {
   // this.firebaseService.getStarted().then(res => {
   //   console.log(res);
   //   this.items = res;
   // });
   //
   // let data=this.firebaseService.getIris();
   // console.log("nhận iris",data)

    console.log(this.firebaseService.getdata().then(res => {
      console.log(res);
    }));
  }

  public activeHiddenBtn(keyHidden: any): any {
    console.log(keyHidden);
    this.checkArrHidden.forEach(item => {
      item.value = true;
    });
    this.checkArrHidden.forEach(item => {
      if (item.name === keyHidden) {
        item.value = false;
      }
    });
  }

  public returnValueCheck(name: any): any {
    let result = true;
    this.checkArrHidden.forEach((item: any) => {
      if (item.name === name) {
        result = item.value;
      }
    });
    return result;
  }

  public show(): any{
    console.log(this.items);
  }
}
