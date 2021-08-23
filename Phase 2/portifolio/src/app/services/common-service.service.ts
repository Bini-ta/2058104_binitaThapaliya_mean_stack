import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
 
})
export class CommonServiceService {

  URL = "http://localhost:3000/resto"
  regURL = " http://localhost:3000/users"

  constructor(private _http: HttpClient) { }

createUser(data: any){
return this._http.post(this.regURL, data);
}


}
