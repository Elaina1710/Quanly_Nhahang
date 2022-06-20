import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  readonly ApiURL = "http://localhost:5000/api";
  readonly ImageURL = "http://localhost:5000/Images/";

  constructor(private http: HttpClient) {
  }

  //#region Food 
  GetAllFoods(): Observable<any[]> {
    return this.http.get<any>(this.ApiURL + '/food');
  }

  GetFoodByDanhMuc(danhmuc: string): Observable<any[]> {
    return this.http.get<any>(this.ApiURL + '/food');
  }

  AddFood(newObj: any) {
    return this.http.post(this.ApiURL + '/food', newObj);
  }

  UpdateFood(newObj: any) {
    return this.http.put(this.ApiURL + '/food', newObj);
  }

  DeleteFood(id: number) {
    return this.http.delete(this.ApiURL + '/food/' + id);
  }

  UploadImg(val: any) {
    return this.http.post(this.ApiURL + '/food/SaveFile', val);
  }
  //#endregion

  //#region Account
  CheckLogin(username: string, password: string) {
    return this.http.get(this.ApiURL + "/account/" + username + "&" + password);
  }
  //#endregion

  //#region Ban
  GetBan(): Observable<any[]> {
    return this.http.get<any>(this.ApiURL + '/ban');
  }

  AddBan(newObj: any) {
    return this.http.post(this.ApiURL + '/ban', newObj);
  }

  UpdateBan(newObj: any) {
    return this.http.put(this.ApiURL + '/ban', newObj);
  }

  DeleteBan(id: number) {
    return this.http.delete(this.ApiURL + '/ban/' + id);
  }
  //#endregion

  //#region HoaDon
  GetHoaDon(): Observable<any[]> {
    return this.http.get<any>(this.ApiURL + '/hoadon');
  }
  GetHDByIdBan(id: number): Observable<any[]> {
    return this.http.get<any>(this.ApiURL + '/hoadon');
  }
  GetHDByDate(dateStart: Date, dateEnd: Date): Observable<any[]> {
    return this.http.get<any>(this.ApiURL + '/hoadon');
  }

  AddHoaDon(newObj: any) {
    return this.http.post(this.ApiURL + '/hoadon', newObj);
  }

  UpdateHoaDon(newObj: any) {
    return this.http.put(this.ApiURL + '/hoadon', newObj);
  }
  //#endregion
}
