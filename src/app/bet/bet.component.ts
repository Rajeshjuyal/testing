import { Component, OnInit } from '@angular/core';
import { CrudService } from './crud.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
// import {getsbets} from './crud.service'

@Component({
  selector: 'app-bet',
  templateUrl: './bet.component.html',
  styleUrls: ['./bet.component.scss'],
})
export class BetComponent implements OnInit {
  public betlist: Array<any> = [];

  constructor(private api: CrudService, private http: HttpClient) {
    this.bets();
  }

  ngOnInit(): void {}

  extractdata(res: Response) {
    const body = res;
    return body || {};
  }
  bets() {
    this.api
      .getsbets()
      .pipe(map(this.extractdata))
      .subscribe((result: any) => {
        console.log(result);
        this.betlist = result.response_data;
      });
  }
}
