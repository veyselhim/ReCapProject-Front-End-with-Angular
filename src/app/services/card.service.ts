import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../models/card';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CardService {


  apiUrl = "https://localhost:44352/api/"


  constructor(private httpClient:HttpClient) { }


  getCards():Observable<ListResponseModel<Card>>{
    return this.httpClient.get<ListResponseModel<Card>>(this.apiUrl);
  }
  
  getCardDetail():Observable<ListResponseModel<Card>>{
    let newPath = this.apiUrl + "cards/getcarddetails" ;
    return this.httpClient.get<ListResponseModel<Card>>(newPath);
  }
}
