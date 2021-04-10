import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { Card } from 'src/app/models/card';
import { CardDetail } from 'src/app/models/cardDetail';
import { CarDetail } from 'src/app/models/carDetail';
import { CarService } from 'src/app/services/car.service';
import { CardService } from 'src/app/services/card.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.css']
})
export class RentalDetailComponent implements OnInit {
  car:Car
  cars: CarDetail[] = [];
  carDto:CarDetail
  Images:string[]=[]

  imageBasePath = environment.baseUrl;
  defaultImg="/images/default.jpg"

    ısRentaled = false;


  cardDto:CardDetail[]=[];
  cards: Card[] = [];
  dataLoaded=false;
  constructor(private cardService:CardService,private activatedRoute:ActivatedRoute,private carService:CarService,private toastrService:ToastrService) { }

  ngOnInit(): void {

    this.getCardDetail();  
  }


  getCardDetail() {
    this.cardService.getCardDetail().subscribe(response=>{
      this.cards=response.data
      this.dataLoaded=true;
    }) 
  }


    getCardDetailByUser(userId:number){
      this.cardService.getCardDetailByUser(userId).subscribe(response => {
        this.cards = response.data;
       // this.cardDto=response.data[0];
        this.dataLoaded=true;
        console.log(response);
      })
  }
 
  getCarDetail(carId:number){
    this.carService.getCarDetail(carId).subscribe(response => {
      this.cars = response.data;
      // this.car = response.data[0];
      this.carDto=response.data[0];
      this.dataLoaded=true;
      this.Images=this.carDto.images
      console.log(response)
    })
  
  
  }

//     addToCart(car:Car){
//       if(this.ısRentaled==false){
//          this.toastrService.success(car.carName,"Kiralandı")
//           this.ısRentaled=true;
//      }else{
//        this.toastrService.error(car.carName,"Bu araba zaten kiralanmış")

//      }
// }
 

}