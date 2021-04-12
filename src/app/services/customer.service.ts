import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  
  apiUrl = "https://localhost:44352/api/";

  constructor(private httpClient: HttpClient) { }

  getCustomers():Observable<ListResponseModel<Customer>> {
    let newPath = this.apiUrl + "customers/getall";

  return this.httpClient.get<ListResponseModel<Customer>>(newPath);
}

getCustomerById(customerId:number):Observable<ListResponseModel<Customer>> {
  let newPath = this.apiUrl + "customers/getbyid?id="+customerId;

  return this.httpClient.get<ListResponseModel<Customer>>(newPath);
}

  add(customer:Customer):Observable<ResponseModel> {

  return this.httpClient.post<ResponseModel>(this.apiUrl+"customers/add",customer);
}
}
