import { Component, OnInit } from '@angular/core';
import {DataServicesService} from '../services/data-services.service';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {DomSanitizer, Meta, SafeResourceUrl} from '@angular/platform-browser';
import {Tile} from '@angular/material/grid-list/tile-coordinator';
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
  selector: 'app-trang-chu',
  templateUrl: './trang-chu.component.html',
  styleUrls: ['./trang-chu.component.scss']
})
export class TrangChuComponent implements OnInit {
  public dataContentTintuc: any;
  public dataContentTrangchu: DataContentTrangchu | any;
  public linkVideo: any;
  public linkTintucKhuyenmai: any[] = [];
  public dataAllProduct: any;
  public dataThungnhuaDanpla: any[] = [
    {
      addCart: false,
      typeName: {name: '', id: ''},
      id: {name: '', link: ''},
      img: [{ name: '', link: '' }, { name: '', link: '' }, { name: '', link: '' }, { name: '', link: '' }, ],
      address: {name: ''},
      price: {name: ''},
      sellNumber: {number: 0},
      like: false,
      star: {number: 0},
      discount: {number: 0},
      evaluate: {number: 0},
      description: [
        {
          title: '', content: '',
        },
        {
          title: '', content: '',
        },
        {
          title: '', content: '',
        },
        {
          title: '', content: '',
        },
      ]
    },
  ];
  public dataVachnhuaDanpla: any[] = [
    {
      addCart: false,
      typeName: {name: '', id: ''},
      id: {name: '', link: ''},
      img: [{ name: '', link: '' }, { name: '', link: '' }, { name: '', link: '' }, { name: '', link: '' }, ],
      address: {name: ''},
      price: {name: ''},
      sellNumber: {number: 0},
      like: false,
      star: {number: 0},
      discount: {number: 0},
      evaluate: {number: 0},
      description: [
        {
          title: '', content: '',
        },
        {
          title: '', content: '',
        },
        {
          title: '', content: '',
        },
        {
          title: '', content: '',
        },
      ]
    },
  ];
  public dataXoppefoameva: any[] = [
    {
      addCart: false,
      typeName: {name: '', id: ''},
      id: {name: '', link: ''},
      img: [{ name: '', link: '' }, { name: '', link: '' }, { name: '', link: '' }, { name: '', link: '' }, ],
      address: {name: ''},
      price: {name: ''},
      sellNumber: {number: 0},
      like: false,
      star: {number: 0},
      discount: {number: 0},
      evaluate: {number: 0},
      description: [
        {
          title: '', content: '',
        },
        {
          title: '', content: '',
        },
        {
          title: '', content: '',
        },
        {
          title: '', content: '',
        },
      ]
    },
  ];
  public dataXopbongkhi: any[] = [
    {
      addCart: false,
      typeName: {name: '', id: ''},
      id: {name: '', link: ''},
      img: [{ name: '', link: '' }, { name: '', link: '' }, { name: '', link: '' }, { name: '', link: '' }, ],
      address: {name: ''},
      price: {name: ''},
      sellNumber: {number: 0},
      like: false,
      star: {number: 0},
      discount: {number: 0},
      evaluate: {number: 0},
      description: [
        {
          title: '', content: '',
        },
        {
          title: '', content: '',
        },
        {
          title: '', content: '',
        },
        {
          title: '', content: '',
        },
      ]
    },
  ];
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
  constructor(public dataServicesService: DataServicesService, public meta: Meta, public firebaseService: FirebaseServiceService,
              public domSanitizer: DomSanitizer) {
    this.dataServicesService.checkUrlAdmin = this.dataServicesService.checkUrl();
    // console.log(this.dataServicesService.checkUrlAdmin);
    this.firebaseService.readFunctionalityObject('/tintuc').subscribe((res: any) => {
      this.dataContentTintuc = res;
    });
    this.getAllTrangchu();
    this.getAllDataProduct();
    this.getAllDataHeader();
  }
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
  customOptionsItem1: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
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
  ngOnInit(): void {
    this.meta.addTags([
      {name: 'title', content: 'nhựa, nhua, plastic'},
      {name: 'DC.title', content: 'Thung nhua danpla nhua  xop gia re'},
      {name: 'geo.region', content: 'VN-66'},
      {name: 'geo.placename', content: 'hung yen'},
      {name: 'geo.position', content: '13.290403;108.426511'},
      {name: 'ICBM', content: '13.290403, 108.426511'},
      {name: 'keywords', content: 'nhựa, plastic, nhua, xop, xop bong khi, xong eva,'},
      {name: 'description', content: 'thung nhua danpla, vach nhua danpla, xop bong khi, xop eva, xop foam,  THÙNG NHỰA DANPLA , VÁCH NHỰA DANPLA , XỐP EVA , XỐP PE FOAM,  XỐP BÓNG KHÍ'},
      {property: 'og:description', content: 'chuyên sản xuất và cung cấp thùng nhựa danpla, vách nhựa danpla, xốp bóng khí, xốp eva, xốp foam '},
      {property: 'og:url', content: 'https://ktpack.tk/trangchu'},
      {property: 'og:site_name', content: 'ktpack'},
      {name: 'robot', content: 'index, follow'},
      {name: 'revisit-after', content: '1 days'},
      {name: 'google', content: 'ktpack/'},
      {name: 'google-site-verification', content: ''},

      {property: 'og:title', content: 'Thùng nhựa danpla,danpla box'},
      {property: 'article:author', content: 'Thùng nhựa danpla,danpla box'},
      // google++
      {itemprop: 'name', content: 'Thùng nhựa danpla,danpla box'},
      {itemprop: 'description', content: 'thung nhua danpla, vach nhua danpla, xop bong khi, xop eva, xop foam,  THÙNG NHỰA DANPLA , VÁCH NHỰA DANPLA , XỐP EVA , XỐP PE FOAM,  XỐP BÓNG KHÍ\''},
      {itemprop: 'keywords', content: 'plastic'},
      {itemprop: 'image', content: 'plastic'},
      {itemprop: 'image', content: 'https://ktpack.tk/assets/Storage/Upload/banner/Banner_trangchu_1.jpeg'},
    ]);
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
      console.log('bbbb', this.linkTintucKhuyenmai);
    });
  }
  public getAllDataProduct(): any{
    this.firebaseService.getdata().then(res => {
      this.dataAllProduct = res;
      this.dataThungnhuaDanpla = this.dataAllProduct[0];
      this.dataVachnhuaDanpla = this.dataAllProduct[1];
      this.dataXoppefoameva = this.dataAllProduct[2];
      this.dataXopbongkhi = this.dataAllProduct[3];
    });
  }
  public getAllDataHeader(): any{
    this.firebaseService.readFunctionalityObject('/tieudeMain').subscribe((res: any) => {
      this.dataHeader[2].child = res.thungnhuadanpla;
      this.dataHeader[3].child = res.vachnhuadanpla;
      this.dataHeader[4].child = res.xoppefoameva;
      this.dataHeader[5].child = res.xopbongkhi;
      console.log('thungnhua111', this.dataHeader);
    });
  }
}
