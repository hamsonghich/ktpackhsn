import { Component, OnInit } from '@angular/core';
import {DataServicesService} from '../services/data-services.service';
import {FirebaseServiceService} from '../services/firebase-service.service';

@Component({
  selector: 'app-tintuc',
  templateUrl: './tintuc.component.html',
  styleUrls: ['./tintuc.component.scss']
})
export class TintucComponent implements OnInit {
  public dataContentTintuc: any;
  constructor(public dataServicesService: DataServicesService,  public firebaseService: FirebaseServiceService) {
    this.dataServicesService.checkUrlAdmin = this.dataServicesService.checkUrl();
    this.firebaseService.readFunctionalityObject('/tintuc').subscribe((res: any) => {
      this.dataContentTintuc = res;
    });
  }

  ngOnInit(): void {
  }

}
