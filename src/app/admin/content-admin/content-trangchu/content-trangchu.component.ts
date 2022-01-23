import { Component, OnInit } from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {DataServicesService} from '../../../services/data-services.service';
import {AdminComponent} from '../../admin.component';
import {MatDialog} from '@angular/material/dialog';
import {FirebaseServiceService} from '../../../services/firebase-service.service';
import {AngularFireDatabase} from '@angular/fire/database';
import {FormTrangchuComponent} from '../../../formContent/form-trangchu/form-trangchu.component';
import {DomSanitizer} from '@angular/platform-browser';

interface DataContentTrangchu{
  content1Img: {link: '', name: ''}[];
  content1New: {link: '', name: ''}[];
  content1Video: '';
  content2Title: {
    imgMain: '';
    title1: '';
    title2: '';
    title3: '';
  };
  content3Title: {
    imgLinkPromotion: '';
    title1: '';
  };
  content4Title: {
    imgLinkPromotion: '';
    title1: '';
  };
  content5Title: {
    imgLinkPromotion: '';
    title1: '';
  };
  content6Title: {
    imgLinkPromotion: '';
    title1: '';
  };
}
@Component({
  selector: 'app-content-trangchu',
  templateUrl: './content-trangchu.component.html',
  styleUrls: ['./content-trangchu.component.scss']
})
export class ContentTrangchuComponent implements OnInit {
  customOptionsMain: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  };
  customOptionsItem: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fas fa-caret-left"></i>', '<i class="fas fa-caret-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      320: {
        items: 2
      },
      400: {
        items: 2
      },
      541: {
        items: 3
      },
      720: {
        items: 4
      },
      940: {
        items: 4
      }
    },
    nav: true
  };
  public linkTintucKhuyenmai: any[] = [];
  public dataContentTrangchu: DataContentTrangchu | undefined;
  public dataContentTrangchu1: any;
  public linkVideo: any;
  public Trangchu: any;
  public objectTrangchu: any;
  public checkTimeout = false;
  constructor(public adminComponent: AdminComponent, public matDialog: MatDialog, public dataServicesService: DataServicesService,
              public firebaseService: FirebaseServiceService, public angulardb: AngularFireDatabase, public domSanitizer: DomSanitizer) {
    this.getAllTrangchu();
  }

  ngOnInit(): void {
  }



  public openDialogContentTrangchu(): any{
    this.matDialog.open(FormTrangchuComponent, {
      height: '600px', width: '800px'
    });
  }
  public getAllTrangchu(): any{
    this.firebaseService.readFunctionalityObject('/trangchu').subscribe((res: any) => {
      this.dataContentTrangchu = res;
      this.linkVideo = this.domSanitizer.bypassSecurityTrustResourceUrl(res.content1Video);
      // tslint:disable-next-line:max-line-length
      this.linkTintucKhuyenmai.push(
        res.content1New[0].name,
        {link: this.domSanitizer.bypassSecurityTrustResourceUrl(res.content1New[1].link), name: res.content1New[1].name},
        {link: this.domSanitizer.bypassSecurityTrustResourceUrl(res.content1New[2].link), name: res.content1New[2].name},
        {link: this.domSanitizer.bypassSecurityTrustResourceUrl(res.content1New[3].link), name: res.content1New[3].name},
      );
    });
  }

  public updateAllTrangchu(dataTrangchu: any): any{
    const dialogRef = this.matDialog.open(FormTrangchuComponent, {
      height: '600px', width: '800px'
    });
    dialogRef.componentInstance.isEdit = true;
    dialogRef.componentInstance.formDataTrangchu = dataTrangchu;
    dialogRef.afterClosed().subscribe(res => {
      if (res && res.isEdit && res.data){
        this.firebaseService.updateFunctionality(res.data, '/trangchu');
        console.log(res.data);
      }
    });
  }
  // tslint:disable-next-line:typedef
  // async getStarted(){
  //   await this.getFunctionalityObject().then((value: Trangchu) => {
  //     this.Trangchu = value;
  //   });
  //   this.objectTrangchu = this.Trangchu;
  //   console.log(this.objectTrangchu);
  // }
  // public getFunctionalityObject(): any{
  //   return new Promise((resolve , reject) => {
  //     this.angulardb.object('/Trangchu').valueChanges().subscribe(value => {
  //       resolve(value);
  //     });
  //   });
  //   // return this.angulardb.object('/Trangchu').valueChanges();
  // }

  public showDataTimeout(data1: any): any{
    console.log(data1);
    return data1;
  }

}
