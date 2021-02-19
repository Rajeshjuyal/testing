import { Component, OnInit } from '@angular/core';
import { CrudService } from './crud.sercvice';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-sequence',
  templateUrl: './sequence.component.html',
  styleUrls: ['./sequence.component.scss'],
})
export class SequenceComponent implements OnInit {
  public sequencelist: Array<any>[];

  constructor(private api: CrudService, private http: HttpClient) {
    this.getsequence();
  }

  ngOnInit(): void {}
  extractdata(res: Response) {
    const body = res;
    return body || {};
  }
  getsequence() {
    this.api
      .getssequence()
      .pipe(map(this.extractdata))
      .subscribe((result: any) => {
        console.log(result);
        this.sequencelist = result.response_data;
      });
  }
}
