import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDetail } from '../models/carDetail';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  
  apiUrl = "https://localhost:44352/api/";

  constructor(private httpClient: HttpClient) { }

  getCarDetails():Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + "cars/getcardetails"
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + "cars/getcardetailsbybrand?brandId="+brandId;

    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  getCarsByColor(colorId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "cars/getcardetailsbycolor?colorId="+colorId;

    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarsByColorAndBrand(colorId:number,brandId:number):Observable<ListResponseModel<CarDetail>>{

    let newPath = this.apiUrl + "cars/getcarsbycolorandbrand?brandId="+brandId+"colorId="+colorId;

    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarDetail(carId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "cars/getcardetail?carId=" + carId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  
  add(car:Car):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"cars/add",car)
  }

  update(car:Car):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"cars/update",car)
  }
}
