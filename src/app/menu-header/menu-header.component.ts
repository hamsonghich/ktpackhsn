import {Component, OnInit, ViewChild} from '@angular/core';
import {DataServicesService} from '../services/data-services.service';
import {FirebaseServiceService} from '../services/firebase-service.service';
interface ListHeader{
  mother: {name: any, link: any};
  child: {name: any, link: any}[];
}
interface LinkItemListHeader{
  linksItem: string;
}
interface ListType{
  mother: { name: any, link: any };
  child: { name: any, link: any }[];
}
@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.scss']
})
export class MenuHeaderComponent implements OnInit {
  public listType: ListType[] | undefined;
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
  public linkItemListHeader: LinkItemListHeader[] = [
    {linksItem: '/templateUI'},
  ];
  constructor(public menuHeader: DataServicesService, public firebaseService: FirebaseServiceService) {
    this.getAllDataHeader();
  }
  ngOnInit(): void {
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
  public get(): any{
    return 1;
  }
  public exit(): any{
  }

}
