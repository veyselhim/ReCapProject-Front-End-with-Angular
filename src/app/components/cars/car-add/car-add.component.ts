import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ImageService } from 'src/app/services/carImage.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  carAddForm:FormGroup;
  constructor(private formBuilder:FormBuilder,
     private carService:CarService,
     private toastrService:ToastrService,
     private carImageService:ImageService,
     private brandService:BrandService,
     private colorService:ColorService) { }

  ngOnInit(): void {
    this.createCarForm();
  }

  createCarForm(){
    this.carAddForm=this.formBuilder.group({
        carName:["",Validators.required],
        brandId:["",Validators.required],
        colorId:["",Validators.required],
        unitPrice:["",Validators.required],
        carFindexScore:["",Validators.required]
    })      
  }

  add(){
    if(this.carAddForm.valid){
      let carModel = Object.assign({},this.carAddForm.value)
      this.carService.add(carModel).subscribe(data=>{
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
