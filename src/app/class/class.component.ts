import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss'],
})
export class ClassComponent implements OnInit {
  constructor(private api: CrudService, private http: HttpClient) {}

  ngOnInit(): void {}
}
