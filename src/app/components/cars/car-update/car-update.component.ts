import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {

  constructor(private carService:CarService,private formBuilder:FormBuilder,private toastrService:ToastrService,private activetedRoute:ActivatedRoute) { }

  car:Car[];
  carId:number;
  carUpdateForm:FormGroup;

  ngOnInit(): void {
    this.activetedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.carId=params["carId"];
        this.createCarUpdateForm(params["carId"]);
        this.getCarDetails(params["carId"]);
      }
    })

  }

getCarDetails(carId:number)
  {
    this.carService.getCarDetail(carId).subscribe(response => {
      this.car = response.data;
      console.log(response);
    })
  }

  createCarUpdateForm(carId:number){
    this.carUpdateForm=this.formBuilder.group({
        carName:["",Validators.required],
        brandId:["",Validators.required],
        colorId:["",Validators.required],
        unitPrice:["",Validators.required]
    })      
  }
  
  
  update(){
    if(this.carUpdateForm.valid){
      let car = Object.assign({},this.carUpdateForm.value)
      car.carId=this.carId;
      console.log(car)
      this.carService.update(car).subscribe(data=>{
        this.toastrService.success(data.message,"Başarılı")
      },dataError=>{
        if(dataError.error.Errors.length>0){
          for (let i = 0; i < dataError.error.Errors.length; i++) {
            
              this.toastrService.error(dataError.error.Errors[i].ErrorMessage,"Doğrulama Hatası")
          }
        }
      })
    }else{
      this.toastrService.error("Formunuz eksik","Dikkat")
    }
  }
  

}
