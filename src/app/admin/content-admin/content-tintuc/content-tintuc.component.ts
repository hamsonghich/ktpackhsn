import { Component, OnInit } from '@angular/core';
import {TintucModule} from '../../../model/tintuc/tintuc.module';
import {AdminComponent} from '../../admin.component';
import {MatDialog} from '@angular/material/dialog';
import {FirebaseServiceService} from '../../../services/firebase-service.service';
import {AngularFireDatabase} from '@angular/fire/database';
import {FormTintucComponent} from '../../../formContent/form-tintuc/form-tintuc.component';
import {AngularEditorConfig} from '@kolkov/angular-editor';
import {DataServicesService} from '../../../services/data-services.service';

@Component({
  selector: 'app-content-tintuc',
  templateUrl: './content-tintuc.component.html',
  styleUrls: ['./content-tintuc.component.scss']
})
export class ContentTintucComponent implements OnInit {
  public dataContentTintuc: any;
  public dataContentTintuc1: TintucModule | any;
  public tintuc: TintucModule |any;
  public objectTintuc: any;
  public checkTimeout = false;
  constructor(public adminComponent: AdminComponent, public matDialog: MatDialog, public dataServicesService: DataServicesService,
              public firebaseService: FirebaseServiceService, public angulardb: AngularFireDatabase) {
    this.getAllTintuc();
  }

  ngOnInit(): void {
  }



  public openDialogContentTintuc(): any{
    this.matDialog.open(FormTintucComponent, {
      height: '500px', width: '800px'
    });
  }
  public getAllTintuc(): any{
    this.firebaseService.readFunctionalityObject('/tintuc').subscribe((res: any) => {
      this.dataContentTintuc = res;
    });
  }

  public updateAllTintuc(dataTintuc: any): any{
    const dialogRef = this.matDialog.open(FormTintucComponent, {
      height: '500px', width: '800px'
    });
    dialogRef.componentInstance.isEdit = true;
    dialogRef.componentInstance.formDataTintuc = dataTintuc;
    dialogRef.afterClosed().subscribe(res => {
      if (res && res.isEdit && res.data){
        this.firebaseService.updateFunctionality(res.data, '/tintuc');
        // console.log(res.data);
      }
    });
  }
  // tslint:disable-next-line:typedef
  // async getStarted(){
  //   await this.getFunctionalityObject().then((value: Tintuc) => {
  //     this.tintuc = value;
  //   });
  //   this.objectTintuc = this.tintuc;
  //   console.log(this.objectTintuc);
  // }
  // public getFunctionalityObject(): any{
  //   return new Promise((resolve , reject) => {
  //     this.angulardb.object('/tintuc').valueChanges().subscribe(value => {
  //       resolve(value);
  //     });
  //   });
  //   // return this.angulardb.object('/tintuc').valueChanges();
  // }

  public showDataTimeout(data1: any): any{
    // console.log(data1);
    return data1;
  }

}
