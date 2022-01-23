import { Component, OnInit } from '@angular/core';
import {AdminComponent} from '../../admin.component';
import {MatDialog} from '@angular/material/dialog';
import {DataServicesService} from '../../../services/data-services.service';
import {FirebaseServiceService} from '../../../services/firebase-service.service';
import {AngularFireDatabase} from '@angular/fire/database';
import {FormGioithieuComponent} from '../../../formContent/form-gioithieu/form-gioithieu.component';
import {GioithieuModule} from '../../../model/gioithieu/gioithieu.module';

@Component({
  selector: 'app-content-gioithieu',
  templateUrl: './content-gioithieu.component.html',
  styleUrls: ['./content-gioithieu.component.scss']
})
export class ContentGioithieuComponent implements OnInit {

  public dataContentGioithieu: any;
  public dataContentGioithieu1: GioithieuModule | any;
  constructor(public adminComponent: AdminComponent, public matDialog: MatDialog, public dataServicesService: DataServicesService,
              public firebaseService: FirebaseServiceService, public angulardb: AngularFireDatabase) {
    this.getAllGioithieu();
  }

  ngOnInit(): void {
    // console.log(this.getAllGioithieu());
    // console.log('--------------------');
  }



  public openDialogContentGioithieu(): any{
    this.matDialog.open(FormGioithieuComponent, {
      height: '500px', width: '800px'
    });
  }
  public getAllGioithieu(): any{
    this.firebaseService.readFunctionalityObject('/gioithieu').subscribe((res: any) => {
      this.dataContentGioithieu = res;
    });
  }

  public updateAllGioithieu(dataGioithieu: any): any{
    const dialogRef = this.matDialog.open(FormGioithieuComponent, {
      height: '500px', width: '800px'
    });
    dialogRef.componentInstance.isEdit = true;
    dialogRef.componentInstance.formDataGioithieu = dataGioithieu;
    dialogRef.afterClosed().subscribe(res => {
      if (res && res.isEdit && res.data){
        this.firebaseService.updateFunctionality(res.data, '/gioithieu');
        console.log(res.data);
      }
    });
  }
  // tslint:disable-next-line:typedef
  // async getStarted(){
  //   await this.getFunctionalityObject().then((value: Gioithieu) => {
  //     this.Gioithieu = value;
  //   });
  //   this.objectGioithieu = this.Gioithieu;
  //   console.log(this.objectGioithieu);
  // }
  // public getFunctionalityObject(): any{
  //   return new Promise((resolve , reject) => {
  //     this.angulardb.object('/Gioithieu').valueChanges().subscribe(value => {
  //       resolve(value);
  //     });
  //   });
  //   // return this.angulardb.object('/Gioithieu').valueChanges();
  // }

  public showDataTimeout(data1: any): any{
    console.log(data1);
    return data1;
  }

}

