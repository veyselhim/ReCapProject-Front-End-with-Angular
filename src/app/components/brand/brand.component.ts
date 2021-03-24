import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands:Brand[]=[];
  brandId:number;
  currentBrand:Brand={brandId:0,brandName:""};
  dataLoaded=false;
  constructor(private brandService:BrandService) { }

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

    
}
    
  

    

