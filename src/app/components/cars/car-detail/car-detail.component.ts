import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { Customer } from 'src/app/models/customer';
import { CarService } from 'src/app/services/car.service';
import { CustomerService } from 'src/app/services/customer.service';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  // car:Car;
  cars: CarDetail[] = [];
  carDto:CarDetail
  Images:string[]=[]

  customers:Customer[]=[];
  
  imageBasePath = environment.baseUrl;
  defaultImg="/images/default.jpg"

  dataLoaded=false;
  ısRentaled=false;
  constructor(private carService:CarService,private route:ActivatedRoute,private toastrService:ToastrService,private customerService:CustomerService) { }


  ngOnInit(): void {

    this.route.params.subscribe(params => {
      if(params["carId"]){
        this.getCarDetail(params["carId"])
        //this.getCustomers();
      }
    })
  
    
  }
  
  getCarDetail(carId:number){
    this.carService.getCarDetail(carId).subscribe(response => {
      this.cars = response.data;
      // this.car = response.data[0];
      this.carDto=response.data[0];
      this.dataLoaded=true;
      this.Images=this.carDto.images

    })
  }

  getCustomers() {
    this.customerService.getCustomers().subscribe(response=>{
      this.customers=response.data
      this.dataLoaded=true;
    }) 
  }

  // async checkFindexPoint(customerId:number,carId:number):Promise<Boolean>{
  //   let customer = (await this.customerService.getCustomerById(customerId).toPromise()).data
  //   let car = (await this.carService.getCarDetail(carId).toPromise()).data
  //   if(customer.customerFindexScore >= car.carFindexScore){
  //     return true;
  //   }
  //   return false;
  // }

//   addToCart(car:Car){
//     if(this.ısRentaled==false){
//       this.toastrService.success(car.carName,"Kiralandı")
//       this.ısRentaled=true;

//     }else{
//       this.toastrService.error(car.carName,"Bu araba zaten kiralanmış")

//     }
//  }

 
}





 
