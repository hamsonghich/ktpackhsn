import { Component, OnInit } from '@angular/core';
import {DataServicesService} from '../services/data-services.service';
import {FirebaseServiceService} from '../services/firebase-service.service';
interface Social{
  facebook: '';
  messenger: '';
  zalo: '';
  map: '';
}
@Component({
  selector: 'app-fix-content',
  templateUrl: './fix-content.component.html',
  styleUrls: ['./fix-content.component.scss']
})
export class FixContentComponent implements OnInit {
  public dataSocial: Social|any;
  public showListSocial = true;
  constructor(public data: DataServicesService, public firebaseService: FirebaseServiceService) {
    this.firebaseService.readFunctionalityObject('/social').subscribe((res: any) => {
      this.dataSocial = res;
    });
  }

  ngOnInit(): void {
    // tslint:disable-next-line:only-arrow-functions typedef
    // $(document).ready(function(){
    //   // tslint:disable-next-line:typedef
    //   $('.pulse').click(function(){
    //     $(this).toggleClass('active');
    //   });
    //   // tslint:disable-next-line:only-arrow-functions typedef
    //   $('.right').click(function(e){
    //     if (e.target.className === 'pulse') {
    //       $('.list_icon_contact').css({display: 'none', transition: 'all 1s ease-in'});
    //     }
    //     if (e.target.className === 'pulse active'){
    //       $('.list_icon_contact').css({display: 'block', transition: 'all 1s ease-in'});
    //     }
    //   });
    // });
  }

  public showPulse(): any{
     this.showListSocial = !this.showListSocial;
  }
}
