import { AuthService } from './../services/auth.service';
import { Canactivate } from './../canactivate';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  navbarOpen = false;
  hide = true;
  showFiller = false;
  loggedIn = false;
  admin = false;
  constructor(private authserv: AuthService) {
    this.authserv.loggedin.subscribe(value => {
      this.loggedIn = value;
    });
    this.authserv.admin.subscribe(value => {
      this.admin = value;
    });
   }

  ngOnInit(): void {
  }

  close(reason: string) {
    this.sidenav.close();
  }
  logout() {
    this.authserv.emitloggedin(false);
    localStorage.removeItem('token');
    this.authserv.emitadmin(false);
  }


}
