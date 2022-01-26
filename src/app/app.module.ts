
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatOptionModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { ThungnhuaDanplaComponent } from './thungnhua-danpla/thungnhua-danpla.component';
import { MenuHeaderMobileComponent } from './menu-header-mobile/menu-header-mobile.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { TintucComponent } from './tintuc/tintuc.component';
import { LienheComponent } from './lienhe/lienhe.component';
import {A11yModule} from '@angular/cdk/a11y';
import { FooterMainComponent } from './footer-main/footer-main.component';
import { GioithieuComponent } from './gioithieu/gioithieu.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SideBarLeftComponent } from './side-bar-left/side-bar-left.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductDetailsMoreInfoComponent } from './product-details-more-info/product-details-more-info.component';
import {RouterModule} from '@angular/router';
import { MoreProductComponent } from './more-product/more-product.component';
import { ProductTypeComponent } from './product-type/product-type.component';
import { VachnhuaDanplaComponent } from './vachnhua-danpla/vachnhua-danpla.component';
import { XopEvaFoamComponent } from './xop-eva-foam/xop-eva-foam.component';
import { XopbongkhiComponent } from './xopbongkhi/xopbongkhi.component';
import { BannerSalesComponent } from './banner-sales/banner-sales.component';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { FixContentComponent } from './fix-content/fix-content.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {MatBadgeModule} from '@angular/material/badge';
import { CartComponent } from './cart/cart.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormInfoCustomerComponent } from './form-info-customer/form-info-customer.component';
import {MatDialogModule} from '@angular/material/dialog';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {environment} from '../environments/environment';
import { AdminComponent } from './admin/admin.component';
import { ContentAdminComponent } from './admin/content-admin/content-admin.component';
import { FormTintucComponent } from './formContent/form-tintuc/form-tintuc.component';
import { ContentTintucComponent } from './admin/content-admin/content-tintuc/content-tintuc.component';
import {AngularEditorModule} from '@kolkov/angular-editor';
import { FormLienheComponent } from './formContent/form-lienhe/form-lienhe.component';
import {ContentLienheComponent} from './admin/content-admin/content-lienhe/content-lienhe.component';
import { ContentGioithieuComponent } from './admin/content-admin/content-gioithieu/content-gioithieu.component';
import { FormGioithieuComponent } from './formContent/form-gioithieu/form-gioithieu.component';
import { ContentThungnhuadanplaComponent } from './admin/content-admin/content-thungnhuadanpla/content-thungnhuadanpla.component';
import { FormThungnhuadanplaComponent } from './formContent/form-thungnhuadanpla/form-thungnhuadanpla.component';
import { CheckDeleteComponent } from './formContent/check-delete/check-delete.component';
import { ContentVachnhuadanplaComponent } from './admin/content-admin/content-vachnhuadanpla/content-vachnhuadanpla.component';
import {FormVachnhuadanplaComponent} from './formContent/form-vachnhuadanpla/form-vachnhuadanpla.component';
import { ContentXoppefoamevaComponent } from './admin/content-admin/content-xoppefoameva/content-xoppefoameva.component';
import { FormXoppefoamevaComponent } from './formContent/form-xoppefoameva/form-xoppefoameva.component';
import { ContentXopbongkhiComponent } from './admin/content-admin/content-xopbongkhi/content-xopbongkhi.component';
import { FormXopbongkhiComponent } from './formContent/form-xopbongkhi/form-xopbongkhi.component';
import { ContentTrangchuComponent } from './admin/content-admin/content-trangchu/content-trangchu.component';
import { FormTrangchuComponent } from './formContent/form-trangchu/form-trangchu.component';
import { FormLoginComponent } from './formContent/form-login/form-login.component';
import {ContentTieudeMainComponent} from './admin/content-admin/content-tieude-main/content-tieude-main.component';
import { FormHeaderComponent } from './formContent/form-header/form-header.component';
import { ContentSocialComponent } from './admin/content-admin/content-social/content-social.component';
import { FormSocialComponent } from './formContent/form-social/form-social.component';
import { ContentAccountComponent } from './admin/content-admin/content-account/content-account.component';
import { FormAccountComponent } from './formContent/form-account/form-account.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { FormMetaThungnhuaComponent } from './formContent/formMetaTag/form-meta-thungnhua/form-meta-thungnhua.component';
import { FormMetaVachnhuaComponent } from './formContent/formMetaTag/form-meta-vachnhua/form-meta-vachnhua.component';
import { FormMetaXopPeFoamEvaComponent } from './formContent/formMetaTag/form-meta-xop-pe-foam-eva/form-meta-xop-pe-foam-eva.component';
import { FormMetaXopbongkhiComponent } from './formContent/formMetaTag/form-meta-xopbongkhi/form-meta-xopbongkhi.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuHeaderComponent,
    ThungnhuaDanplaComponent,
    MenuHeaderMobileComponent,
    TintucComponent,
    LienheComponent,
    FooterMainComponent,
    GioithieuComponent,
    ProductComponent,
    ProductDetailsComponent,
    NotFoundComponent,
    SideBarLeftComponent,
    ProductDetailsMoreInfoComponent,
    MoreProductComponent,
    ProductTypeComponent,
    VachnhuaDanplaComponent,
    XopEvaFoamComponent,
    XopbongkhiComponent,
    BannerSalesComponent,
    TrangChuComponent,
    SearchResultComponent,
    FixContentComponent,
    CartComponent,
    FormInfoCustomerComponent,
    AdminComponent,
    ContentAdminComponent,
    FormTintucComponent,
    ContentTintucComponent,
    FormLienheComponent,
    ContentLienheComponent,
    ContentGioithieuComponent,
    FormGioithieuComponent,
    ContentThungnhuadanplaComponent,
    FormThungnhuadanplaComponent,
    CheckDeleteComponent,
    ContentVachnhuadanplaComponent,
    FormVachnhuadanplaComponent,
    ContentXoppefoamevaComponent,
    FormXoppefoamevaComponent,
    ContentXopbongkhiComponent,
    FormXopbongkhiComponent,
    ContentTrangchuComponent,
    FormTrangchuComponent,
    FormLoginComponent,
    ContentTieudeMainComponent,
    FormHeaderComponent,
    ContentSocialComponent,
    FormSocialComponent,
    ContentAccountComponent,
    FormAccountComponent,
    FormMetaThungnhuaComponent,
    FormMetaVachnhuaComponent,
    FormMetaXopPeFoamEvaComponent,
    FormMetaXopbongkhiComponent
  ],
    imports: [
        BrowserModule.withServerTransition({appId: 'companyktpack'}),
        AppRoutingModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatButtonModule,
        MatAutocompleteModule,
        MatOptionModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        MatExpansionModule,
        MatListModule,
        CdkAccordionModule,
        A11yModule,
        FormsModule,
        NgxPaginationModule,
        MatSelectModule,
        MatButtonToggleModule,
        NgbModule,
        BrowserAnimationsModule,
        CarouselModule,
        RouterModule,
        HttpClientModule,
        MatBadgeModule,
        MatCheckboxModule,
        MatDialogModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireDatabaseModule,
        AngularEditorModule,
        ScrollingModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
