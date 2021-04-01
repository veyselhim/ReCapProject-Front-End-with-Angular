import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';


@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  car:Car;
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
      this.car=response.data[0];
      this.dataLoaded=true;
    })
  }

  addToCart(car:Car){
    if(this.ısRentaled==false){
      this.toastrService.success(car.carName,"Kiralandı")
      this.ısRentaled=true;

    }else{
      this.toastrService.error(car.carName,"Bu araba zaten kiralanmış")

    }
 }

 
}





 
