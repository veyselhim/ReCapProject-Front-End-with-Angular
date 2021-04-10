import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';


import{ToastrModule} from 'ngx-toastr';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/cars/car/car.component';
import { BrandComponent } from './components/brands/brand/brand.component';
import { ColorComponent } from './components/colors/color/color.component';
import { RentalComponent } from './components/rentals/rental/rental.component';
import { NaviComponent } from './components/navi/navi.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CarDetailComponent } from './components/cars/car-detail/car-detail.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { RentalDetailComponent } from './components/rentals/rental-detail/rental-detail.component';
import { CarAddComponent } from './components/cars/car-add/car-add.component';
import { BrandAddComponent } from './components/brands/brand-add/brand-add.component';
import { ColorAddComponent } from './components/colors/color-add/color-add.component';
import { CarUpdateComponent } from './components/cars/car-update/car-update.component';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { FooterComponent } from './components/footer/footer.component';
import { BrandDetailComponent } from './components/brands/brand-detail/brand-detail.component';
import { MyPageComponent } from './components/my-page/my-page.component';
import { ContactComponent } from './components/contact/contact.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    BrandComponent,
    ColorComponent,
    RentalComponent,
    NaviComponent,
    CustomerComponent,
    CarDetailComponent,
    VatAddedPipe,
    FilterPipePipe,
    RentalDetailComponent,
    CarAddComponent,
    BrandAddComponent,
    ColorAddComponent,
    CarUpdateComponent,
    LoginComponent,
    FooterComponent,
    BrandDetailComponent,
    MyPageComponent,
    ContactComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
