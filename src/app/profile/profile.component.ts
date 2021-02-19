import { Component, OnInit } from '@angular/core';
import { CrudService } from './crud.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public profilelist: Array<any> = [];

  constructor(private api: CrudService, private http: HttpClient) {
    this.getprofile();
  }

  ngOnInit(): void {}

  extractdata(res: Response) {
    const body = res;
    return body || {};
  }
  getprofile() {
    this.api
      .getsprofile()
      .pipe(map(this.extractdata))
      .subscribe((result: any) => {
        console.log(result);
        this.profilelist = result.response_data;
      });
  }
}
