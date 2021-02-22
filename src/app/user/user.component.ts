import { Component, OnInit } from '@angular/core';
import { CrudService } from '../user/crud.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  public userlist: Array<any> = [];
  constructor(private api: CrudService, private http: HttpClient) {
    this.User();
  }

  ngOnInit(): void {}
  extractdata(res: Response) {
    const body = res;
    return body || [{ name: 'No User' }];
  }

  User() {
    this.api
      .getUser()
      .pipe(map(this.extractdata))
      .subscribe((result: any) => {
        console.log(result);
        this.userlist = result.response_data;
      });
  }
}
