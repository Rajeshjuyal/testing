import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor(private http: HttpClient) {}
  getstransfer() {
    return this.http.get('http://localhost:4000/transfer');
  }
}
