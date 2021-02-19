import { Component, OnInit } from '@angular/core';
import { CrudService } from './crud.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss'],
})
export class TransferComponent implements OnInit {
  public Transferlist: Array<any> = [];

  constructor(private api: CrudService, private http: HttpClient) {
    this.transfer();
  }

  ngOnInit(): void {}
  extractdata(res: Response) {
    const body = res;
    return body || {};
  }
  transfer() {
    this.api
      .getstransfer()
      .pipe(map(this.extractdata))
      .subscribe((result: any) => {
        console.log(result);
        this.Transferlist = result.response_data;
      });
  }
}
