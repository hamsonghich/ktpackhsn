import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import {ThungnhuaDanplaComponent} from './thungnhua-danpla/thungnhua-danpla.component';
import {LienheComponent} from './lienhe/lienhe.component';
import {GioithieuComponent} from './gioithieu/gioithieu.component';
import {ProductComponent} from './product/product.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {ProductTypeComponent} from './product-type/product-type.component';
import {VachnhuaDanplaComponent} from './vachnhua-danpla/vachnhua-danpla.component';
import {XopEvaFoamComponent} from './xop-eva-foam/xop-eva-foam.component';
import {XopbongkhiComponent} from './xopbongkhi/xopbongkhi.component';
import {TrangChuComponent} from './trang-chu/trang-chu.component';
import {TintucComponent} from './tintuc/tintuc.component';
import {SearchResultComponent} from './search-result/search-result.component';
import {HeaderComponent} from './header/header.component';
import {DataJsonServerService} from './services/data-json-server.service';
import {CartComponent} from './cart/cart.component';
import {AuthGuard} from './auth.guard';

const routes: Routes = [
  {path: 'admin',  canActivate: [AuthGuard], component: AdminComponent},
  {path: 'trang-chu', component: TrangChuComponent},
  {path: 'thung-nhua-danpla', component: ThungnhuaDanplaComponent},
  {path: 'vach-nhua-danpla', component: VachnhuaDanplaComponent},
  {path: 'xop-eva-pe-foam', component: XopEvaFoamComponent},
  {path: 'xop-bong-khi', component: XopbongkhiComponent},
  {path: 'tin-tuc', component: TintucComponent},
  {path: 'lien-he', component: LienheComponent},
  {path: 'gioi-thieu', component: GioithieuComponent},
  {path: 'product', component: ProductComponent},
  {path: 'productDetails/:id', component: ProductDetailsComponent},
  {path: 'productType/:id', component: ProductTypeComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'search-result', component: SearchResultComponent},
  {path: 'cart', component: CartComponent},
  {path: '', component: TrangChuComponent},
  {path: '**', redirectTo: '/trang-chu', pathMatch: 'full' },
  // {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
