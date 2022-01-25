import {Inject, Injectable, OnInit} from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {any} from 'codelyzer/util/function';
import {objectKeys} from 'codelyzer/util/objectKeys';
import {B} from '@angular/cdk/keycodes';
import {FirebaseServiceService} from './firebase-service.service';

interface ListHeader {
  mother: { name: any, link: any };
  child: { name: any, link: any }[];
}
interface InfoCompany {
  phone: string[];
  email: string[];
  address: string[];
}

interface InfoIntroduce {
  nameCompany: any;
  nameIntro: any;
  nameTrust: any;
  businessLicense: any;
}
interface AddressCompany {
  headquarters: any;
  address: any;
  factory: any;
  warehouse: any;
  phoneNumber: any;
  email: any;
}


@Injectable({
  providedIn: 'root'
})

export class DataServicesService {
  public checkUrlAdmin = false;
  public tickAll = new BehaviorSubject(false);
  public dataInfoCustomer$ = new BehaviorSubject<any>([]);
  public dataAddCartItem$ = new BehaviorSubject<any>([]);
  public dataSales$ = new BehaviorSubject<any>([]);
  public currentNameSubject$ = new BehaviorSubject<any>([]);

  public listHeader: ListHeader[] = [
    {mother: {name: 'TRANG CHỦ', link: '/trang-chu'}, child: []},
    {mother: {name: 'GIỚI THIỆU', link: '/gioi-thieu'}, child: []},
    {
      mother: {name: 'THÙNG NHỰA DANPLA', link: '/thung-nhua-danpla'},
      child: [{name: 'Thùng Danpla cố định, nắp chồng', link: '/productType/thung-nhua-danpla-co-dinh-nap-chong'},
        {
          name: 'Thùng Danpla cố định, nắp chồng, thùng chống tĩnh điện',
          link: '/productType/thung-danpla-co-dinh-nap-chong-chong-tinh-dien'
        },
        {name: 'Thùng Danpla cố định, nắp nhựa chống tĩnh điện', link: '/productType/thung-danpla-co-dinh-nap-nhua-chong-tinh-dien'},
        {name: 'Thùng Danpla cố định, nắp gập', link: '/productType/thung-nhua-danpla-co-dinh-nap-gap'},
        {name: 'Thùng Danpla gập 1', link: '/productType/thung-danpla-gap-1'},
        {name: 'Thùng Danpla gập 2', link: '/productType/thung-danpla-gap-2'},
      ]
    },
    {
      mother: {name: 'VÁCH NHỰA DANPLA', link: '/vach-nhua-danpla'},
      child: [
        {name: 'Vách ngăn Danpla 1', link: '/productType/vach-nhua-danpla-1'},
        {name: 'Vách ngăn Danpla 2', link: '/productType/vach-nhua-danpla-2'},
      ]
    },
    {
      mother: {name: 'XỐP EVA - XỐP PE FOAM', link: '/xop-eva-pe-foam'},
      child: [
        {name: 'Xốp Pe Foam thường', link: '/productType/xop-fe-foam-thuong'},
        {name: 'Xốp Pe Foam Chống tĩnh điện', link: '/productType/xop-pe-foam-chong-tinh-dien'},
        {name: 'Xốp Pe Foam tấm loại thường và chống tĩnh điện', link: '/productType/xop-pe-foam-cuon-loai-thuong-chong-tinh-dien'},
        {name: 'Xốp Pe Foam cuộn  loại thường và chống tĩnh điện', link: '/productType/xop-pe-foam-tam-loai-thuong-chong-tinh-dien'},
      ]
    },
    {
      mother: {name: 'XỐP BÓNG KHÍ', link: '/xop-bong-khi'},
      child: [
        {name: 'Túi bóng khí chống va đập loại thường', link: '/productType/xop-bong-khi-loai-thuong'},
        {name: 'Tấm bóng khí chống va đập loại chống tĩnh điện', link: '/productType/xop-bong-khi-loai-chong-tinh-dien'},
      ]
    },
    {mother: {name: 'TIN TỨC', link: '/tin-tuc'}, child: []},
    {mother: {name: 'LIÊN HỆ', link: '/lien-he'}, child: []},
  ];
  public listProduct = this.listHeader.slice(2, 7);
  public infoCompany: InfoCompany = {
    phone: ['+(84) 393483309', '+(84) 393483309'],
    email: ['ktpack.vn@gmail.com', 'www.ktpack.com'],
    address: ['Nhà máy Nga Nhân Lý Thanh Long, Yên Mĩ, Hưng Yên']
  };
  public infoCompanyList: ListHeader[] = [
    {
      mother: {name: 'Thông tin công ty', link: ''},
      child: [{name: 'Giới thiệu công ty', link: ''},
        {name: 'Cơ hội việc làm', link: ''},
        {name: 'Ý kiến khách hàng', link: ''},
        {name: 'Danh sách đại lí', link: ''},
        {name: 'Đối tác', link: ''}]
    },
    {
      mother: {name: 'Chính sách chung', link: ''},
      child: [{name: 'Chính sách giao nhận', link: ''},
        {name: 'Chính sách bảo hành', link: ''},
        {name: 'Chính sách đổi trả hàng', link: ''},
        {name: '', link: './assets/Storage/Upload/banner/DMCA_logo-grn-btn120w.png'}]
    },
    {
      mother: {name: 'ĐIỀU KHOẢN & QUY ĐỊNH', link: ''},
      child: [{name: 'Quy định bảo mật', link: ''},
        {name: 'Quy định thanh toán', link: ''},
        {name: 'Điều khoản sử dụng', link: ''},
        {name: '', link: './assets/Storage/Upload/banner/da-thong-bao-website-voi-bo-ong-thuong.png'}]
    },
  ];
  public aa = this.infoCompanyList.find(i => i.mother.name === 'Thông tin công ty');

  public addressCompany: AddressCompany = {
    headquarters: 'tp.hưng yên',
    address: 'Nhà máy Nga Nhân Lý Thanh Long, Yên Mĩ, Hưng Yên',
    factory: 'Nhà máy Nga Nhân Lý Thanh Long, Yên Mĩ, Hưng Yên',
    warehouse: 'Nhà máy Nga Nhân Lý Thanh Long, Yên Mĩ, Hưng Yên',
    phoneNumber: '+(84) 393483309 || +(84) 393483309',
    email: 'ktpack.vn@gmail.com',
  };
  public timeWork: string[] = [
    '7h30 - 11h30', '13h30 - 17h30',
  ];
  public phoneNumber: string = this.infoCompany.phone[1];
  public introduceCompany: InfoIntroduce = {
    nameCompany: ' Công ty cổ phần sản xuất KT-PACK',
    nameTrust: 'Đem đến lòng tin và sự hài lòng của Qúy Khách Hàng tới KT-PACK',
    nameIntro: 'Giới thiệu về chúng tôi',
    businessLicense: 'Giấy phép kinh doanh: 0901099386',
  };
  public copyRight = '©Copyright 2021 | CÔNG TY CỔ PHẦN SẢN XUẤT KT-PACK - Giấy phép kinh doanh: 0901099386 Do sở kế hoạch và đầu tư TP Hà Nội cấp ngày 13/04/2021';
  public productSale = [
    {link: './assets/Storage/Upload/banner/banner_sale/product_sale_1.png', name: 'san pham khuyen mai'},
    {link: './assets/Storage/Upload/banner/banner_sale/product_sale_2.png', name: 'san pham khuyen mai'},
    {link: './assets/Storage/Upload/banner/banner_sale/product_sale_1.png', name: 'san pham khuyen mai'},
    {link: './assets/Storage/Upload/banner/banner_sale/product_sale_2.png', name: 'san pham khuyen mai'},
  ];
  public dataSearchHeader: any[] = [];
  public dataSearchHeader1: any[] = [];
  public dataS: any[] = [];
  public dataCart: any[] = [];  // tổng số đơn hàng trong giỏ
  public dataCartUnique: any[] = []; // lọc đơn hàng trùng nhau
  public dataSale: any[] = [];
  public key: any;
  public dataInfoCustomer: any[] = [];
  public counter = 0;  // số lượng đơn hàng
  public tickAll1 = false;

  constructor(public firebaseService: FirebaseServiceService) {

    this.tickAll.subscribe(item => {
      setTimeout(() => {
        this.tickAll1 = item;
      }, 350);
    });
    this.dataAddCartItem$.subscribe(item => {
      this.dataCart.splice(0, this.dataCart.length);
      item.forEach((item1: any) => {
        item1.quantity = 1;    // số lượng sản phẩm (mặc định là 1)
        this.dataCart.push(item1);
        this.counter = this.dataCart.length;
        // console.log('---------ii---------');
        // console.log(this.dataCart);
      });
      this.dataCart.forEach(item2 => {
        this.dataCartUnique.push(item2);
      });
      // console.log('----------data--------');
      // console.log(this.dataCartUnique);
      // this.dataCartUnique = this.unique(this.dataCartUnique);
    });
    this.dataInfoCustomer$.subscribe(item => {
      this.dataInfoCustomer.splice(0, this.dataInfoCustomer.length);
      this.dataInfoCustomer.push(item);
    });
    this.dataSales$.subscribe((itemSale: any) => {
      this.dataSale.splice(0, this.dataSale.length);
      this.dataSale.push(itemSale);
    });
  }

  public getRandomInt(min: number, max: number): any {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.random() * (max - min) + min).toFixed(2);
  }

  public getRandomInt1(min: number, max: number): any {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.random() * (max - min) + min).toFixed(0);
  }

  public removeDauTV(str: string): any {
    str = str.toString().replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
    str = str.toString().replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
    str = str.toString().replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
    str = str.toString().replace(/ì|í|ị|ỉ|ĩ/g, 'i');
    str = str.toString().replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
    str = str.toString().replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
    str = str.toString().replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
    str = str.toString().replace(/đ/g, 'd');
    str = str.toString().replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A');
    str = str.toString().replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E');
    str = str.toString().replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I');
    str = str.toString().replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O');
    str = str.toString().replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U');
    str = str.toString().replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y');
    str = str.toString().replace(/Đ/g, 'D');
    // Combining Diacritical Marks
    str = str.toString().replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ''); // huyền, sắc, hỏi, ngã, nặng
    str = str.toString().replace(/\u02C6|\u0306|\u031B/g, ''); // mũ â (ê), mũ ă, mũ ơ (ư)
    return str.toLowerCase();
  }

  public unique(arr: any[]): any {
    const newArr: any[] = [];
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < arr.length; i++) {
      if (!newArr.includes(arr[i])) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }

  public tang(i: number): any {
    console.log('tang');
    this.dataCartUnique[i].quantity++;
  }

  public giam(i: number): any {
    console.log('giam');
    this.dataCartUnique[i].quantity--;
  }
  public deleteAllItemCart(): any {
  }


  public checkUrl(): boolean {
      if (window.location.href.includes('admin')) {
        return true;
      }
      return false;
  }
}
