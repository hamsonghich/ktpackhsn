import {Component, OnInit, ViewChild} from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import {DataServicesService} from '../services/data-services.service';
import {FirebaseServiceService} from '../services/firebase-service.service';

@Component({
  selector: 'app-side-bar-left',
  templateUrl: './side-bar-left.component.html',
  styleUrls: ['./side-bar-left.component.scss']
})
export class SideBarLeftComponent implements OnInit {
  panelOpenState = false;
  @ViewChild(MatAccordion) accordion: MatAccordion | any;
  public dataHeader = [
    {mother: {name: 'TRANG CHỦ', link: '/trang-chu'}, child: [{name: '', link: ''}, ]},
    {mother: {name: 'GIỚI THIỆU', link: '/gioi-thieu'}, child: [{name: '', link: ''}, ]},
    {
      mother: {name: 'THÙNG NHỰA DANPLA', link: '/thung-nhua-danpla'},
      child: [],
    },
    {
      mother: {name: 'VÁCH NHỰA DANPLA', link: '/vach-nhua-danpla'},
      child: [],
    },
    {
      mother: {name: 'XỐP EVA - XỐP PE FOAM', link: '/xop-eva-pe-foam'},
      child: [],
    },
    {
      mother: {name: 'XỐP BÓNG KHÍ', link: '/xop-bong-khi'},
      child: [],
    },
    {mother: {name: 'TIN TỨC', link: '/tin-tuc'}, child: [{name: '', link: ''}, ]},
    {mother: {name: 'LIÊN HỆ', link: '/lien-he'}, child: [{name: '', link: ''}, ]},
  ];
  constructor(public  menuHeader: DataServicesService, public firebaseService: FirebaseServiceService) {
    this.getAllDataHeader();
  }

  ngOnInit(): void {
  }
  public exit(): any {
  }
  public getAllDataHeader(): any{
    this.firebaseService.readFunctionalityObject('/tieudeMain').subscribe((res: any) => {
      this.dataHeader[2].child = res.thungnhuadanpla;
      this.dataHeader[3].child = res.vachnhuadanpla;
      this.dataHeader[4].child = res.xoppefoameva;
      this.dataHeader[5].child = res.xopbongkhi;
      // console.log('thungnhua111', this.dataHeader);
    });
  }
}
