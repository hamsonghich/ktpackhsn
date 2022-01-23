import { Component, OnInit } from '@angular/core';
import {DataServicesService} from '../services/data-services.service';
import {FirebaseServiceService} from '../services/firebase-service.service';

interface Gioithieu{
  adviseCompany: '';
  commitCompany: '';
  historyCompany: '';
  imgLink: '';
  nameCompany: '';
  nameIntro: '';
  nameTrust: '';
}
@Component({
  selector: 'app-gioithieu',
  templateUrl: './gioithieu.component.html',
  styleUrls: ['./gioithieu.component.scss']
})
export class GioithieuComponent implements OnInit {
  public dataContentGioithieu: Gioithieu | undefined ;
  constructor(public  dataServicesService: DataServicesService, public firebaseService: FirebaseServiceService) {
    this.dataServicesService.checkUrlAdmin = this.dataServicesService.checkUrl();
    this.firebaseService.readFunctionalityObject('/gioithieu').subscribe((res: any) => {
        this.dataContentGioithieu = res;
    });
  }

  ngOnInit(): void {
    console.log(  this.dataServicesService.infoCompany.phone[0]);
  }

}
