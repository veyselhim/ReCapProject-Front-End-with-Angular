import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarService } from 'src/app/services/car.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {


  imageBasePath = environment.baseUrl;
  defaultImg="/images/default.png"
  cars: CarDetail[] = []; 
  dataLoaded=false;
  filterText="";
  constructor(private carService:CarService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params=>{
       if(params["brandId"]){
        this.getCarsByBrand(params["brandId"]);
      }else if(params["colorId"]){
        this.getCarsByColor(params["colorId"]);
      }else{
        this.getCarDetails();
      }
    })

  
    
  }

  getCarDetails() {
     this.carService.getCarDetails().subscribe(response=>{
       this.cars=response.data
       this.dataLoaded=true;
     })      

  }

  getCarsByBrand(brandId:number) {
    this.carService.getCarsByBrand(brandId).subscribe(response=>{
      this.cars=response.data
      this.dataLoaded=true;
    })      

 }

 getCarsByColor(colorId:number){
   this.carService.getCarsByColor(colorId).subscribe(response=>{
     this.cars=response.data
     this.dataLoaded=true;
   })
 }

 getCarsByColorAndBrand(colorId:number,brandId:number){
   this.carService.getCarsByColorAndBrand(colorId,brandId).subscribe(response=>{
     this.cars=response.data
     this.dataLoaded=true;
   })
 }






 

}
