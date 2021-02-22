import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'testing';
  private router: Router;
  private route: ActivatedRoute;
}
