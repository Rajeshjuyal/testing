import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor(private http: HttpClient) {}
  getsprofile() {
    return this.http.get('https://tsfapi.herokuapp.com/profile');
  }
}
