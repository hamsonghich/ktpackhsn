import { Component, OnInit } from '@angular/core';
import {DataServicesService} from '../services/data-services.service';
import {FirebaseServiceService} from '../services/firebase-service.service';
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
  selector: 'app-banner-sales',
  templateUrl: './banner-sales.component.html',
  styleUrls: ['./banner-sales.component.scss']
})
export class BannerSalesComponent implements OnInit {
  public imgKhuyenMai: any[] = [];
  // public allInfoTrangchu: DataContentTrangchu| any;
  private allInfoTrangchu: any;
  constructor(public dataServicesService: DataServicesService, public firebaseService: FirebaseServiceService) {
    this.getTrangchu();
  }

  ngOnInit(): void {
  }
  public getTrangchu(): any{
    this.firebaseService.readFunctionalityObject('/trangchu').subscribe((res: any) => {
      this.allInfoTrangchu = res;
      // console.log(res.content1Title.imgLinkPromotion);
      this.imgKhuyenMai.push(res.content3Title.imgLinkPromotion);
      this.imgKhuyenMai.push(res.content4Title.imgLinkPromotion);
      this.imgKhuyenMai.push(res.content5Title.imgLinkPromotion);
    });
  }

}
