import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { CarDetail } from 'src/app/models/carDetail';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  cars: CarDetail[] = []; 

  brands:Brand[]=[];
  brandId:number;
  currentBrand:Brand={brandId:0,brandName:""};
  dataLoaded=false;
  constructor(private brandService:BrandService , private carService:CarService) { }

  ngOnInit(): void {
    this.getBrands();
  }

    getBrands(){
      this.brandService.getBrands().subscribe(response=>{
        this.brands=response.data
        this.dataLoaded=true;
      })
    }

    setCurrentBrand(brand:Brand){
      this.currentBrand=brand;
    }

    getCurrentBrandClass(brandId:number){
      if(this.brandId==brandId){
        return true
      }else{
        return false
      }
    }

    getAllBrandClass(){
      if(!this.currentBrand){
        return "form-select active"
      }else{
        return "form-select"
      }

    }

    selectChangeHandler (event:any){
      this.currentBrand = event.target.value;
    }
    getCars() {
      this.carService.getCarDetails().subscribe(response=>{
        this.cars=response.data
        this.dataLoaded=true;
      })      
 
   }
    
}
    
  

    

