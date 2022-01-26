import {Component, OnInit} from '@angular/core';
import {LienheModule} from '../../../model/lienhe/lienhe.module';
import {AdminComponent} from '../../admin.component';
import {MatDialog} from '@angular/material/dialog';
import {DataServicesService} from '../../../services/data-services.service';
import {FirebaseServiceService} from '../../../services/firebase-service.service';
import {AngularFireDatabase} from '@angular/fire/database';
import {FormLienheComponent} from '../../../formContent/form-lienhe/form-lienhe.component';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-content-lienhe',
  templateUrl: './content-lienhe.component.html',
  styleUrls: ['./content-lienhe.component.scss']
})

export class ContentLienheComponent implements OnInit {
  public dataContentLienhe: any;
  public dataContentLienhe1: LienheModule | any;
  public objectLienhe: any;
  public linkmap: any;
  constructor(public adminComponent: AdminComponent, public matDialog: MatDialog, public dataServicesService: DataServicesService,
              public firebaseService: FirebaseServiceService, public angulardb: AngularFireDatabase, public domSanitizer: DomSanitizer) {
    this.getAllLienhe();
  }

  ngOnInit(): void {
    // console.log(this.getAllLienhe());
    // console.log('--------------------');
  }



  public openDialogContentLienhe(): any{
    this.matDialog.open(FormLienheComponent, {
      height: '500px', width: '800px'
    });
  }
  public getAllLienhe(): any{
    this.firebaseService.readFunctionalityObject('/lienhe').subscribe((res: any) => {
      this.dataContentLienhe = res;
    });
  }

  public updateAllLienhe(dataLienhe: any): any{
    const dialogRef = this.matDialog.open(FormLienheComponent, {
      height: '500px', width: '800px'
    });
    dialogRef.componentInstance.isEdit = true;
    dialogRef.componentInstance.formDataLienhe = dataLienhe;
    dialogRef.afterClosed().subscribe(res => {
      if (res && res.isEdit && res.data){
        this.firebaseService.updateFunctionality(res.data, '/lienhe');
        // console.log(res.data);
      }
    });
  }
}
