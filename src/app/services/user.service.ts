import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = "https://localhost:44352/api/users/";


  constructor(private httpClient: HttpClient) { }


  getbyEmail(email:string):Observable<User> {
  return this.httpClient.get<User>(this.apiUrl+"email?email="+email);
}

 profileUpdate(user:User):Observable<ResponseModel>{
   console.log(user)
   return this.httpClient.post<ResponseModel>(this.apiUrl + 'users/updateprofile', {
     user:{
      'id': user.userId,
      'firstName': user.firstName,
      'lastName': user.lastName,
      'email': user.eMail,
      'status':user.status
    },
    password:user.password
  });
}
}
 