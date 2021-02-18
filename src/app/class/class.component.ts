import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss'],
})
export class ClassComponent implements OnInit {
  public classlist: Array<any> = [];
  constructor(private api: CrudService, private http: HttpClient) {
    this.classlist;
  }

  ngOnInit(): void {}

  extractdata(res: Response) {
    const body = res;
    return body || {};
  }
  class(){
    this.api.
    getsclass()
  }
}
