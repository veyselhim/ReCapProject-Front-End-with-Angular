import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { CarService } from 'src/app/services/car.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  car:Car;
  cars: CarDetail[] = [];
  carDto:CarDetail
  Images:string[]=[]

  imageBasePath = environment.baseUrl;
  defaultImg="/images/default.jpg"

  dataLoaded=false;
  ısRentaled=false;
  constructor(private carService:CarService,private route:ActivatedRoute,private toastrService:ToastrService) { }


  ngOnInit(): void {

    this.route.params.subscribe(params => {
      if(params["carId"]){
        this.getCarDetail(params["carId"])
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

//   addToCart(car:Car){
//     if(this.ısRentaled==false){
//       this.toastrService.success(car.carName,"Kiralandı")
//       this.ısRentaled=true;

//     }else{
//       this.toastrService.error(car.carName,"Bu araba zaten kiralanmış")

//     }
//  }

 
}





 
