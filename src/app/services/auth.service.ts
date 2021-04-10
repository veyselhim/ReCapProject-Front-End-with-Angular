import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';
import { JwtHelperService} from "@auth0/angular-jwt";
import { LocalStorageService } from './local-storage.service';
import { RegisterModel } from '../models/registerModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  currentUserId : number;
  jwtHelperService:JwtHelperService = new JwtHelperService();

  apiUrl = "https://localhost:44352/api/auth/";

  constructor(private httpClient:HttpClient, private localStorage : LocalStorageService ,) {this.setUserStats() }

  login(user:LoginModel){
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"login",user);
  }

  register(RegisterModel:RegisterModel):Observable<SingleResponseModel<TokenModel>>{
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"register",RegisterModel);
  }

  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }else{
      return false;
    }
  }

  setCurrentUserId(){
    var decoded = this.getDecodedToken();
    var propUserId = Object.keys(decoded).filter(x=> x.endsWith("/nameidentifier"))[0];
    this.currentUserId = Number(decoded[propUserId]);
  }

  getCurrentUserId():number{
    return this.currentUserId;
  }

  getDecodedToken(){
    try{
      return this.jwtHelperService.decodeToken(this.localStorage.getToken()!);
    }catch(Error){
      return null;
    }
  }

  async setUserStats(){
    if(this.loggedIn()){
      this.setCurrentUserId();
    }
  }

  logout(){
    this.localStorage.remove("token")
  }


  loggedIn(): boolean {
    let isExpired = this.jwtHelperService.isTokenExpired(this.localStorage.getToken()!)
    return !isExpired;
  }
}
