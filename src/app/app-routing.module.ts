import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brands/brand-add/brand-add.component';
import { CarAddComponent } from './components/cars/car-add/car-add.component';
import { CarDetailComponent } from './components/cars/car-detail/car-detail.component';
import { CarComponent } from './components/cars/car/car.component';
import { CarUpdateComponent } from './components/cars/car-update/car-update.component';
import { ColorAddComponent } from './components/colors/color-add/color-add.component';
import { RentalDetailComponent } from './components/rentals/rental-detail/rental-detail.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './guards/login.guard';
import { BrandDetailComponent } from './components/brands/brand-detail/brand-detail.component';
import { MyPageComponent } from './components/my-page/my-page.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:CarComponent},
  {path:"cars",component:CarComponent},
  {path:"cars/brand/:brandId",component:CarComponent},
  {path:"cars/color/:colorId",component:CarComponent},
  {path:"cars/cardetail/:carId",component:CarDetailComponent},
  {path:"cardetail/rentaldetail",component:RentalDetailComponent, canActivate:[LoginGuard]},
  {path:"cars/add",component:CarAddComponent, canActivate:[LoginGuard]},
  {path:"brands/add",component:BrandAddComponent , canActivate:[LoginGuard]},
  {path:"colors/add",component:ColorAddComponent , canActivate:[LoginGuard]},
  {path:"cars/update/:carId",component:CarUpdateComponent , canActivate:[LoginGuard]},
  {path:"login",component:LoginComponent},
  {path:"brands",component:BrandDetailComponent},
  {path:"mypage",component:MyPageComponent},
  {path:"contact",component:ContactComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
