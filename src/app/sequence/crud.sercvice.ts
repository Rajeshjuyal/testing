import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor(private http: HttpClient) {}
  getssequence() {
    return this.http.get('http//TSFapi.herokuapp.com/sequnence');
  }
}
