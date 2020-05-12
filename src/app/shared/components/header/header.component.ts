import { Component, OnInit } from '@angular/core';

// import { AppState } from '../../../store/app.states';
import { AuthService } from '../../../core/authentification/auth.service';
// import { Store } from '@ngrx/store';
// import { Observable } from 'rxjs';
// import User from '../../interfaces/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  // auth: Observable<any>;
  // isAuthenticated: false;
  // user: User;

  constructor(
    // private store: Store<AppState>
    public authService: AuthService
  ) {
    // this.auth = this.store.select('auth');
  }

  ngOnInit(): void {
    // this.auth.subscribe((state) => {
    //   this.isAuthenticated = state.isAuthenticated;
    //   this.user = state.user;
    // });
  }

  logout(): void {
    this.authService.signOut();
  }
}
