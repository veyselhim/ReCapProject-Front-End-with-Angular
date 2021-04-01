import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card } from 'src/app/models/card';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.css']
})
export class RentalDetailComponent implements OnInit {


  cards: Card[] = []
  dataLoaded=false;
  constructor(private cardService:CardService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getCardDetail();
  }


  getCardDetail() {
    this.cardService.getCardDetail().subscribe(response=>{
      this.cards=response.data
      this.dataLoaded=true;
    }) 
  }
 

  

}

