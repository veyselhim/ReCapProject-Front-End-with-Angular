import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {

  constructor(private carService:CarService,private formBuilder:FormBuilder,private toastrService:ToastrService,private activetedRoute:ActivatedRoute) { }

  car:CarDetail[];
  carId:number;
  carUpdateForm:FormGroup;

  ngOnInit(): void {
    this.activetedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.carId=params["carId"];
      }
      this.createCarUpdateForm();

    })

  }

getCarDetails(carId:number)
  {
    this.carService.getCarDetail(carId).subscribe(response => {
      this.car = response.data;
      console.log(response);
    })
  }

  createCarUpdateForm(){
    this.carUpdateForm=this.formBuilder.group({
        carName:["",Validators.required],
        brandId:["",Validators.required],
        colorId:["",Validators.required],
        unitPrice:["",Validators.required],
        carFindexScore:["",Validators.required]
    })      
  }
  
  
  update(){
    if(this.carUpdateForm.valid){
     // console.log(this.carUpdateForm)
      let car:Car = Object.assign({carId:this.carId},this.carUpdateForm.value)
      console.log(car)
      car.carId=Number(car.carId)
      this.carService.update(car).subscribe(data=>{
        this.toastrService.success(data.message,"Başarılı")
      },dataError=>{
        if(dataError.error.Errors.length>0){

          for(let i = 0 ; i<dataError.error.Errors.length;i++)
          {
            this.toastrService.error(dataError.error.Errors[i].ErrorMessage)
          }
        }
      })
    }else{
      this.toastrService.error("Formunuz eksik","Dikkat")
    }
  }
  

}
