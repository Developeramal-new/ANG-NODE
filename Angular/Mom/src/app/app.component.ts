import { AuthService } from './services/auth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy, OnInit {
  constructor(private authserv: AuthService) {}
  ngOnInit() {
    const templog = localStorage.getItem('token');
    if (templog == null) {
      this.authserv.emitloggedin(false);
    } else {
      this.authserv.emitloggedin(true);
    }
  }
  ngOnDestroy() {
    localStorage.removeItem('token');
  }
}
