import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  
  apiUrl = "https://localhost:44352/api/";

  constructor(private httpClient: HttpClient) { }

  getCars():Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getcardetails"
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getcardetailsbybrand?brandId="+brandId;

    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarsByColor(colorId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getcardetailsbycolor?colorId="+colorId;

    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByColorAndBrand(colorId:number,brandId:number):Observable<ListResponseModel<Car>>{

    let newPath = this.apiUrl + "cars/getcarsbycolorandbrand?brandId="+brandId+"colorId="+colorId;

    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarDetail(carId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getcardetail?carId=" + carId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  
  add(car:Car):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"cars/add",car)
  }
}
