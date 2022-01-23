import {Injectable} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {BehaviorSubject, combineLatest, forkJoin} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {
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
  public typeNumberProduct = 4;
  public temp: unknown = [];
  public temp1: any[] = [];
  public data$ = new BehaviorSubject<any>('');
  private dataIris = null;
  public dataProductDetailsList: any;
  public dataSearchHeader: any[] = [];

  constructor(public angulardb: AngularFireDatabase) {
    // combineLatest(
    //   this.readFunctionalityList('/thungnhuadanpla'),
    //   this.readFunctionalityList('/vachnhuadanpla'),
    // ).subscribe((res) => {
    //   this.FLAG = true;
    //   console.log(res);
    //   this.data$.next(res);
    // });
    // console.log(this.data$.getValue());
    // console.log(this.getdata().then(res => {
    //   console.log(res);
    //   this.temp = res;
    // }));
    // console.log(this.getStarted());
  }

  private items: BehaviorSubject<any> = new BehaviorSubject<any>('');

  public createFunctionalityList(Payload: any, link: string): void {
    this.angulardb.list(link).push(Payload).then(res => {
      Payload.idProduct = res.key;
      this.angulardb.object(`${link}/` + `${Payload.idProduct}`).update(Payload);
    });
  }

  public createFunctionalityObject(Payload: any, link: string): void {
    this.angulardb.object(link).update(Payload);
  }

  public readFunctionalityList(link: string): any {
    return this.angulardb.list(link).valueChanges();
  }

  // tslint:disable-next-line:typedef
  public readFunctionalityObject(link: string): any {
    return this.angulardb.object(link).valueChanges();
  }

  public updateFunctionality(rowdata: any, link: string): any {
    // rowdata.id = id;
    this.angulardb.object(link).update(rowdata).then((r: any) => r);
  }

  public updateFunctionalityList(rowdata: any, link: string, id: string): any {
    // rowdata.id = id;
    this.angulardb.object(link + `${id}`).update(rowdata).then((r: any) => r);
  }

  public deleteFunctionality(rowdata: any, link: string): any {
    this.angulardb.object(`${link}/` + `${rowdata.idProduct}`).remove().then((r: any) => r);
  }

  public convertObjToObjectArr(obj: any): any {
    for (const key1 in obj) {
      if (obj.hasOwnProperty(key1)) {
        obj[key1] = obj[key1].toString().split(';');
      }
    }
    return obj;
  }


  public async getdata() {
    const promise1 = new Promise((resolve, reject) => {
      combineLatest(
        this.readFunctionalityList('/thungnhuadanpla'),
        this.readFunctionalityList('/vachnhuadanpla'),
        this.readFunctionalityList('/xoppefoameva'),
        this.readFunctionalityList('/xopbongkhi'),
      ).subscribe(value => {
        // console.log(value);
        resolve(value);
      });
    });
    return await promise1;
  }

  // setItems(value: any): any {
  //   this.items.next(value);
  // }
  // getItems(): Observable <any> {
  //   return this.items.asObservable();
  // }
  public getAllDataHeader(): any {
    this.readFunctionalityObject('/tieudeMain').subscribe((res: any) => {
      this.dataHeader[2].child = res.thungnhuadanpla;
      this.dataHeader[3].child = res.vachnhuadanpla;
      this.dataHeader[4].child = res.xoppefoameva;
      this.dataHeader[5].child = res.xopbongkhi;
      // console.log('thungnhua111', this.dataHeader);
    });
  }

  public listKeywordSearch(): any {
    this.getAllDataHeader();
    this.getdata().then(res => {
      this.dataProductDetailsList = res;
      console.log('res', res);
      // this.dataProductDetailsList.forEach((item: { id: any; }[]) => {
      //    item.forEach((item1: { id: any; }) => {
      //      const obj = JSON.parse(JSON.stringify(item1.id));
      //      obj.link = '/productDetails/' + obj.link.toString();
      //      this.dataSearchHeader.push(obj);
      //    });
      //    this.dataHeader.forEach((item2) => {
      //      const obj = JSON.parse(JSON.stringify(item2.mother));
      //      this.dataSearchHeader.push(obj);
      //    });
      //    this.dataHeader.forEach((itemMother) => {
      //      itemMother.child.forEach((itemChild) => {
      //        const obj = JSON.parse(JSON.stringify(itemChild));
      //        this.dataSearchHeader.push(obj);
      //      });
      //    });
      //  });
      this.dataHeader.forEach(item => {
        const obj  = JSON.parse(JSON.stringify(item.mother));
        this.dataSearchHeader.push(obj);
      });
      this.dataProductDetailsList.forEach((item: { id: any; }[]) => {
        item.forEach((item1: { id: any; }) => {
          const obj = JSON.parse(JSON.stringify(item1.id));
          obj.link = '/productDetails/' + obj.link.toString();
          this.dataSearchHeader.push(obj);
        });
      });
    });
    console.log('res1', this.dataSearchHeader);
  }

}


